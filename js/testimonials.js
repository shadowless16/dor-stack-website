// Testimonials page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initTestimonialCarousel()
  initTestimonialAnimations()
  addClickTrackingToTestimonialCards()
})

// Testimonial Carousel Functionality
function initTestimonialCarousel() {
  const carousel = document.getElementById("testimonialCarousel")
  const prevBtn = document.getElementById("carouselPrev")
  const nextBtn = document.getElementById("carouselNext")
  const indicators = document.getElementById("carouselIndicators")

  if (!carousel || !prevBtn || !nextBtn || !indicators) return

  const slides = carousel.querySelectorAll(".testimonial-slide")
  const indicatorBtns = indicators.querySelectorAll(".carousel-indicator")
  let currentSlide = 0
  const totalSlides = slides.length

  // Show specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index)
    })

    // Update indicators
    indicatorBtns.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index)
    })

    currentSlide = index
  }

  // Next slide
  function nextSlide() {
    const next = (currentSlide + 1) % totalSlides
    showSlide(next)
  }

  // Previous slide
  function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(prev)
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // Indicator clicks
  indicatorBtns.forEach((indicator, index) => {
    indicator.addEventListener("click", () => showSlide(index))
  })

  // Auto-play carousel (optional)
  let autoPlayInterval = setInterval(nextSlide, 8000)

  // Pause auto-play on hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval)
  })

  carousel.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 8000)
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
    } else if (e.key === "ArrowRight") {
      nextSlide()
    }
  })

  // Touch/swipe support for mobile
  let startX = 0
  let endX = 0

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX
  })

  carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    const diff = startX - endX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide() // Swipe left - next slide
      } else {
        prevSlide() // Swipe right - previous slide
      }
    }
  }

  // Initialize first slide
  showSlide(0)
}

// Animate testimonial cards on scroll
function initTestimonialAnimations() {
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

  // Observe testimonial grid cards
  const testimonialCards = document.querySelectorAll(".testimonial-grid-card")
  testimonialCards.forEach((card, index) => {
    card.classList.add("fade-in-up")
    card.style.transitionDelay = `${index * 0.1}s`
    observer.observe(card)
  })

  // Observe trust indicators
  const trustIndicators = document.querySelectorAll(".trust-indicator")
  trustIndicators.forEach((indicator, index) => {
    indicator.classList.add("fade-in-up")
    indicator.style.transitionDelay = `${index * 0.1}s`
    observer.observe(indicator)
  })
}

// Utility function to track testimonial interactions
function trackTestimonialInteraction(action, testimonialId) {
  // Analytics tracking
  console.log(`Testimonial interaction: ${action} - ${testimonialId}`)

  // You can integrate with analytics services here
  if (window.gtag) {
    window.gtag("event", "testimonial_interaction", {
      event_category: "engagement",
      event_label: action,
      value: testimonialId,
    })
  }
}

// Add click tracking to testimonial cards
function addClickTrackingToTestimonialCards() {
  const testimonialCards = document.querySelectorAll(".testimonial-grid-card")

  testimonialCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      trackTestimonialInteraction("card_click", `testimonial_${index}`)
    })
  })
}
