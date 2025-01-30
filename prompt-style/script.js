function toggleTheme() {
    let html = document.documentElement;
    let currentTheme = html.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

// Set tema berdasarkan preferensi pengguna yang tersimpan
document.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
});