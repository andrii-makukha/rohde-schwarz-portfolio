// ============================================
// Smooth Scroll
// ============================================

import { getOffsetTop } from '../utils/helpers.js';

export const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip empty hash
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const offsetTop = getOffsetTop(target);
      const headerOffset = 80; // Adjust for fixed header if needed
      const elementPosition = offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  });
};

