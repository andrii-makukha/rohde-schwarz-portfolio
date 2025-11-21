// ============================================
// Scroll Animations
// ============================================

import { isInViewport, debounce } from '../utils/helpers.js';

export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.panel, .card, .timeline-item');
  
  const handleScroll = debounce(() => {
    animatedElements.forEach((element, index) => {
      if (isInViewport(element)) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, 100);

  // Initial check
  handleScroll();
  
  // Listen to scroll
  window.addEventListener('scroll', handleScroll);
};

