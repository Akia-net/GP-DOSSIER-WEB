// Creates the observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Triggers the CSS animation
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});

// Applies the observer to all elements with the 'reveal' class
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));