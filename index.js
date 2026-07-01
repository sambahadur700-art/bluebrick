// document.addEventListener("DOMContentLoaded", () => {
//   window.scrollTo(0, 0); // Forces layout repaint
// });

// Scroll effect for navbar - transparent at top, solid when scrolled
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle mobile menu - Fixed functionality
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  const isExpanded = navMenu.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", isExpanded);

  // Prevent body scroll when menu is open
  document.body.style.overflow = isExpanded ? "hidden" : "";
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-link:not(.has-dropdown)").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".nav-menu") &&
    !e.target.closest(".nav-toggle") &&
    navMenu.classList.contains("show")
  ) {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

// Function to close all dropdowns
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown.show").forEach((dropdown) => {
    dropdown.classList.remove("show");
    const parentLink = dropdown.previousElementSibling;
    parentLink.setAttribute("aria-expanded", "false");
    parentLink.classList.remove("active");
  });
}

// Handle dropdown menus
const dropdownLinks = document.querySelectorAll(".nav-link.has-dropdown");
const dropdownButtons = document.querySelectorAll(".dropdown-btn");

// Toggle dropdown on link click (works for both mobile + desktop)
dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const dropdown = link.nextElementSibling;
    const isShown = dropdown.classList.contains("show");

    // Close all dropdowns first
    closeAllDropdowns();

    // Then open the clicked dropdown if it wasn't already open
    if (!isShown) {
      dropdown.classList.add("show");
      link.setAttribute("aria-expanded", "true");
      link.classList.add("active");
    }
  });
});

// Toggle dropdown on button click (desktop view)
dropdownButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    const link = button.parentElement;
    const dropdown = link.nextElementSibling;
    const isShown = dropdown.classList.contains("show");

    // Close all dropdowns first
    closeAllDropdowns();

    // Then open the clicked dropdown if it wasn't already open
    if (!isShown) {
      dropdown.classList.add("show");
      link.setAttribute("aria-expanded", "true");
      link.classList.add("active");
    }
  });
});

// Close all dropdowns when clicking outside
document.addEventListener("click", () => {
  closeAllDropdowns();
});

// Prevent dropdown from closing when clicking inside
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// Close mobile menu and dropdowns when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
    closeAllDropdowns();
    document.body.style.overflow = "";
  }
});

// Hero Slider Functionality
const heroSlides = document.querySelectorAll(".hero-slide");
const heroNavItems = document.querySelectorAll(".hero-nav-item");
if (heroSlides.length > 0 && heroNavItems.length > 0) {
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    heroSlides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Remove active class from all nav items
    heroNavItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Show the selected slide
    heroSlides[index].classList.add("active");

    // Activate the corresponding nav item
    heroNavItems[index].classList.add("active");

    // Update current slide
    currentSlide = index;
  }

  // Function to go to the next slide
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= heroSlides.length) {
      next = 0;
    }
    showSlide(next);
  }

  // Set up automatic sliding
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  // Stop automatic sliding
  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Add click events to navigation items
  heroNavItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      stopSlideShow();
      showSlide(index);
      startSlideShow();
    });
  });

  // Initialize the slider
  showSlide(0);
  startSlideShow();
}

