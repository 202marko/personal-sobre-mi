/* =========================================
   1. CAMBIO DE ESTILO DEL HEADER AL HACER SCROLL
   ========================================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // Si el usuario baja más de 50px, añadimos una sombra y reducimos opacidad
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        header.style.padding = '1rem 10%'; // Se hace más delgado
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        header.style.padding = '1.5rem 10%'; // Vuelve a su tamaño original
    }
});

/* =========================================
   2. REVELADO DE SECCIONES (Intersection Observer)
   ========================================= */
// Esto hace que las secciones aparezcan con un efecto de fade-in
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.1 // Se activa cuando el 10% de la sección es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Deja de observar una vez animado
        }
    });
}, options);

sections.forEach(section => {
    // Estado inicial antes de la animación (puedes ajustar esto en el CSS también)
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    
    observer.observe(section);
});

/* =========================================
   3. MENSAJE DE CONSOLA (Detalle Profesional)
   ========================================= */
console.log("¡Hola! Estás viendo el portafolio de Marco Somarribas. Desarrollador & Consultor B2B.");