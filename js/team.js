// Team page specific JavaScript
console.log("Team page scripts loaded");
document.addEventListener("DOMContentLoaded", () => {
  initTeamMemberModals();
  initDepartmentFiltering();
  initTeamAnimations();
  initSocialLinks();
});

// Team member modal functionality
function initTeamMemberModals() {
  const teamCards = document.querySelectorAll(".team-member-card");
  const modal = document.getElementById("teamMemberModal");
  const closeBtn = modal?.querySelector(".modal-close");

  teamCards.forEach((card) => {
    card.addEventListener("click", function () {
      const memberData = {
        name: this.querySelector(".member-name").textContent,
        position: this.querySelector(".member-position").textContent,
        image: this.querySelector(".member-image img").src,
        bio: this.dataset.bio || "Experienced professional with expertise in their field.",
        email: this.dataset.email || "",
        linkedin: this.dataset.linkedin || "",
        expertise: this.dataset.expertise ? this.dataset.expertise.split(",") : [],
      };

      openTeamMemberModal(memberData);
      trackTeamInteraction("member_profile_opened", memberData.name);
    });
  });

  // Close modal functionality
  if (closeBtn) {
    closeBtn.addEventListener("click", closeTeamMemberModal);
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeTeamMemberModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeTeamMemberModal();
    }
  });
}

function openTeamMemberModal(data) {
  const modal = document.getElementById("teamMemberModal");
  if (!modal) return;

  // Populate modal content
  modal.querySelector(".modal-name").textContent = data.name;
  modal.querySelector(".modal-position").textContent = data.position;
  modal.querySelector(".modal-image").src = data.image;
  modal.querySelector(".modal-bio").textContent = data.bio;

  // Add expertise tags
  const expertiseContainer = modal.querySelector(".modal-expertise");
  expertiseContainer.innerHTML = "";
  data.expertise.forEach((skill) => {
    const tag = document.createElement("span");
    tag.className = "expertise-tag";
    tag.textContent = skill.trim();
    expertiseContainer.appendChild(tag);
  });

  // Add contact links
  const contactContainer = modal.querySelector(".modal-contact");
  contactContainer.innerHTML = "";

  if (data.email) {
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${data.email}`;
    emailLink.innerHTML = '<i data-lucide="mail"></i> Email';
    emailLink.className = "contact-link";
    contactContainer.appendChild(emailLink);
  }

  if (data.linkedin) {
    const linkedinLink = document.createElement("a");
    linkedinLink.href = data.linkedin;
    linkedinLink.target = "_blank";
    linkedinLink.innerHTML = '<i data-lucide="linkedin"></i> LinkedIn';
    linkedinLink.className = "contact-link";
    contactContainer.appendChild(linkedinLink);
  }

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Reinitialize icons
  const lucide = window.lucide; // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function closeTeamMemberModal() {
  const modal = document.getElementById("teamMemberModal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Department filtering
function initDepartmentFiltering() {
  const filterButtons = document.querySelectorAll(".department-filter-btn");
  const teamMembers = document.querySelectorAll(".team-member-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const department = this.dataset.department;

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter team members
      teamMembers.forEach((member) => {
        const memberDepartment = member.dataset.department;

        if (department === "all" || memberDepartment === department) {
          member.style.display = "block";
          member.classList.add("department-match");
        } else {
          member.style.display = "none";
          member.classList.remove("department-match");
        }
      });

      trackTeamInteraction("department_filter", department);
    });
  });
}

// Team animations
function initTeamAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Animate team member cards (if any)
  const teamCards = document.querySelectorAll(".team-member-card");
  teamCards.forEach((card, index) => {
    card.classList.add("fade-in-up");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate leadership cards
  const leadershipCards = document.querySelectorAll(".leader-card");
  leadershipCards.forEach((card, index) => {
    card.classList.add("fade-in-up");
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
  });

  // Animate department head cards
  const departmentHeadCards = document.querySelectorAll(".department-head-card");
  departmentHeadCards.forEach((card, index) => {
    card.classList.add("fade-in-up");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate culture values
  const cultureItems = document.querySelectorAll(".culture-value");
  cultureItems.forEach((item, index) => {
    item.classList.add("fade-in-up");
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
}

// Social links functionality
function initSocialLinks() {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const platform = this.dataset.platform;
      const memberName = this.closest(".team-member-card")?.querySelector(".member-name")?.textContent;

      trackTeamInteraction("social_link_clicked", `${platform} - ${memberName}`);
    });
  });
}

function trackTeamInteraction(action, label) {
  console.log(`Team interaction: ${action} - ${label}`);

  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "team_interaction", {
      event_category: "engagement",
      event_label: action,
      value: label,
    });
  }
}