// Property Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const propertyItems = document.querySelectorAll(".property-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    button.classList.add("active");

    // Get filter value
    const filterValue = button.getAttribute("data-filter");

    // Show/hide properties based on filter
    propertyItems.forEach((item) => {
      if (filterValue === "all") {
        item.style.display = "block";
      } else {
        if (item.getAttribute("data-category") === filterValue) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

// Function to update View Details links
function updateViewDetailsLinks(category) {
  const propertyCards = document.querySelectorAll(".property-card");
  if (propertyCards.length === 0) return;
  propertyCards.forEach((card) => {
    const titleElement = card.querySelector("h3");
    if (titleElement) {
      const propertyTitle = titleElement.textContent;
      const propertyId = propertyTitle.toLowerCase().replace(/\s+/g, "-");
      const viewDetailsBtn = card.querySelector("a.btn");

      if (viewDetailsBtn) {
        viewDetailsBtn.href = `property-detail.html?id=${propertyId}&category=${category}`;
      }
    }
  });
}

// FAQ Functionality

function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const answer = element.nextElementSibling;
  const isActive = faqItem.classList.contains("active");

  // Close all other open FAQs
  document.querySelectorAll(".faq-item.active").forEach((activeItem) => {
    if (activeItem !== faqItem) {
      activeItem.classList.remove("active");
      activeItem.querySelector(".faq-answer").classList.remove("expanded");
    }
  });

  // Toggle current FAQ
  if (isActive) {
    faqItem.classList.remove("active");
    answer.classList.remove("expanded");
  } else {
    faqItem.classList.add("active");
    answer.classList.add("expanded");
  }
}

function toggleMoreFAQs() {
  const hiddenFAQs = document.getElementById("hiddenFAQs");
  const showMoreBtn = document.getElementById("showMoreBtn");

  if (hiddenFAQs.classList.contains("show")) {
    hiddenFAQs.classList.remove("show");
    showMoreBtn.textContent = "Show More";

    // Close any open hidden FAQs when hiding them
    hiddenFAQs.querySelectorAll(".faq-item.active").forEach((activeItem) => {
      activeItem.classList.remove("active");
      activeItem.querySelector(".faq-answer").classList.remove("expanded");
    });

    // Scroll back to the show more button
    showMoreBtn.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    hiddenFAQs.classList.add("show");
    showMoreBtn.textContent = "Show Less";

    // Add animation delay to newly shown FAQs
    const hiddenItems = hiddenFAQs.querySelectorAll(".faq-item");
    hiddenItems.forEach((item, index) => {
      item.style.animationDelay = `${(index + 1) * 0.1}s`;
      item.style.animation = "none";
      item.offsetHeight; // Trigger reflow
      item.style.animation = "fadeInUp 0.6s ease forwards";
    });
  }
}

// Close FAQ when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".faq-item")) {
    document.querySelectorAll(".faq-item.active").forEach((activeItem) => {
      activeItem.classList.remove("active");
      activeItem.querySelector(".faq-answer").classList.remove("expanded");
    });
  }
});

// Keyboard accessibility
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".faq-item.active").forEach((activeItem) => {
      activeItem.classList.remove("active");
      activeItem.querySelector(".faq-answer").classList.remove("expanded");
    });
  }
});

// Add keyboard support for FAQ buttons
document.querySelectorAll(".faq-question-wrapper").forEach((wrapper) => {
  wrapper.setAttribute("tabindex", "0");
  wrapper.setAttribute("role", "button");
  wrapper.setAttribute("aria-expanded", "false");

  wrapper.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFAQ(this);

      // Update aria-expanded
      const isActive = this.parentElement.classList.contains("active");
      this.setAttribute("aria-expanded", isActive);
    }
  });
});

// Update aria-expanded when FAQ is toggled via click
const originalToggleFAQ = toggleFAQ;
toggleFAQ = function (element) {
  originalToggleFAQ(element);
  const isActive = element.parentElement.classList.contains("active");
  element.setAttribute("aria-expanded", isActive);
};

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(".animate-on-scroll");
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // Add counter animation
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((number) => {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(number);
  });
  const videoContent = document.querySelector(".video-content");

  if (videoContent) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoContent.classList.add("animate-on-scroll");
            videoObserver.unobserve(videoContent);
          }
        });
      },
      { threshold: 0.3 },
    );
    videoObserver.observe(videoContent);
  }
});

