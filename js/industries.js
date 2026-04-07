// industries.js
function initIndustryCarousel() {
    const grid = document.querySelector('.industry-grid');
    const prevBtn = document.querySelector('.industries-inject .prev'); // Need to check selector
    const nextBtn = document.querySelector('.industries-inject .next');
    
    // In our index.html, the nav is inside the section header. 
    // Let's find them properly.
    const section = document.getElementById('industries-inject');
    if (!section) return;
    
    const prev = section.querySelector('.prev');
    const next = section.querySelector('.next');
    
    if (grid && prev && next) {
        next.addEventListener('click', () => {
            grid.scrollBy({ left: 300, behavior: 'smooth' });
        });
        prev.addEventListener('click', () => {
            grid.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
}
