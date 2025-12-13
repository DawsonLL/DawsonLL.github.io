// Remove transition on initial page load to prevent page flickering
document.documentElement.classList.add("no-transition");

// On page load, checks for saved theme preferences and applies it
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("theme");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
    }

    setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
    }, 5);
});

// Toggles dark mode and saves preference to localStorage
function darkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

    }
    else {
        localStorage.setItem("theme", "light");
    }
}