function animateCounter(element) {
  const text = element.textContent;
  const hasPlus = text.includes("+");
  const hasDollar = text.includes("$");
  const hasM = text.includes("M");

  let targetNumber;
  if (hasDollar && hasM) {
    targetNumber = parseFloat(text.replace(/[$M+]/g, ""));
  } else {
    targetNumber = parseInt(text.replace(/[+]/g, ""));
  }

  let currentNumber = 0;
  const increment = targetNumber / 50;
  const timer = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(timer);
    }

    let displayText;
    if (hasDollar && hasM) {
      displayText = `$${currentNumber.toFixed(1)}M`;
    } else {
      displayText = Math.floor(currentNumber).toString();
      if (hasPlus) displayText += "+";
    }

    element.textContent = displayText;
  }, 40);
}

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = "smooth";

// Add parallax effect on scroll
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const header = document.querySelector(".section-header");
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Add this to your existing Intersection Observer setup

// dubai wheel section
//  Enhanced drag scrolling without mouse wheel
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("dubaiPropertiesScroll");
  if (scrollContainer) {
    // Drag to scroll functionality
    let startX;
    let scrollLeft;
    let isDragging = false;

    scrollContainer.addEventListener("mousedown", function (e) {
      isDragging = true;
      scrollContainer.style.cursor = "grabbing";
      scrollContainer.style.scrollBehavior = "auto";
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault();
    });

    scrollContainer.addEventListener("mouseleave", function () {
      isDragging = false;
      scrollContainer.style.cursor = "grab";
      scrollContainer.style.scrollBehavior = "smooth";
    });

    scrollContainer.addEventListener("mouseup", function () {
      isDragging = false;
      scrollContainer.style.cursor = "grab";
      scrollContainer.style.scrollBehavior = "smooth";
    });

    scrollContainer.addEventListener("mousemove", function (e) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile devices
    let touchStartX = 0;
    let touchScrollLeft = 0;

    scrollContainer.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
      touchScrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("touchmove", function (e) {
      const touchX = e.touches[0].clientX;
      const walk = (touchStartX - touchX) * 2;
      scrollContainer.scrollLeft = touchScrollLeft + walk;
    });

    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add("dubai-loaded");
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px",
      },
    );

    // Observe all images
    document.querySelectorAll("img.dubai-loading").forEach((img) => {
      imageObserver.observe(img);
    });

    // Hide scroll hint after first interaction
    let hintHidden = false;
    const scrollHint = document.querySelector(".dubai-scroll-hint");

    function hideHint() {
      if (!hintHidden) {
        scrollHint.style.opacity = "0";
        hintHidden = true;
        setTimeout(() => {
          scrollHint.style.display = "none";
        }, 500);
      }
    }

    scrollContainer.addEventListener("scroll", hideHint);
    scrollContainer.addEventListener("mousedown", hideHint);
    scrollContainer.addEventListener("touchstart", hideHint);

    // Prevent text selection while dragging
    scrollContainer.addEventListener("selectstart", function (e) {
      if (isDragging) {
        e.preventDefault();
      }
    });
  }
});

// Validation functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  // Remove all non-digit characters for validation
  const phoneDigits = phone.replace(/\D/g, "");
  // Check if phone has at least 10 digits (most international numbers)
  return phoneDigits.length >= 10;
}

function showError(input, message) {
  // Remove any existing error
  removeError(input);

  // Create error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.style.color = "#e74c3c";
  errorDiv.style.fontSize = "14px";
  errorDiv.style.marginTop = "5px";
  errorDiv.textContent = message;

  // Insert error after input
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
  input.style.borderColor = "#e74c3c";
}

function removeError(input) {
  const existingError = input.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
  input.style.borderColor = "";
}

// Show message function for modal form
function showMessage(message, type) {
  if (!formMessage) return;

  formMessage.textContent = message;
  formMessage.className = "form-message " + type;
  formMessage.style.display = "block";

  // Auto-hide after 5 seconds
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
}

