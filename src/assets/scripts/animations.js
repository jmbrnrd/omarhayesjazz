export default function () {
    console.log('Animations loaded');
// Animate content groups on entry
// ================================================
    const observer = new IntersectionObserver((entryGroups) => {
        entryGroups.forEach((entryGroup) => {
            // If this content group is not in the viewport then abort
            if (!entryGroup.isIntersecting) {
                return;
            }
            // Otherwise get all content elements to animate
            let entries = entryGroup.target.querySelectorAll('.entry');
            entries.forEach((entry, i) => {
                // Add a delay to stagger the entries and then apply transition class
                entry.setAttribute('style', `transition-delay: ${i * 100}ms`);
                entry.classList.add('reveal');
                // unobserve so that it only runs once
                observer.unobserve(entryGroup.target);
            });
        });
    }, {
        threshold: 0,
        rootMargin: '0px 0px -150px 0px'
    });
// Initialise intersection observer
    const entryGroups = document.querySelectorAll('.entry-group');
    entryGroups.forEach((entryGroup) => {
        observer.observe(entryGroup);
    });
}
