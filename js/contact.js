// Contact page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  initContactFormValidation()
  initQuickActions()
  initOfficeInteractions()
  initNewsletterSubscription()
})

// Enhanced contact form validation
function initContactFormValidation() {
  const form = document.getElementById("contactForm")
  const inputs = form.querySelectorAll("input, select, textarea")

  // Real-time validation
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this)
    })

    input.addEventListener("input", function () {
      clearFieldError(this)
    })
  })

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let isValid = true
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false
      }
    })

    if (isValid) {
      submitContactForm(form)
    }
  })
}

function validateField(field) {
  const value = field.value.trim()
  const fieldName = field.name
  let isValid = true
  let errorMessage = ""

  // Required field validation
  if (field.hasAttribute("required") && !value) {
    errorMessage = "This field is required"
    isValid = false
  }

  // Email validation
  if (fieldName === "email" && value && !validateEmail(value)) {
    errorMessage = "Please enter a valid email address"
    isValid = false
  }

  // Phone validation
  if (fieldName === "phone" && value && !validatePhone(value)) {
    errorMessage = "Please enter a valid phone number"
    isValid = false
  }

  // Display error
  if (!isValid) {
    showFieldError(field, errorMessage)
  } else {
    clearFieldError(field)
  }

  return isValid
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^\+?[0-9]{7,15}$/
  return re.test(phone)
}

function showFieldError(field, message) {
  clearFieldError(field)

  field.classList.add("error")
  const errorDiv = document.createElement("div")
  errorDiv.className = "field-error"
  errorDiv.textContent = message

  field.parentNode.appendChild(errorDiv)
}

function clearFieldError(field) {
  field.classList.remove("error")
  const existingError = field.parentNode.querySelector(".field-error")
  if (existingError) {
    existingError.remove()
  }
}

async function submitContactForm(form) {
  const submitBtn = form.querySelector(".form-submit")
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending Message...'
  submitBtn.disabled = true
  submitBtn.classList.add("loading")

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success message
    showSuccessMessage()

    // Reset form
    form.reset()

    // Track form submission
    trackEvent("Contact", "Form Submit", "Contact Page")
  } catch (error) {
    showNotification("Sorry, there was an error sending your message. Please try again.", "error")
  } finally {
    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
    submitBtn.classList.remove("loading")
    createIcons()
  }
}

function showSuccessMessage() {
  const successModal = document.createElement("div")
  successModal.className = "success-modal"
  successModal.innerHTML = `
        <div class="success-modal-content">
            <div class="success-icon">
                <i data-lucide="check-circle"></i>
            </div>
            <h3>Thank You!</h3>
            <p>Your message has been received. Our team will get back to you within 24 hours.</p>
            <button class="btn btn-primary" onclick="closeSuccessModal()">Close</button>
        </div>
    `

  document.body.appendChild(successModal)
  createIcons()

  // Show modal
  setTimeout(() => successModal.classList.add("show"), 100)
}

function closeSuccessModal() {
  const modal = document.querySelector(".success-modal")
  if (modal) {
    modal.classList.remove("show")
    setTimeout(() => modal.remove(), 300)
  }
}

// Quick actions functionality
function initQuickActions() {
  const quickActionBtns = document.querySelectorAll(".quick-action-btn")

  quickActionBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()

      const action = this.textContent.trim()

      if (action.includes("Schedule")) {
        openScheduleModal()
      } else if (action.includes("Chat")) {
        openChatWidget()
      } else if (action.includes("Quote")) {
        scrollToContactForm()
      }

      trackEvent("Contact", "Quick Action", action)
    })
  })
}

function openScheduleModal() {
  showNotification("Scheduling feature coming soon! Please use the contact form for now.", "info")
}

function openChatWidget() {
  showNotification("Live chat is currently offline. Please use the contact form or call us directly.", "info")
}

function scrollToContactForm() {
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    contactForm.querySelector("input").focus()
  }
}

// Office interactions
function initOfficeInteractions() {
  const officeCards = document.querySelectorAll(".office-card")

  officeCards.forEach((card) => {
    card.addEventListener("click", function () {
      const city = this.querySelector(".office-city").textContent
      const phone = this.querySelector('.office-detail i[data-lucide="phone"]').parentNode.textContent.trim()

      if (confirm(`Would you like to call our ${city} office at ${phone}?`)) {
        window.location.href = `tel:${phone.replace(/\s/g, "")}`
      }
    })

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

// Newsletter subscription in footer
function initNewsletterSubscription() {
  const newsletterForms = document.querySelectorAll(".newsletter-form")

  newsletterForms.forEach((form) => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const submitBtn = this.querySelector("button")
      const email = emailInput.value.trim()

      if (!validateEmail(email)) {
        showNotification("Please enter a valid email address", "error")
        return
      }

      const originalText = submitBtn.textContent
      submitBtn.textContent = "Subscribing..."
      submitBtn.disabled = true

      try {
        await subscribeNewsletter(email)
        showNotification("Successfully subscribed to our newsletter!", "success")
        emailInput.value = ""
        trackEvent("Newsletter", "Subscribe", "Contact Page")
      } catch (error) {
        showNotification("Subscription failed. Please try again.", "error")
      } finally {
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    })
  })
}

function subscribeNewsletter(email) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve or reject based on simulated success or failure
      if (Math.random() > 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}

function showNotification(message, type) {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100)

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

function trackEvent(category, action, label) {
  console.log(`Event tracked: ${category} - ${action} - ${label}`)
}

function createIcons() {
  // Placeholder for icon creation logic
  console.log("Icons created")
}
