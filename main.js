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

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

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

// Intersection Observer for fade-in animations
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

// Apply fade-in to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

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

// Console message for recruiters
console.log('%c👋 Hello Recruiter!', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out Hugo\'s portfolio!', 'color: #666; font-size: 14px;');
console.log('%cFeel free to reach out at hugocisnerosamengual@gmail.com', 'color: #666; font-size: 14px;');

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
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