//cta form phone flag javascript
// Initialize EmailJS when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("-64C6IBJMMUh26qdF");

  // Get the form element
  const ctaForm = document.getElementById("ctaForm");

  // Add real-time validation for form inputs
  const emailInput = ctaForm.querySelector('input[name="user_email"]');
  const phoneInput = ctaForm.querySelector('input[name="user_phone"]');

  // Email validation on blur
  emailInput.addEventListener("blur", function () {
    if (this.value.trim() && !validateEmail(this.value.trim())) {
      showError(this, "Please enter a valid email address");
    } else if (this.value.trim()) {
      removeError(this);
    }
  });

  // Phone validation on blur
  phoneInput.addEventListener("blur", function () {
    if (this.value.trim() && !validatePhone(this.value.trim())) {
      showError(this, "Please enter a valid phone number (at least 10 digits)");
    } else if (this.value.trim()) {
      removeError(this);
    }
  });

  // Prevent alphabets in phone field
  phoneInput.addEventListener("input", function (e) {
    // Remove all non-digit characters except +, -, (, ), and space
    this.value = this.value.replace(/[^0-9+\-\(\)\s]/g, "");
  });

  // Clear errors on input
  ctaForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim()) {
        removeError(this);
      }
    });
  });

  // Add submit event listener to the form
  if (ctaForm) {
    ctaForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form inputs
      const nameInput = this.querySelector('input[name="user_name"]');
      const emailInput = this.querySelector('input[name="user_email"]');
      const phoneInput = this.querySelector('input[name="user_phone"]');

      // Clear previous errors
      removeError(nameInput);
      removeError(emailInput);
      removeError(phoneInput);

      // Validate form
      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        showError(nameInput, "Please enter your name");
        isValid = false;
      }

      // Validate email
      if (!emailInput.value.trim()) {
        showError(emailInput, "Please enter your email");
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address");
        isValid = false;
      }

      // Validate phone
      if (!phoneInput.value.trim()) {
        showError(phoneInput, "Please enter your phone number");
        isValid = false;
      } else if (!validatePhone(phoneInput.value.trim())) {
        showError(
          phoneInput,
          "Please enter a valid phone number (at least 10 digits)",
        );
        isValid = false;
      }

      // If validation fails, stop here
      if (!isValid) {
        return;
      }

      // Get the submit button
      const submitBtn = this.querySelector(".cta-submit-btn");
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Get form data
      const formData = new FormData(this);
      const templateParams = {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        user_phone: formData.get("user_phone"),
        to_email: "info@bluebrickrealestate.com",
        date: new Date().toLocaleString(),
      };

      console.log("Sending EmailJS request with params:", templateParams);

      // Send email using EmailJS
      emailjs
        .send("service_av9hyi9", "template_xoyb2uf", templateParams)
        .then(function (response) {
          console.log("SUCCESS!", response);
          alert("Message sent successfully! We will contact you shortly.");
          ctaForm.reset();
        })
        .catch(function (error) {
          console.error("FAILED...", error);
          alert(
            "Sorry, there was an error sending your message. Please try again or contact us directly at info@bluebrickrealestate.com",
          );
        })
        .finally(function () {
          // Reset button state
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
});

// Initialize the intlTelInput
const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
  initialCountry: "in", // UAE as default
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Update the input value with the selected country code
input.addEventListener("input", function () {
  const selectedCountryData = iti.getSelectedCountryData();
  const dialCode = selectedCountryData.dialCode;
  const currentValue = input.value.replace(`+${dialCode}`, "").trim();
  input.value = `+${dialCode} ${currentValue}`;
});

// Ensure country code is included when form is submitted
document
  .querySelector(".cta-contact-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const phoneNumber = iti.getNumber();
    if (phoneNumber) {
      alert("Form submitted with phone number: " + phoneNumber);
    }
  });

// testemonial section

