// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Navigation Active Link on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // Contact Form Validation
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email.includes("@") || !message) {
            msg.textContent = "Please fill all fields with valid info.";
            msg.style.color = "red";
            return;
        }

        // Simulate integration (e.g., sending to email API)
        msg.textContent = "Thank you! Your message has been sent.";
        msg.style.color = "green";
        form.reset();
    });

    // Scroll Animation (Optional Enhancement)
    const fadeInElements = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(el => observer.observe(el));
});