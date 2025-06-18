// Industries page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initStatsCounters()
  initIndustryCardInteractions()
  initCertificationAnimations()
  initIndustryFiltering()
})

// Animated stats counters
function initStatsCounters() {
  const statsCounters = document.querySelectorAll(".stat-number")

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        animateCounter(entry.target)
        entry.target.classList.add("counted")
      }
    })
  }, observerOptions)

  statsCounters.forEach((counter) => observer.observe(counter))
}

function animateCounter(element) {
  const target = Number.parseInt(element.textContent.replace(/[^0-9]/g, ""))
  const suffix = element.textContent.replace(/[0-9]/g, "")
  let current = 0
  const increment = target / 50
  const duration = 2000

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current) + suffix
  }, duration / 50)
}

// Industry card interactions
function initIndustryCardInteractions() {
  const industryCards = document.querySelectorAll(".industry-card")

  industryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const industryName = this.querySelector(".industry-title").textContent
      trackIndustryInteraction("card_click", industryName)

      // Toggle expanded state
      this.classList.toggle("expanded")
    })

    // Hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

// Certification animations
function initCertificationAnimations() {
  const certifications = document.querySelectorAll(".certification-item")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, index * 100)
        }
      })
    },
    { threshold: 0.3 },
  )

  certifications.forEach((cert) => {
    cert.classList.add("fade-in-up")
    observer.observe(cert)
  })
}

// Industry filtering (if you have filter buttons)
function initIndustryFiltering() {
  const filterButtons = document.querySelectorAll(".industry-filter-btn")
  const industryCards = document.querySelectorAll(".industry-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter cards
      industryCards.forEach((card) => {
        const cardCategory = card.dataset.category

        if (filter === "all" || cardCategory === filter) {
          card.style.display = "block"
          card.classList.add("filter-match")
        } else {
          card.style.display = "none"
          card.classList.remove("filter-match")
        }
      })

      trackIndustryInteraction("filter_used", filter)
    })
  })
}

function trackIndustryInteraction(action, label) {
  console.log(`Industry interaction: ${action} - ${label}`)

  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "industry_interaction", {
      event_category: "engagement",
      event_label: action,
      value: label,
    })
  }
}
