document.addEventListener('DOMContentLoaded', function() {
    // Select all <a> elements inside <header>
    const headerLinks = document.querySelectorAll('header nav ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const start = window.pageYOffset; 
                const targetOffset = targetSection.getBoundingClientRect().top; 
                const duration = 1000; 
                const startTime = performance.now(); // Get current timestamp

                function animateScroll() {
                    const currentTime = performance.now(); 
                    const elapsedTime = currentTime - startTime; 
                    const progress = Math.min(elapsedTime / duration, 1);

                    // Calculate new scroll position using easing function (optional)
                    const easedProgress = easeInOutQuad(progress);
                    const newScrollPosition = start + targetOffset * easedProgress;
                    window.scrollTo(0, newScrollPosition);

                    if (elapsedTime < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }

                requestAnimationFrame(animateScroll);
            }
        });
    });
});

// Easing function (optional)
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
