// Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
  
  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Interactive Color Dots (Changes guitar background glow)
  const colorDots = document.querySelectorAll(".color-dot");
  const guitarGlow = document.querySelector(".guitar-glow");
  
  const glowColors = {
    "dark-brown": "rgba(43, 27, 23, 0.6)",
    "orange-copper": "rgba(211, 84, 0, 0.5)",
    "light-orange": "rgba(230, 126, 34, 0.5)",
    "peach": "rgba(243, 156, 18, 0.5)",
    "white": "rgba(255, 255, 255, 0.3)"
  };

  colorDots.forEach(dot => {
    dot.addEventListener("click", () => {
      // Remove active from all dots
      colorDots.forEach(d => d.classList.remove("active"));
      // Add active to current dot
      dot.classList.add("active");
      
      // Update guitar glow color dynamically
      const colorKey = dot.getAttribute("data-color");
      if (guitarGlow && glowColors[colorKey]) {
        guitarGlow.style.background = `radial-gradient(ellipse, ${glowColors[colorKey]} 0%, transparent 70%)`;
      }
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");
  
  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Simulate form submission animation
      contactForm.style.opacity = "0.5";
      contactForm.style.pointerEvents = "none";
      
      setTimeout(() => {
        contactForm.style.display = "none";
        formSuccess.style.display = "flex";
        formSuccess.style.opacity = "1";
        
        // Reset form
        contactForm.reset();
      }, 1000);
    });
  }

  // Tab Navigation Switching
  const navButtons = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  
  // Mobile Menu elements
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("open");
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("open");
      }
    });
  }
  
  window.switchTab = function(tabId) {
    // Close mobile menu on tab switch
    if (menuToggle && navMenu) {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("open");
    }

    // 1. Update Navigation Button Active State
    navButtons.forEach(btn => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // 2. Switch Active Tab Content
    tabContents.forEach(content => {
      const currentTabId = content.getAttribute("id").replace("tab-", "");
      if (currentTabId === tabId) {
        content.style.display = "block";
        // Force a reflow to trigger CSS transitions
        content.offsetHeight;
        content.classList.add("active");
      } else {
        content.classList.remove("active");
        content.style.display = "none";
      }
    });

    // 3. Smooth scroll to the main content container
    const contentWrapper = document.querySelector(".content-wrapper");
    if (contentWrapper) {
      contentWrapper.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
});
