// Select all story sections
const stories = document.querySelectorAll('.story');

// --- Intersection Observer Setup ---

// Configuration options for the observer
const observerOptions = {
  root: null, // Observes intersections relative to the viewport
  rootMargin: '0px', // No margin around the root
  threshold: 0.2 // Trigger when 20% of the element is visible
  // Threshold array example: [0, 0.2, 1] // Triggers at 0%, 20%, 100% visibility
};

// Callback function executed when an observed element intersects
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    // entry.isIntersecting is true if the element is visible (based on threshold)
    if (entry.isIntersecting) {
      // Add the 'visible' class to the element
      entry.target.classList.add('visible');

      // --- Optional: Stop observing after the element becomes visible ---
      // Useful if you want the animation to run only once.
      // Uncomment the line below to enable this behavior.
      // observer.unobserve(entry.target);

    } else {
      // --- Optional: Remove class if element scrolls out of view ---
      // Useful if you want the animation to reverse/reset when scrolling away.
      // Note: CSS needs to handle the 'out' transition if you enable this.
      // entry.target.classList.remove('visible');
    }
  });
};

// --- Initialize Observer ---

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Check if there are any story elements found
if (stories.length > 0) {
  // Start observing each story section
  stories.forEach(story => {
    observer.observe(story);
  });
} else {
  console.log("No '.story' elements found to observe."); // Feedback if selector fails
}