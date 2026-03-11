document.addEventListener('DOMContentLoaded', () => {
    // Welcome Screen Animation
    const welcomeScreen = document.getElementById('welcome-screen');
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
    }, 2000); // Hides after 2 seconds

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Typing Animation for Hero Title
    const typingTextElement = document.getElementById('typing-text');
    const sentences = [
        "Membangun pengalaman web yang memukau.",
        "Mengubah ide menjadi kode yang fungsional.",
        "Menciptakan solusi digital untuk masa depan."
    ];
    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // milliseconds

    function typeSentence() {
        const currentSentence = sentences[sentenceIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentSentence.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingTextElement.textContent = currentSentence.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentSentence.length) {
            typingSpeed = 1500; // Pause at end of sentence
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            typingSpeed = 500; // Pause before typing next sentence
        }

        setTimeout(typeSentence, typingSpeed);
    }
    typeSentence();

    // Scroll Fade In/Out Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Optional: remove 'is-visible' when out of view to re-animate on scroll back
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Zoom In/Out on Column Click/Press
    const zoomableCards = document.querySelectorAll('.zoomable-card');

    zoomableCards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.95)';
            card.style.transition = 'transform 0.1s ease-out';
        });

        card.addEventListener('mouseup', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.1s ease-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.1s ease-out';
        });

        // For touch devices
        card.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default browser behavior like scrolling
            card.style.transform = 'scale(0.95)';
            card.style.transition = 'transform 0.1s ease-out';
        }, { passive: false }); // Use passive: false to allow preventDefault

        card.addEventListener('touchend', () => {
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.1s ease-out';
        });
    });
});
