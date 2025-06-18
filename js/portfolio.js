// Portfolio page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioFiltering()
  initCaseStudyModals()
  initPortfolioAnimations()
  initImageGallery()
  initClientLogos()
})

// Portfolio filtering functionality
function initPortfolioFiltering() {
  const filterButtons = document.querySelectorAll(".portfolio-filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const itemCategory = item.dataset.category

        if (filter === "all" || itemCategory === filter) {
          item.style.display = "block"
          item.classList.add("filter-show")
        } else {
          item.style.display = "none"
          item.classList.remove("filter-show")
        }
      })

      trackPortfolioInteraction("filter_used", filter)
    })
  })
}

// Case study modal functionality
function initCaseStudyModals() {
  const caseStudyCards = document.querySelectorAll(".case-study-card")
  const modal = document.getElementById("caseStudyModal")
  const closeBtn = modal?.querySelector(".modal-close")

  caseStudyCards.forEach((card) => {
    card.addEventListener("click", function () {
      const caseStudyData = {
        title: this.querySelector(".case-study-title").textContent,
        client: this.querySelector(".case-study-client").textContent,
        description: this.querySelector(".case-study-description").textContent,
        image: this.querySelector(".case-study-image img").src,
        results: this.dataset.results || "Significant improvement in business metrics",
      }

      openCaseStudyModal(caseStudyData)
      trackPortfolioInteraction("case_study_opened", caseStudyData.title)
    })
  })

  // Close modal functionality
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCaseStudyModal)
  }

  // Close modal on outside click
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeCaseStudyModal()
      }
    })
  }

  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeCaseStudyModal()
    }
  })
}

function openCaseStudyModal(data) {
  const modal = document.getElementById("caseStudyModal")
  if (!modal) return

  // Populate modal content
  modal.querySelector(".modal-title").textContent = data.title
  modal.querySelector(".modal-client").textContent = data.client
  modal.querySelector(".modal-description").textContent = data.description
  modal.querySelector(".modal-image").src = data.image
  modal.querySelector(".modal-results").textContent = data.results

  // Show modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal")
  if (!modal) return

  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Portfolio animations
function initPortfolioAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Animate portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  portfolioItems.forEach((item, index) => {
    item.classList.add("fade-in-up")
    item.style.transitionDelay = `${index * 0.1}s`
    observer.observe(item)
  })

  // Animate case studies
  const caseStudies = document.querySelectorAll(".case-study-card")
  caseStudies.forEach((study, index) => {
    study.classList.add("fade-in-up")
    study.style.transitionDelay = `${index * 0.15}s`
    observer.observe(study)
  })
}

// Image gallery functionality
function initImageGallery() {
  const galleryImages = document.querySelectorAll(".portfolio-gallery img")

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      openImageLightbox(this.src, this.alt)
    })
  })
}

function openImageLightbox(src, alt) {
  const lightbox = document.createElement("div")
  lightbox.className = "image-lightbox"
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}">
      <button class="lightbox-close">&times;</button>
    </div>
  `

  document.body.appendChild(lightbox)
  document.body.style.overflow = "hidden"

  // Show lightbox
  setTimeout(() => lightbox.classList.add("active"), 10)

  // Close functionality
  const closeBtn = lightbox.querySelector(".lightbox-close")
  closeBtn.addEventListener("click", () => closeLightbox(lightbox))

  lightbox.addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox(lightbox)
    }
  })
}

function closeLightbox(lightbox) {
  lightbox.classList.remove("active")
  document.body.style.overflow = "auto"
  setTimeout(() => lightbox.remove(), 300)
}

// Client logos animation
function initClientLogos() {
  const logoGrid = document.querySelector(".client-logos-grid")

  if (logoGrid) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const logos = entry.target.querySelectorAll(".client-logo")
            logos.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.add("visible")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(logoGrid)
  }
}

function trackPortfolioInteraction(action, label) {
  console.log(`Portfolio interaction: ${action} - ${label}`)

  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "portfolio_interaction", {
      event_category: "engagement",
      event_label: action,
      value: label,
    })
  }
}
