// Remove transition on initial page load to prevent page flickering
document.documentElement.classList.add("no-transition");

// On page load, checks for saved theme preferences and applies it
document.addEventListener("DOMContentLoaded", () => {
    /* 
                Theme Initialization
                                                */
    const savedMode = localStorage.getItem("theme");

    if (savedMode === "light") {
        document.body.classList.remove("dark-mode");
    }
    else {
        document.body.classList.add("dark-mode");
    }

    setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
    }, 5);

    const form = document.getElementById("contact-form");
    const form_status = document.getElementById("form_status");

    /* 
            Contact Form Handling
                                        */
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // Prevent page redirect

            const data = new FormData(form);
            
            try {
                const response = await fetch("https://formspree.io/f/xlgdbrbk", {
                    method: "POST",
                    body: data,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    form_status.textContent = "Message sent!";
                    form.reset();
                } else {
                    form_status.textContent = "Oops! There was a problem sending the message.";
                }
            } catch (error) {
                form_status.textContent = "Network error.";
            }
        });
    }

    /* 
            Time Initialization
                                            */
    updateTime();
    setInterval(updateTime, 1000);
});

// Toggles dark mode and saves preference to localStorage
darkMode = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

    }
    else {
        localStorage.setItem("theme", "light");
    }
}

updateTime = () => {
    const now = new Date();
    const timeElement = document.getElementById("current-time");

    timeElement.innerHTML = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles"
    });
}
