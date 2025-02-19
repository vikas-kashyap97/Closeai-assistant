// Get theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Function to apply theme
function applyTheme(theme) {
    document.body.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
}

// Load theme from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Default is light
    applyTheme(savedTheme);
});

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
});
