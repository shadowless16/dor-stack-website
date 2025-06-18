// Main JavaScript file for Do'r Stack Limited website

// Import Lucide icons library
import lucide from "lucide"

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  // Initialize all components
  initMobileMenu()
  initScrollAnimations()
  initSmoothScrolling()
  initContactForm()
  initTestimonialCarousel()
  initBlogSearch()

  // Add loading animation
  document.body.classList.add("loaded")
})

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")

      // Toggle icon
      const icon = mobileMenuBtn.querySelector("i")
      if (mobileNav.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x")
      } else {
        icon.setAttribute("data-lucide", "menu")
      }
      lucide.createIcons()
    })

    // Close mobile menu when clicking on links
    const mobileNavLinks = mobileNav.querySelectorAll(".mobile-nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.setAttribute("data-lucide", "menu")
        lucide.createIcons()
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.setAttribute("data-lucide", "menu")
        lucide.createIcons()
      }
    })
  }
}

// Scroll Animations
function initScrollAnimations() {
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

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".stat-card, .service-card, .value-card, .why-choose-item")
  animatedElements.forEach((el) => {
    el.classList.add("fade-in-up")
    observer.observe(el)
  })
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Contact Form Functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML

      // Show loading state
      submitBtn.innerHTML = "Sending Message..."
      submitBtn.disabled = true

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Show success message
        showNotification("Thank you! Your message has been sent successfully.", "success")

        // Reset form
        contactForm.reset()

        // Reset button
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }
}

// Testimonial Carousel
function initTestimonialCarousel() {
  const carousel = document.querySelector(".testimonial-carousel")
  const prevBtn = document.querySelector(".carousel-prev")
  const nextBtn = document.querySelector(".carousel-next")
  const indicators = document.querySelectorAll(".carousel-indicator")

  if (carousel && prevBtn && nextBtn) {
    let currentSlide = 0
    const totalSlides = carousel.children.length

    function showSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`

      // Update indicators
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index)
      })

      currentSlide = index
    }

    function nextSlide() {
      const next = (currentSlide + 1) % totalSlides
      showSlide(next)
    }

    function prevSlide() {
      const prev = (currentSlide - 1 + totalSlides) % totalSlides
      showSlide(prev)
    }

    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)

    // Indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => showSlide(index))
    })

    // Auto-play carousel
    setInterval(nextSlide, 5000)
  }
}

// Blog Search Functionality
function initBlogSearch() {
  const searchInput = document.getElementById("blogSearch")
  const blogPosts = document.querySelectorAll(".blog-post")

  if (searchInput && blogPosts.length > 0) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()

      blogPosts.forEach((post) => {
        const title = post.querySelector(".blog-title").textContent.toLowerCase()
        const excerpt = post.querySelector(".blog-excerpt").textContent.toLowerCase()
        const tags = post.querySelector(".blog-tags").textContent.toLowerCase()

        const isMatch = title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm)

        post.style.display = isMatch ? "block" : "none"
      })
    })
  }
}

// Newsletter Subscription
function subscribeNewsletter(email) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Successfully subscribed to newsletter!" })
    }, 1000)
  })
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `

  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100)

  // Auto-hide after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  }, 5000)

  // Close button functionality
  notification.querySelector(".notification-close").addEventListener("click", () => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  })
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.createElement("button")
  scrollBtn.innerHTML = '<i data-lucide="arrow-up"></i>'
  scrollBtn.className = "scroll-to-top"
  scrollBtn.setAttribute("aria-label", "Scroll to top")
  scrollBtn.addEventListener("click", scrollToTop)

  document.body.appendChild(scrollBtn)

  // Show/hide scroll button based on scroll position
  window.addEventListener(
    "scroll",
    throttle(() => {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add("visible")
      } else {
        scrollBtn.classList.remove("visible")
      }
    }, 100),
  )

  // Reinitialize icons after adding scroll button
  lucide.createIcons()
})

// Form validation utilities
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^[+]?[1-9][\d]{0,15}$/
  return re.test(phone.replace(/\s/g, ""))
}

// Loading states
function showLoading(element) {
  element.classList.add("loading")
  element.disabled = true
}

function hideLoading(element) {
  element.classList.remove("loading")
  element.disabled = false
}

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
  // Replace with actual analytics implementation
  console.log("Event tracked:", { category, action, label })
}

// Performance monitoring
function measurePerformance() {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      const perfData = performance.getEntriesByType("navigation")[0]
      console.log("Page load time:", perfData.loadEventEnd - perfData.loadEventStart, "ms")
    })
  }
}

// Initialize performance monitoring
measurePerformance()

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  // You could send this to an error tracking service
})

// Service Worker registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
