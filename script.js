// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSpotlight();
    initScrollAnimations();
    initEmailCopy();
    initSmoothScrolling();
    initActiveNavigation();
});

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger to X
            const hamburger = mobileMenuBtn.querySelector('.hamburger');
            hamburger.style.transform = mobileNav.classList.contains('active') 
                ? 'rotate(45deg)' 
                : 'rotate(0deg)';
        });
        
        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const hamburger = mobileMenuBtn.querySelector('.hamburger');
                hamburger.style.transform = 'rotate(0deg)';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove('active');
                const hamburger = mobileMenuBtn.querySelector('.hamburger');
                hamburger.style.transform = 'rotate(0deg)';
            }
        });
    }
}

// Spotlight effect that follows mouse
function initSpotlight() {
    const spotlight = document.getElementById('spotlight');
    
    if (spotlight) {
        let mouseX = 0;
        let mouseY = 0;
        let isMoving = false;
        
        function updateSpotlight() {
            const x = (mouseX - window.innerWidth / 2) * 0.1;
            const y = (mouseY - window.innerHeight / 2) * 0.1;
            spotlight.style.transform = `translate(${x}px, ${y}px)`;
        }
        
        function throttledMouseMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (!isMoving) {
                isMoving = true;
                requestAnimationFrame(() => {
                    updateSpotlight();
                    isMoving = false;
                });
            }
        }
        
        document.addEventListener('mousemove', throttledMouseMove, { passive: true });
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections and elements
    const elementsToObserve = document.querySelectorAll('section, .about-highlights, .contact-item, .stat-item');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Email copy functionality
function initEmailCopy() {
    const emailLink = document.getElementById('emailLink');
    const copyFeedback = document.getElementById('copyFeedback');
    const email = 'sathwiksathwikbn138@gmail.com';
    
    if (emailLink && copyFeedback) {
        emailLink.addEventListener('click', function(e) {
            // On mobile, let the mailto: link work normally
            if (window.innerWidth <= 640) {
                return; // Let the default mailto: behavior happen
            }
            
            // On desktop, copy to clipboard
            e.preventDefault();
            
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(function() {
                    showCopyFeedback();
                }).catch(function(err) {
                    console.error('Failed to copy:', err);
                    // Fallback to opening email client
                    window.location.href = `mailto:${email}`;
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    showCopyFeedback();
                } catch (err) {
                    console.error('Fallback copy failed:', err);
                    window.location.href = `mailto:${email}`;
                }
                
                document.body.removeChild(textArea);
            }
        });
        
        function showCopyFeedback() {
            copyFeedback.classList.add('show');
            setTimeout(() => {
                copyFeedback.classList.remove('show');
            }, 2000);
        }
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    function updateActiveNavigation() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNavigation();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call
    updateActiveNavigation();
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => img.classList.add('loaded'));
    }
}

// Tech icon hover effects
function initTechIconEffects() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Stats animation when in view
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element) {
    const text = element.textContent;
    const isInfinity = text === '∞';
    
    if (isInfinity) {
        element.style.animation = 'pulse 2s infinite';
        return;
    }
    
    const number = parseInt(text.replace('+', ''));
    const duration = 1000;
    const increment = number / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
    }, 16);
}

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (e) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (e) {
        console.warn(`Elements not found: ${selector}`);
        return [];
    }
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initTechIconEffects();
    initStatsAnimation();
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page is visible
        document.body.style.animationPlayState = 'running';
    }
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Skip to main content on Tab press from address bar
    if (e.key === 'Tab' && document.activeElement === document.body) {
        const main = document.querySelector('main');
        if (main) {
            main.focus();
            e.preventDefault();
        }
    }
    
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const mobileNav = document.getElementById('mobileNav');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        
        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            if (mobileMenuBtn) {
                const hamburger = mobileMenuBtn.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.style.transform = 'rotate(0deg)';
                }
                mobileMenuBtn.focus();
            }
        }
    }
});

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        '/public/profile/profile.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadCriticalImages();