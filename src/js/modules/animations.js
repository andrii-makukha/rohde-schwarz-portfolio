// ============================================
// Scroll Animations
// ============================================

import { isInViewport, debounce } from '../utils/helpers.js';

export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.panel, .card, .timeline-item');
  
  // Add initial animation class to all elements
  animatedElements.forEach((element) => {
    element.classList.add('scroll-animate');
  });
  
  const handleScroll = debounce(() => {
    animatedElements.forEach((element, index) => {
      // Only animate if element is in viewport and hasn't been animated yet
      if (isInViewport(element) && !element.classList.contains('animated')) {
        // Add animated class with slight delay for staggered effect
        setTimeout(() => {
          element.classList.add('animated');
        }, index * 50);
      }
    });
  }, 100);

  // Initial check
  handleScroll();
  
  // Listen to scroll
  window.addEventListener('scroll', handleScroll);
};

