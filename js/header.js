// header.js
// Handles the sticky header functionality

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.site-header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    // We make it sticky after exactly the first fold. 
    // Usually defined as 100vh or a specific pixel amount like 600px.
    const threshold = window.innerHeight;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // If we scrolled past the first fold (threshold)
        if (currentScrollY > threshold) {
            header.classList.add('is-sticky');

            // If scrolling UP, show the header
            if (currentScrollY < lastScrollY) {
                header.classList.add('is-visible');
            } 
            // If scrolling DOWN, hide the header
            else {
                header.classList.remove('is-visible');
            }
        } else {
            // Before the fold, behave normally (un-sticky)
            header.classList.remove('is-sticky');
            header.classList.remove('is-visible');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });

    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;

    if (mobileBtn && mainNav && overlay) {
        const toggleMenu = () => {
            const isActive = mobileBtn.classList.toggle('is-active');
            mainNav.classList.toggle('is-active');
            overlay.classList.toggle('is-active');
            header.classList.toggle('menu-open');
            
            // Lock/Unlock body scroll
            if (isActive) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        };

        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });
    }
});
