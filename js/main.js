// ===== MOBILE NAVIGATION TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
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

// Observe elements for scroll animation
const animateElements = document.querySelectorAll('.amenity-card, .room-card, .room-detail-card, .info-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields!');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address!');
            return;
        }

        // Simulate form submission (in real app, send to server)
        console.log('Form Data Submitted:', formData);

        // Show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');

        // Reset form after 5 seconds and hide success message
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'flex';
            formSuccess.classList.remove('show');
        }, 5000);
    });
}

// ===== BOOK NOW BUTTON HANDLING =====
const bookButtons = document.querySelectorAll('.btn-book');

bookButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get room name from parent elements
        const roomCard = button.closest('.room-detail-card');
        let roomName = 'Selected Room';
        
        if (roomCard) {
            const roomTitle = roomCard.querySelector('h2');
            if (roomTitle) {
                roomName = roomTitle.textContent;
            }
        }

        // Show booking confirmation (in real app, redirect to booking page)
        showBookingModal(roomName);
    });
});

// ===== BOOKING MODAL =====
function showBookingModal(roomName) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s;
    `;

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        animation: slideUp 0.3s;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    `;

    modalContent.innerHTML = `
        <div style="font-size: 4rem; color: #3498db; margin-bottom: 1rem;">
            <i class="fas fa-calendar-check"></i>
        </div>
        <h2 style="color: #2c3e50; margin-bottom: 1rem;">Booking Request</h2>
        <p style="color: #7f8c8d; margin-bottom: 1.5rem;">
            You're about to book: <strong style="color: #2c3e50;">${roomName}</strong>
        </p>
        <p style="color: #7f8c8d; margin-bottom: 2rem;">
            This is a demo website. In a real application, you would be redirected to a booking page or payment gateway.
        </p>
        <button id="closeModal" style="
            background: #3498db;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        ">
            Close
        </button>
    `;

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(50px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Close modal functionality
    const closeModal = () => {
        modalOverlay.style.animation = 'fadeOut 0.3s';
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300);
    };

    document.getElementById('closeModal').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });

    // Hover effect for close button
    const closeBtn = document.getElementById('closeModal');
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = '#2980b9';
        closeBtn.style.transform = 'translateY(-2px)';
        closeBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = '#3498db';
        closeBtn.style.transform = 'translateY(0)';
        closeBtn.style.boxShadow = 'none';
    });
}

// ===== ADD FADEOUT ANIMATION =====
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);

// ===== COUNTER ANIMATION FOR STATS =====
const statsCounters = document.querySelectorAll('.stat h3');

const animateCounter = (element) => {
    const target = element.textContent;
    const isNumber = /^\d+/.test(target);
    
    if (isNumber) {
        const number = parseInt(target);
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < number) {
                element.textContent = Math.floor(current) + (target.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        updateCounter();
    }
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            animateCounter(entry.target);
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

statsCounters.forEach(counter => {
    statsObserver.observe(counter);
});

// ===== LAZY LOADING FOR IMAGES (if you add real images later) =====
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== SCROLL TO TOP BUTTON =====
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s;
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.background = '#2980b9';
        button.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '#3498db';
        button.style.transform = 'translateY(0)';
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
};

createScrollToTopButton();

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== FORM INPUT ENHANCEMENTS =====
const formInputs = document.querySelectorAll('input, textarea, select');

formInputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Character counter for textarea
    if (input.tagName === 'TEXTAREA') {
        const maxLength = 500;
        const counter = document.createElement('div');
        counter.style.cssText = `
            text-align: right;
            font-size: 0.85rem;
            color: #7f8c8d;
            margin-top: 5px;
        `;
        input.parentElement.appendChild(counter);

        const updateCounter = () => {
            const remaining = maxLength - input.value.length;
            counter.textContent = `${input.value.length}/${maxLength} characters`;
            if (remaining < 50) {
                counter.style.color = '#e74c3c';
            } else {
                counter.style.color = '#7f8c8d';
            }
        };

        input.addEventListener('input', updateCounter);
        updateCounter();
    }
});

// ===== CONSOLE MESSAGE =====
console.log('%c🏨 LuxBiz Hotel Website', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%cDeveloped with ❤️ for business travelers', 'font-size: 14px; color: #7f8c8d;');
console.log('%c⚠️ This is a demo website. All booking features are for demonstration purposes only.', 'font-size: 12px; color: #e74c3c;');

// ===== PREVENT RIGHT CLICK ON IMAGES (Optional - for demo purposes) =====
// Uncomment if you want to prevent right-click on placeholder images
/*
document.querySelectorAll('.image-placeholder').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
});
*/

// ===== INITIALIZE =====
console.log('✅ Website initialized successfully!');