const carouselTrack = document.getElementById("carousel-track");
if (carouselTrack) {
  const testimonialsData = [
    {
      text: "BlueBrick Real Estate made our home search simple and stress-free. Their team provided expert advice and helped us find the perfect property for our family.",
      name: "Himanshu Kanakia",
      role: "Business Owner",
      rating: 5,
    },
    {
      text: "The team demonstrated excellent market knowledge and professionalism throughout the buying process. Everything was handled smoothly from start to finish.",
      name: "Rakesh Dube",
      role: "Property Investor",
      rating: 5,
    },
    {
      text: "Professional, responsive, and highly reliable. BlueBrick Real Estate guided us through every step and helped us secure a great investment property.",
      name: "Sneha Patel",
      role: "Interior Designer",
      rating: 5,
    },
    {
      text: "Their property insights and attention to detail made the entire experience seamless. I highly recommend their services to anyone looking for quality real estate support.",
      name: "Aditya Sharma",
      role: "Project Manager",
      rating: 5,
    },
    {
      text: "A trustworthy team with strong knowledge of the property market. Our investment was handled professionally and the entire process was very smooth.",
      name: "Meera Joshi",
      role: "Operations Head",
      rating: 5,
    },
    {
      text: "Excellent service and clear communication throughout the deal. They understood exactly what we needed and found us the right property quickly.",
      name: "Karan Mehta",
      role: "Business Owner",
      rating: 5,
    },
  ];

  function createStars(count) {
    let starsHTML = "";
    for (let i = 0; i < count; i++) {
      starsHTML += `<span class="star">&#9733;</span>`;
    }
    return starsHTML;
  }

  function createTestimonialCard({ text, name, role, rating }) {
    return `
            <article class="testimonial-card" role="group" aria-label="Testimonial from ${name}, ${role}">
                <div class="quote-icon">&#10077;</div>
                <p class="testimonial-text">${text}</p>
                <div class="client-info">
                    <div class="client-details">
                        <p class="client-name">${name}</p>
                        <p class="client-role">${role}</p>
                    </div>
                    <div class="star-rating" aria-label="${rating} star rating">
                        ${createStars(rating)}
                    </div>
                </div>
            </article>
        `;
  }

  // Populate carousel with testimonials twice for infinite scroll effect
  const testimonialsHTML = testimonialsData.map(createTestimonialCard).join("");
  carouselTrack.innerHTML = testimonialsHTML + testimonialsHTML;

  // Infinite scroll animation
  let scrollSpeed = 1;
  let animationId;

  function animateCarousel() {
    carouselTrack.style.transform = `translateX(${scrollSpeed}px)`;
    scrollSpeed -= 0.5;

    // Reset position when scrolled halfway
    if (Math.abs(scrollSpeed) > carouselTrack.scrollWidth / 2) {
      scrollSpeed = 0;
    }

    animationId = requestAnimationFrame(animateCarousel);
  }

  // Start animation
  animateCarousel();

  // Pause animation on hover
  carouselTrack.addEventListener("mouseenter", () => {
    cancelAnimationFrame(animationId);
  });

  // Resume animation when mouse leaves
  carouselTrack.addEventListener("mouseleave", () => {
    animateCarousel();
  });
}

//video section

