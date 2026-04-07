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
});
