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

    // Contact Form Email Functionality (using EmailJS)
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!email.includes("@") || !name || !message) {
            msg.textContent = "Please fill out all fields correctly.";
            msg.style.color = "red";
            return;
        }

        // Use EmailJS to send email (requires setup on emailjs.com)
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_name: name,
                from_email: email,
                message: message,
                to_email: "salikhafeez44@gmail.com"
            }, "JRdD9dT9EoXj64VXf")
            .then(() => {
                msg.textContent = "Your message has been sent successfully!";
                msg.style.color = "green";
                form.reset();
            }, (error) => {
                msg.textContent = "Failed to send message. Please try again later.";
                msg.style.color = "red";
            });
    });

    // Scroll Animation (Fade-in)
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