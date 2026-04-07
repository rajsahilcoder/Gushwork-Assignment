// carousel.js
// Handles image switching and hover-zoom

document.addEventListener('DOMContentLoaded', () => {
    // 1. Zoom Logic
    const carouselMain = document.querySelector('.carousel-main');
    const mainImg = document.querySelector('.carousel-main img');
    const zoomLens = document.querySelector('.zoom-lens');
    const zoomPreview = document.querySelector('.zoom-preview');

    if (carouselMain && mainImg && zoomLens && zoomPreview) {
        // We set the background image of the preview to be same as the main image

        carouselMain.addEventListener('mouseenter', () => {
            zoomPreview.style.backgroundImage = `url(${mainImg.src})`;
            // Zoom level calculation: scale factor
            // For example, if preview box is 100% size, and background size is 200%, it's a 2x zoom.
            zoomPreview.style.backgroundSize = `${mainImg.width * 3.5}px ${mainImg.height * 3.5}px`;
            carouselMain.classList.add('is-zooming');
        });

        carouselMain.addEventListener('mouseleave', () => {
            carouselMain.classList.remove('is-zooming');
        });

        carouselMain.addEventListener('mousemove', (e) => {
            // Get position of cursor relative to image
            const rect = mainImg.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            // Calculate lens dimensions
            const lensWidth = zoomLens.offsetWidth;
            const lensHeight = zoomLens.offsetHeight;

            // Prevent lens from leaving image boundaries
            x = Math.max(lensWidth / 2, Math.min(x, rect.width - lensWidth / 2));
            y = Math.max(lensHeight / 2, Math.min(y, rect.height - lensHeight / 2));

            // Position the lens
            zoomLens.style.left = `${x - lensWidth / 2}px`;
            zoomLens.style.top = `${y - lensHeight / 2}px`;

            // Position the background preview
            // Calculate ratios to map lens position to background position
            const ratioX = x / rect.width;
            const ratioY = y / rect.height;

            // Shift preview background. We multiply by 100 to use percentages.
            zoomPreview.style.backgroundPosition = `${ratioX * 100}% ${ratioY * 100}%`;
        });
    }

    // 2. Carousel Switching Logic
    const thumbnails = document.querySelectorAll('.carousel-thumb');

    if (thumbnails.length > 0 && mainImg) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Remove active class from all
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to clicked
                thumb.classList.add('active');
                // Change main image src
                mainImg.src = thumb.src;

                // Update zoom preview as well
                if (zoomPreview) {
                    zoomPreview.style.backgroundImage = `url(${mainImg.src})`;
                }
            });
        });
    }
});
