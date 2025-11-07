// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to system preference
const getThemePreference = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
};

// Initialize theme on page load
applyTheme(getThemePreference());

// Toggle theme on button click
darkModeToggle?.addEventListener('click', () => {
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Polyfill para Safari scroll behavior
    if (!('scrollBehavior' in document.documentElement.style)) {
        console.log('Adding smooth scroll polyfill for Safari');
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
        document.head.appendChild(script);
    }
    
    // Initialize smooth scrolling con delay para asegurar que todo esté cargado
    setTimeout(() => {
        initializeSmoothScrolling();
        initializeSectionTransitions();
        console.log('Smooth scrolling and section transitions initialized');
    }, 100);
    
    // Fallback específico para Safari en iOS
    const isSafariMobile = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    console.log('User Agent:', navigator.userAgent);
    console.log('isSafariMobile:', isSafariMobile);
    
    if (isSafariMobile) {
        console.log('Safari mobile detected, using enhanced fallback...');
        
        // Verificar que el botón de contacto existe
        const contactButton = document.querySelector('a[href="#contact"]');
        console.log('Contact button found:', contactButton);
        if (contactButton) {
            console.log('Contact button text:', contactButton.textContent);
        }
        
        // Añadir event listener adicional específico para Safari móvil
        setTimeout(() => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                let touchStartTime = 0;
                let touchStartY = 0;
                let touchStartX = 0;
                
                // Capturar datos del toque inicial
                anchor.addEventListener('touchstart', function(e) {
                    touchStartTime = Date.now();
                    if (e.touches && e.touches[0]) {
                        touchStartY = e.touches[0].clientY;
                        touchStartX = e.touches[0].clientX;
                    }
                    this.style.webkitTapHighlightColor = 'transparent';
                }, { passive: true });
                
                anchor.addEventListener('touchend', function(e) {
                    const touchDuration = Date.now() - touchStartTime;
                    let touchMoveY = 0;
                    let touchMoveX = 0;
                    
                    if (e.changedTouches && e.changedTouches[0]) {
                        touchMoveY = Math.abs(e.changedTouches[0].clientY - touchStartY);
                        touchMoveX = Math.abs(e.changedTouches[0].clientX - touchStartX);
                    }
                    
                    console.log('Safari mobile touchend triggered', {
                        duration: touchDuration,
                        moveY: touchMoveY,
                        moveX: touchMoveX
                    });
                    
                    // Solo procesar toques rápidos sin mucho movimiento (no scroll)
                    if (touchDuration < 500 && touchMoveY < 15 && touchMoveX < 15) {
                        const targetId = this.getAttribute('href');
                        const target = document.querySelector(targetId);
                        
                        if (target && targetId !== '#') {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            console.log('Safari mobile - navegando suavemente a:', targetId);
                            
                            const header = document.querySelector('header');
                            const headerHeight = header ? header.offsetHeight : 80;
                            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                            const targetPosition = Math.max(0, targetTop);
                            
                            // Animación manual suave para Safari móvil
                            const startPosition = window.pageYOffset;
                            const distance = targetPosition - startPosition;
                            const duration = 800;
                            let start = null;
                            
                            function smoothScroll(currentTime) {
                                if (start === null) start = currentTime;
                                const timeElapsed = currentTime - start;
                                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                                window.scrollTo(0, run);
                                if (timeElapsed < duration) {
                                    requestAnimationFrame(smoothScroll);
                                }
                            }
                            
                            function easeInOutQuad(t, b, c, d) {
                                t /= d / 2;
                                if (t < 1) return c / 2 * t * t + b;
                                t--;
                                return -c / 2 * (t * (t - 2) - 1) + b;
                            }
                            
                            requestAnimationFrame(smoothScroll);
                            
                            // Fallback adicional si la animación falla
                            setTimeout(() => {
                                if (Math.abs(window.pageYOffset - targetPosition) > 50) {
                                    console.log('Animation failed, using direct scroll');
                                    window.scrollTo(0, targetPosition);
                                }
                            }, 1000);
                        }
                    }
                }, { passive: false });
                
                // Método alternativo: click event
                anchor.addEventListener('click', function(e) {
                    console.log('Click event triggered on Safari mobile');
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId.startsWith('#')) {
                        e.preventDefault();
                        console.log('Processing click for:', targetId);
                        
                        const target = document.querySelector(targetId);
                        if (target) {
                            const header = document.querySelector('header');
                            const headerHeight = header ? header.offsetHeight : 80;
                            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                            window.scrollTo(0, Math.max(0, targetTop));
                        }
                    }
                }, { passive: false });
                
                // Prevenir menú contextual en toques largos
                anchor.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                });
            });
        }, 200);
    }
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        
        // Ensure icons are perfectly centered after creation
        setTimeout(() => {
            const iconContainers = document.querySelectorAll('.w-12, .w-10, .w-8, .w-6');
            iconContainers.forEach(container => {
                if (container.classList.contains('h-12') || 
                    container.classList.contains('h-10') || 
                    container.classList.contains('h-8') || 
                    container.classList.contains('h-6')) {
                    
                    const icon = container.querySelector('svg');
                    if (icon) {
                        container.style.display = 'flex';
                        container.style.alignItems = 'center';
                        container.style.justifyContent = 'center';
                        container.style.position = 'relative';
                        
                        icon.style.position = 'absolute';
                        icon.style.top = '50%';
                        icon.style.left = '50%';
                        icon.style.transform = 'translate(-50%, -50%)';
                    }
                }
            });
        }, 100);
    }
    
    // Apply fade-in to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Initialize contact form
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Map subject values to readable text
            const subjectMap = {
                'general': 'General Inquiry',
                'job': 'Job Opportunity',
                'collaboration': 'Collaboration Proposal',
                'other': 'Other'
            };
            
            const subjectText = subjectMap[subject] || 'Contact Form';
            
            // Create mailto URL
            const emailSubject = encodeURIComponent(`${subjectText} from ${name} - Portfolio`);
            const body = encodeURIComponent(`Hi Hugo,

${message}

Best regards,
${name}
Email: ${email}
Subject: ${subjectText}
            
---
Sent via your portfolio contact form`);
            
            const mailtoURL = `mailto:hugocisnerosamengual@gmail.com?subject=${emailSubject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoURL;
            
            // Show success message
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            button.innerHTML = '<i data-lucide="check" class="w-5 h-5 inline mr-2"></i>Email Client Opened!';
            button.disabled = true;
            button.classList.remove('from-primary-600', 'to-blue-600', 'hover:from-primary-700', 'hover:to-blue-700');
            button.classList.add('bg-green-600');
            
            // Re-initialize Lucide icons for the new check icon
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.classList.remove('bg-green-600');
                button.classList.add('from-primary-600', 'to-blue-600', 'hover:from-primary-700', 'hover:to-blue-700');
                contactForm.reset();
                // Re-initialize Lucide icons for the send icon
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 3000);
        });
    }
});

// Smooth Scrolling for anchor links - Versión simplificada y robusta
function initializeSmoothScrolling() {
    // Añadir listeners para todos los enlaces de anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Remover listener existente si existe
        anchor.removeEventListener('click', handleAnchorClick);
        // Añadir nuevo listener
        anchor.addEventListener('click', handleAnchorClick);
    });
}

function handleAnchorClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const targetId = this.getAttribute('href');
    console.log('Clicked link to:', targetId);
    
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    
    if (target) {
        console.log('Target found:', target);
        
        // Detectar Safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const isMobile = window.innerWidth < 768;
        
        // Calcular offset del header sticky
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const additionalOffset = isMobile ? 20 : 10;
        const totalOffset = headerHeight + additionalOffset;
        
        // Obtener posición del target
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - totalOffset;
        
        if (isSafari || isMobile) {
            // Para Safari y móviles: método más directo
            console.log('Using direct scroll for Safari/mobile');
            
            // Scroll inmediato sin smooth para Safari
            window.scrollTo(0, Math.max(0, targetPosition));
            
            // Safari a veces necesita un pequeño delay
            setTimeout(() => {
                window.scrollTo(0, Math.max(0, targetPosition));
            }, 10);
        } else {
            // Para otros navegadores: smooth scroll
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        }
        
        console.log('Scrolled to target with offset:', totalOffset);
    } else {
        console.error('Target not found for:', targetId);
    }
}

// Form handling
const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // If not deployed on Netlify, prevent default and show alert
        if (!contactForm.hasAttribute('data-netlify')) {
            e.preventDefault();
            alert('Form submitted! (Note: This is a demo. Deploy to Netlify to enable form submissions.)');
            contactForm.reset();
        }
        // If on Netlify, the form will submit normally
    });
}

// Intersection Observer for fade-in animations - Mejorado para smooth scrolling
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Función auxiliar para hacer visible una sección específica
function makeVisibleSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
}

// Apply fade-in to sections - moved to main DOMContentLoaded

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const highlightNavigation = () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary-600', 'dark:text-primary-400');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-primary-600', 'dark:text-primary-400');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Add animation to skill badges on hover
document.querySelectorAll('#skills span').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Accessibility: Focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus visible styles
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid #0ea5e9;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Console message for developers and recruiters
console.log('%cHello there, developer!', 'color: #0ea5e9; font-size: 18px; font-weight: bold;');
console.log('%cI see you are exploring the code behind my portfolio. I appreciate your curiosity!', 'color: #666; font-size: 14px;');
console.log('%cIf you like what you see, let\'s connect: hugocisnerosamengual@gmail.com', 'color: #666; font-size: 14px;');
console.log('%cPS: This portfolio is built with modern web technologies and clean code practices.', 'color: #888; font-size: 12px; font-style: italic;');

// Enhanced Section Transitions
function initializeSectionTransitions() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize section animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });
    
    // Set hero section visible immediately
    const heroSection = document.getElementById('hero') || document.querySelector('section');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
}

// Contact Form Handler - moved to main DOMContentLoaded

// Re-initialize smooth scrolling after window load (por si falla en DOMContentLoaded)
window.addEventListener('load', function() {
    console.log('Window fully loaded, re-initializing smooth scrolling...');
    setTimeout(() => {
        initializeSmoothScrolling();
        console.log('Smooth scrolling re-initialized after window load');
        
        // MÉTODO DE FUERZA BRUTA PARA SAFARI MÓVIL
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
            console.log('SAFARI MOBILE: Setting up direct contact navigation...');
            
            // Encontrar TODOS los enlaces al contacto
            const allContactLinks = document.querySelectorAll('a[href="#contact"], a[href*="contact"]');
            console.log('Contact links found:', allContactLinks.length);
            
            allContactLinks.forEach((link, index) => {
                console.log(`Setting up link ${index}:`, link);
                
                // Función de navegación directa
                const directNavigate = function(e) {
                    console.log('DIRECT NAVIGATE TRIGGERED');
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        console.log('Contact section found, scrolling...');
                        
                        // Múltiples intentos de scroll
                        const headerHeight = 80;
                        const targetY = contactSection.offsetTop - headerHeight;
                        
                        // Intento 1: scrollIntoView
                        contactSection.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                        
                        // Intento 2: scrollTo smooth
                        setTimeout(() => {
                            window.scrollTo({ 
                                top: targetY, 
                                behavior: 'smooth' 
                            });
                        }, 100);
                        
                        // Intento 3: scrollTo directo
                        setTimeout(() => {
                            window.scrollTo(0, targetY);
                            console.log('Direct scroll to:', targetY);
                        }, 300);
                    } else {
                        console.error('Contact section not found!');
                    }
                };
                
                // Remover todos los listeners anteriores y añadir el nuevo
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                // Múltiples eventos para asegurar que funcione
                newLink.addEventListener('click', directNavigate);
                newLink.addEventListener('touchend', directNavigate);
                newLink.addEventListener('touchstart', function() {
                    console.log('Contact link touched');
                });
            });
        }
    }, 200);
});
