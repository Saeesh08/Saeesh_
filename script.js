// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Optional: Toggle navigation menu (if you add mobile menu)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Alert user when trying to access restricted repository
const requestAccessBtn = document.querySelector(".btn-repo-request");

if (requestAccessBtn) {
  requestAccessBtn.addEventListener("click", () => {
    alert("Please email me at your.email@example.com with your request. Access is granted on a case-by-case basis.");
  });
}