document.addEventListener("DOMContentLoaded", function () {
  const videoSection = document.querySelector(".video-section");
  const button = document.getElementById("youtubeBtn");
  const container = document.querySelector(".yt-button-container");

  if (videoSection && button && container) {
    let isMouseTracking = false;
    const trackingRadius = 100; // Increased radius from 100 to 250 pixels for mouse tracking

    container.addEventListener("mouseenter", function () {
      isMouseTracking = true;
    });

    container.addEventListener("mouseleave", function () {
      isMouseTracking = false;
      // Reset button position smoothly
      button.style.transform = "translate(0px, 0px) scale(1)";
      button.style.transition = "all 0.3s ease";
    });

    // Track mouse movement on the entire video section for better tracking area
    document
      .querySelector(".video-section")
      .addEventListener("mousemove", function (e) {
        if (!isMouseTracking) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate distance from center
        const deltaX = mouseX - containerCenterX;
        const deltaY = mouseY - containerCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance <= trackingRadius) {
          isMouseTracking = true;
          // Calculate movement factor (0 to 1)
          const moveFactor = Math.min(distance / trackingRadius, 1);

          // Calculate new position (max movement of 30px for more noticeable effect)
          const maxMove = 30;
          const moveX = (deltaX / distance) * moveFactor * maxMove;
          const moveY = (deltaY / distance) * moveFactor * maxMove;

          // Apply smooth transition
          button.style.transition = "all 0.1s ease-out";
          button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.3)`;
        } else {
          isMouseTracking = false;
          // Reset button position smoothly when outside radius
          button.style.transform = "translate(0px, 0px) scale(1.3)";
          button.style.transition = "all 0.3s ease";
        }
      });

    // Enhanced hover effect
    button.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });

    // Handle touch devices
    if ("ontouchstart" in window) {
      button.addEventListener("touchstart", function (e) {
        e.preventDefault();
        this.style.transform = "scale(0.95)";
      });

      button.addEventListener("touchend", function (e) {
        e.preventDefault();
        this.style.transform = "scale(1)";
        // Open YouTube link
        window.open(this.href, "_blank");
      });
    }

    // Smooth scroll prevention for better performance
    let ticking = false;

    function updateButtonPosition(e) {
      if (!ticking) {
        requestAnimationFrame(function () {
          // This ensures smooth animation
          ticking = false;
        });
        ticking = true;
      }
    }

    document
      .querySelector(".video-section")
      .addEventListener("mousemove", updateButtonPosition);

    // Add keyboard accessibility
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.open(this.href, "_blank");
      }
    });
  }

  const videoContent = document.querySelector(".video-content");

  if (videoSection && videoContent) {
    // Create Intersection Observer for video section
    const videoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation to each child element with delays
            const children = videoContent.children;

            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.style.animation = "slideInLeft 0.8s ease forwards";
                child.style.opacity = "1";
                child.style.transform = "translateX(0)";
              }, index * 200);
            });

            // Stop observing after animation triggers
            videoObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    // Start observing the video section
    videoObserver.observe(videoSection);
  }
});

// modal section js
// Initialize EmailJS
emailjs.init("-64C6IBJMMUh26qdF"); // Your public key

// DOM elements
const contactModal = document.getElementById("contactModal");
const closeModalBtn = document.getElementById("closeModal");
const modalForm = document.getElementById("modalContactForm");
const modalSubmitBtn = document.getElementById("modalSubmitBtn");
const formMessage = document.getElementById("modalFormMessage");
const demoTriggerBtn = document.getElementById("demoTriggerBtn");

// Initialize intlTelInput
const phoneInput = document.getElementById("modal-phone");
const modaliti = window.intlTelInput(phoneInput, {
  initialCountry: "in", // Indai as default
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Update the input value with the selected country code
phoneInput.addEventListener("input", function () {
  const selectedCountryData = modaliti.getSelectedCountryData();
  const dialCode = selectedCountryData.dialCode;
  const currentValue = phoneInput.value.replace(`+${dialCode}`, "").trim();
  phoneInput.value = `+${dialCode} ${currentValue}`;
});

// Open modal function
function openModal() {
  contactModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close modal function
function closeModal() {
  contactModal.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scrolling
  // Reset form and message
  modalForm.reset();
  formMessage.className = "form-message";
  formMessage.textContent = "";
  formMessage.style.display = "none";
}

// Event listeners
demoTriggerBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking outside content
contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && contactModal.classList.contains("active")) {
    closeModal();
  }
});

// Add real-time validation for modal form inputs
function initializeModalFormValidation() {
  if (modalForm) {
    const modalEmailInput = modalForm.querySelector('input[name="user_email"]');
    const modalPhoneInput = modalForm.querySelector('input[name="user_phone"]');

    // Email validation on blur
    modalEmailInput.addEventListener("blur", function () {
      if (this.value.trim() && !validateEmail(this.value.trim())) {
        showError(this, "Please enter a valid email address");
      } else if (this.value.trim()) {
        removeError(this);
      }
    });

    // Phone validation on blur
    modalPhoneInput.addEventListener("blur", function () {
      if (this.value.trim() && !validatePhone(this.value.trim())) {
        showError(
          this,
          "Please enter a valid phone number (at least 10 digits)",
        );
      } else if (this.value.trim()) {
        removeError(this);
      }
    });

    // Prevent alphabets in modal phone field
    modalPhoneInput.addEventListener("input", function (e) {
      // Remove all non-digit characters except +, -, (, ), and space
      this.value = this.value.replace(/[^0-9+\-\(\)\s]/g, "");
    });

    // Clear errors on input
    modalForm.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("input", function () {
        if (this.value.trim()) {
          removeError(this);
        }
      });
    });
  }
}

// Initialize modal form validation when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initializeModalFormValidation();
    initializeModalFormSubmission();
  });
} else {
  initializeModalFormValidation();
  initializeModalFormSubmission();
}

// Initialize modal form submission
function initializeModalFormSubmission() {
  if (modalForm) {
    // Remove existing event listener to prevent duplicates
    modalForm.removeEventListener("submit", handleModalFormSubmit);
    modalForm.addEventListener("submit", handleModalFormSubmit);
  }
}

// Handle modal form submission
function handleModalFormSubmit(e) {
  e.preventDefault();

  // Get form inputs
  const nameInput = this.querySelector('input[name="user_name"]');
  const emailInput = this.querySelector('input[name="user_email"]');
  const phoneInput = this.querySelector('input[name="user_phone"]');
  const messageInput = this.querySelector('textarea[name="message"]');

  // Clear previous errors
  removeError(nameInput);
  removeError(emailInput);
  removeError(phoneInput);
  if (messageInput) {
    removeError(messageInput);
  }

  // Validate form
  let isValid = true;

  // Validate name
  if (!nameInput.value.trim()) {
    showError(nameInput, "Please enter your name");
    isValid = false;
  }

  // Validate email
  if (!emailInput.value.trim()) {
    showError(emailInput, "Please enter your email");
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email address");
    isValid = false;
  }

  // Validate phone
  if (!phoneInput.value.trim()) {
    showError(phoneInput, "Please enter your phone number");
    isValid = false;
  } else if (!validatePhone(phoneInput.value.trim())) {
    showError(
      phoneInput,
      "Please enter a valid phone number (at least 10 digits)",
    );
    isValid = false;
  }

  // If validation fails, stop here
  if (!isValid) {
    return;
  }

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("user_name");
  const email = formData.get("user_email");
  const phone = formData.get("user_phone");
  const message = messageInput ? formData.get("message") : "";

  // Show loading state
  const originalText = modalSubmitBtn.textContent;
  modalSubmitBtn.textContent = "Sending...";
  modalSubmitBtn.disabled = true;
  formMessage.style.display = "none";

  // Prepare template parameters
  const templateParams = {
    user_name: name,
    user_email: email,
    user_phone: phone,
    message: message || "No message provided",
    date: new Date().toLocaleString(),
    to_email: "info@bluebrickrealestate.com",
  };

  // Send email using EmailJS
  emailjs
    .send("service_av9hyi9", "template_xoyb2uf", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response);
      showMessage(
        `Message sent successfully on ${templateParams.date}. We will contact you shortly.`,
        "success",
      );
      modalForm.reset();
    })
    .catch(function (error) {
      console.error("FAILED...", error);
      showMessage(
        "Sorry, there was an error sending your message. Please try again or contact us directly.",
        "error",
      );
    })
    .finally(function () {
      // Reset button state
      modalSubmitBtn.textContent = originalText;
      modalSubmitBtn.disabled = false;
    });
}

// deto section button
const detoContactBtn = document.getElementById("detoContactBtn");
if (detoContactBtn) {
  detoContactBtn.addEventListener("click", openModal);
}
