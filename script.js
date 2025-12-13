document.documentElement.classList.add("no-transition");

document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("theme");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
    }

    setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
    }, 5);
});

function darkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

    }
    else {
        localStorage.setItem("theme", "light");
    }
}
