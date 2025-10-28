// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Modal functions
function openModal(plan) {
    const modal = document.getElementById('planModal');
    const modalBody = document.getElementById('modalBody');
    
    const planDetails = {
        basico: {
            title: 'Landing Básica',
            price: 'USD $180',
            description: 'Perfecta para comenzar tu presencia digital rápidamente',
            features: [
                '1 página responsive completa',
                'Sección de inicio y contacto integrados',
                'Mapa de ubicación de Google Maps',
                'Botón directo a WhatsApp Business',
                '2 revisiones incluidas',
                'Dominio .com por 1 año',
                'Hosting por 1 año incluido',
                'Certificado SSL (HTTPS)',
                'Optimización básica de imágenes',
                'Entrega garantizada: 3-7 días'
            ],
            ideal: 'Ideal para freelancers, emprendedores o pequeños negocios que necesitan estar en línea rápidamente con una presencia profesional y funcional.',
            delivery: '3-7 días',
            revisions: '2 revisiones'
        },
        profesional: {
            title: 'Web Pyme',
            price: 'USD $400',
            description: 'La solución completa para pequeñas y medianas empresas',
            features: [
                '3-5 páginas profesionales',
                'Inicio, Servicios, Sobre Nosotros, Contacto',
                'SEO básico optimizado (meta tags, sitemap)',
                'Formulario de contacto funcional',
                'Integración con Google Analytics',
                '3 revisiones incluidas',
                'Dominio .com por 1 año',
                'Hosting por 1 año incluido',
                'Certificado SSL (HTTPS)',
                'Integración con redes sociales',
                'Optimización de velocidad de carga',
                'Entrega garantizada: 4-7 días'
            ],
            ideal: 'Perfecto para pequeñas empresas, consultorios, tiendas locales o profesionales independientes que necesitan una web completa con múltiples secciones y mejor posicionamiento en Google.',
            delivery: '4-7 días',
            revisions: '3 revisiones'
        },
        mensual: {
            title: 'Plan Mensual / Mantenimiento',
            price: 'USD $50-120/mes',
            description: 'Mantén tu web actualizada y funcionando perfectamente',
            features: [
                'Hosting administrado y optimizado',
                '2 cambios pequeños al mes (textos, imágenes, ajustes)',
                '1 landing page nueva por trimestre',
                'Backups automáticos mensuales',
                'Actualizaciones de seguridad',
                'Monitoreo de tiempo de actividad 24/7',
                'Soporte prioritario vía WhatsApp',
                'Renovación automática de dominio',
                'Certificado SSL renovado',
                'Reporte mensual de rendimiento',
                'Sin contratos a largo plazo',
                'Cancela cuando quieras'
            ],
            ideal: 'La mejor opción para negocios establecidos que quieren mantener su web actualizada, segura y funcionando al 100% sin preocupaciones técnicas. Perfecto para quienes valoran el soporte continuo.',
            delivery: 'Servicio continuo',
            revisions: 'Ilimitadas dentro del plan'
        }
    };

    const details = planDetails[plan];
    
    // Crear lista de características
    let featuresHTML = '';
    details.features.forEach(feature => {
        featuresHTML += '<li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">✓ ' + feature + '</li>';
    });
    
    modalBody.innerHTML = '<h2 style="color: #1a3c68; margin-bottom: 0.5rem; font-size: 2rem;">' + details.title + '</h2>' +
        '<div style="color: #2563eb; font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">' + details.price + '</div>' +
        '<p style="color: #6b7280; margin-bottom: 2rem; font-size: 1.1rem;">' + details.description + '</p>' +
        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; padding: 1rem; background: #f0f9ff; border-radius: 8px;">' +
        '<div><strong style="color: #1a3c68;">⏱️ Entrega:</strong><br><span style="color: #6b7280;">' + details.delivery + '</span></div>' +
        '<div><strong style="color: #1a3c68;">✏️ Revisiones:</strong><br><span style="color: #6b7280;">' + details.revisions + '</span></div>' +
        '</div>' +
        '<h3 style="margin-bottom: 1rem; color: #1a3c68; font-size: 1.3rem;">✨ Características incluidas:</h3>' +
        '<ul style="list-style: none; padding: 0; margin-bottom: 2rem;">' + featuresHTML + '</ul>' +
        '<div style="background: #f9fafb; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #2563eb;">' +
        '<strong style="color: #1a3c68; font-size: 1.1rem;">💡 ¿Para quién es ideal?</strong>' +
        '<p style="margin-top: 0.5rem; color: #6b7280; line-height: 1.6;">' + details.ideal + '</p>' +
        '</div>' +
        '<a href="https://wa.me/573013203396?text=Hola!%20Estoy%20interesado%20en%20el%20' + encodeURIComponent(details.title) + '%20(' + encodeURIComponent(details.price) + ')" ' +
        'class="cta-button" target="_blank" ' +
        'style="display: block; text-align: center; padding: 1rem 2rem; background: #1a3c68; color: white; text-decoration: none; border-radius: 50px; font-weight: 600; transition: all 0.3s ease;">' +
        '💬 Solicitar este plan por WhatsApp</a>';
    
    modal.style.display = 'block';
    // Scroll al inicio del modal
    setTimeout(() => {
        modal.scrollTop = 0;
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('planModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('planModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert('¡Gracias por tu mensaje, ' + nombre + '! Te contactaremos pronto.');
    event.target.reset();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a elementos
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.plan-card, .proceso-step, .portfolio-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.padding = '0.5rem 0';
    } else {
        header.style.padding = '1rem 0';
    }

    lastScroll = currentScroll;
});