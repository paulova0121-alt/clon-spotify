
function toggleMenu() {
    nav.classList.toggle("visible");
    hamburgerBtn.classList.toggle("active");
    
    if (nav.classList.contains("visible")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

// Evento del botón hamburguesa
hamburgerBtn.addEventListener("click", toggleMenu);

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll(".nav_link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("visible")) {
            toggleMenu();
        }
    });
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("visible")) {
        toggleMenu();
    }
});