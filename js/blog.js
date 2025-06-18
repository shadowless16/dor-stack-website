// Blog page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initBlogSearch()
  initCategoryFilter()
  initNewsletterSubscription()
  initBlogAnimations()
  initLoadMore()
  if (window.location.pathname.includes("blog-post")) {
    initReadingProgress()
  }
})

// Blog search functionality
function initBlogSearch() {
  const searchInput = document.getElementById("blogSearch")
  const blogPosts = document.querySelectorAll(".blog-post-card")

  if (!searchInput || blogPosts.length === 0) return

  searchInput.addEventListener(
    "input",
    debounce(function () {
      const searchTerm = this.value.toLowerCase().trim()

      blogPosts.forEach((post) => {
        const title = post.querySelector(".blog-post-title")?.textContent.toLowerCase() || ""
        const excerpt = post.querySelector(".blog-post-excerpt")?.textContent.toLowerCase() || ""
        const tags = post.querySelector(".blog-post-tags")?.textContent.toLowerCase() || ""
        const author = post.querySelector(".post-meta-item span")?.textContent.toLowerCase() || ""

        const isMatch =
          title.includes(searchTerm) ||
          excerpt.includes(searchTerm) ||
          tags.includes(searchTerm) ||
          author.includes(searchTerm)

        post.style.display = isMatch ? "block" : "none"

        // Add animation when showing/hiding
        if (isMatch) {
          post.classList.add("search-match")
        } else {
          post.classList.remove("search-match")
        }
      })

      // Show "no results" message if needed
      const visiblePosts = Array.from(blogPosts).filter((post) => post.style.display !== "none")
      showNoResultsMessage(visiblePosts.length === 0 && searchTerm.length > 0)
    }, 300),
  )
}

// Category filter functionality
function initCategoryFilter() {
  const categoryLinks = document.querySelectorAll(".category-link")
  const blogPosts = document.querySelectorAll(".blog-post-card")

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Update active category
      categoryLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")

      const category = this.querySelector("span").textContent.toLowerCase()

      // Filter posts
      blogPosts.forEach((post) => {
        const postCategory = post.querySelector(".blog-post-category")?.textContent.toLowerCase() || ""

        if (category === "all" || postCategory === category) {
          post.style.display = "block"
          post.classList.add("category-match")
        } else {
          post.style.display = "none"
          post.classList.remove("category-match")
        }
      })

      // Track category selection
      trackBlogInteraction("category_filter", category)
    })
  })
}

// Newsletter subscription
function initNewsletterSubscription() {
  const newsletterForms = document.querySelectorAll(".newsletter-form")

  newsletterForms.forEach((form) => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault()

      const emailInput = this.querySelector(".newsletter-input")
      const submitBtn = this.querySelector(".newsletter-btn")
      const email = emailInput.value.trim()

      if (!validateEmail(email)) {
        showNotification("Please enter a valid email address", "error")
        return
      }

      const originalText = submitBtn.textContent
      submitBtn.textContent = "Subscribing..."
      submitBtn.disabled = true

      try {
        await subscribeToNewsletter(email)
        showNotification("Successfully subscribed to our newsletter!", "success")
        emailInput.value = ""
        trackBlogInteraction("newsletter_subscribe", email)
      } catch (error) {
        showNotification("Subscription failed. Please try again.", "error")
      } finally {
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    })
  })
}

// Load more functionality
function initLoadMore() {
  const loadMoreBtn = document.querySelector(".blog-load-more button")

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", async function () {
      const originalText = this.textContent
      this.textContent = "Loading..."
      this.disabled = true

      try {
        // Simulate loading more posts
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // In a real implementation, you would fetch more posts from an API
        showNotification("No more articles to load", "info")
        this.style.display = "none"
      } catch (error) {
        showNotification("Failed to load more articles", "error")
      } finally {
        this.textContent = originalText
        this.disabled = false
      }
    })
  }
}

// Blog animations
function initBlogAnimations() {
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

  // Animate blog post cards
  const blogCards = document.querySelectorAll(".blog-post-card")
  blogCards.forEach((card, index) => {
    card.classList.add("fade-in-up")
    card.style.transitionDelay = `${index * 0.1}s`
    observer.observe(card)
  })

  // Animate featured post
  const featuredPost = document.querySelector(".featured-post-card")
  if (featuredPost) {
    featuredPost.classList.add("fade-in-up")
    observer.observe(featuredPost)
  }
}

// Newsletter subscription API call
async function subscribeToNewsletter(email) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success/failure
      if (Math.random() > 0.1) {
        resolve({ success: true })
      } else {
        reject(new Error("Subscription failed"))
      }
    }, 1500)
  })
}

// Show no results message
function showNoResultsMessage(show) {
  let noResultsMsg = document.querySelector(".no-results-message")

  if (show && !noResultsMsg) {
    noResultsMsg = document.createElement("div")
    noResultsMsg.className = "no-results-message"
    noResultsMsg.innerHTML = `
      <div class="no-results-content">
        <i class="search-icon"></i>
        <h3>No articles found</h3>
        <p>Try adjusting your search terms or browse our categories.</p>
      </div>
    `

    const blogGrid = document.querySelector(".blog-posts-grid")
    if (blogGrid) {
      blogGrid.appendChild(noResultsMsg)
    }
  } else if (!show && noResultsMsg) {
    noResultsMsg.remove()
  }
}

// Utility functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

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

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
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

function trackBlogInteraction(action, label) {
  console.log(`Blog interaction: ${action} - ${label}`)

  // Analytics integration
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "blog_interaction", {
      event_category: "engagement",
      event_label: action,
      value: label,
    })
  }
}

// Reading progress indicator for blog posts
function initReadingProgress() {
  const progressBar = document.createElement("div")
  progressBar.className = "reading-progress"
  progressBar.innerHTML = '<div class="reading-progress-bar"></div>'
  document.body.appendChild(progressBar)

  const progressBarFill = progressBar.querySelector(".reading-progress-bar")
  const article = document.querySelector(".blog-post-content")

  if (article) {
    window.addEventListener("scroll", () => {
      const articleTop = article.offsetTop
      const articleHeight = article.offsetHeight
      const windowHeight = window.innerHeight
      const scrollTop = window.pageYOffset

      const progress = Math.min(Math.max((scrollTop - articleTop + windowHeight / 2) / articleHeight, 0), 1)

      progressBarFill.style.width = `${progress * 100}%`
    })
  }
}
