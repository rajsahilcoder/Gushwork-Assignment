// renderer.js
// Responsible for injecting section templates into the index.html placeholders

document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        { id: 'partners-inject', content: window.partnersSection },
        { id: 'specs-inject', content: window.specsSection },
        { id: 'features-inject', content: window.featuresSection },
        { id: 'industries-inject', content: window.industriesSection },
        { id: 'manufacturing-inject', content: window.manufacturingSection },
        { id: 'testimonials-inject', content: window.testimonialsSection },
        { id: 'portfolio-inject', content: window.portfolioSection },
        { id: 'resources-inject', content: window.resourcesSection },
        { id: 'faq-inject', content: window.faqSection },
        { id: 'cta-inject', content: window.ctaSection }
    ];

    sections.forEach(section => {
        const container = document.getElementById(section.id);
        if (container && section.content) {
            container.innerHTML = section.content;
        }
    });

    // Re-initialize dynamic components if they depend on injected DOM
    if (typeof initAccordion === 'function') initAccordion();
    if (typeof initTabs === 'function') initTabs();
    if (typeof initIndustryCarousel === 'function') initIndustryCarousel();
    if (typeof initTestimonialCarousel === 'function') initTestimonialCarousel();
    
    // Initialize Scroll Reveal
    initScrollReveal();
});

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Apply reveal class to sections or specific elements
    document.querySelectorAll('.section-header, .feature-card, .industry-card, .testimonial-card, .portfolio-card, .specs-table, .cta-section').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}
