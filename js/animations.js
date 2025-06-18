// Global animations and utilities

// Scroll-triggered animations
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

  // Common animated elements
  const animatedElements = document.querySelectorAll(`
    .fade-in-up,
    .fade-in-left,
    .fade-in-right,
    .scale-in,
    .slide-in-bottom
  `)

  animatedElements.forEach((element) => {
    observer.observe(element)
  })
}

// Parallax scrolling effect
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll(".parallax")

  if (parallaxElements.length === 0) return

  function updateParallax() {
    const scrollTop = window.pageYOffset

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5
      const yPos = -(scrollTop * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  }

  window.addEventListener("scroll", throttle(updateParallax, 10))
}

// Smooth reveal animations
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal")

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    },
    {
      threshold: 0.15,
    },
  )

  revealElements.forEach((element) => {
    revealObserver.observe(element)
  })
}

// Utility functions
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

function debounce(func, wait, immediate) {
  let timeout
  return function () {
    
    const args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, args)
  }
}

// Initialize all animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations()
  initParallaxEffects()
  initRevealAnimations()
})
