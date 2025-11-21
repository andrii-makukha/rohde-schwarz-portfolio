// ============================================
// Navigation & Scroll Indicator
// ============================================

import { debounce } from '../utils/helpers.js';

export const initNavigation = () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Hide scroll indicator after scrolling down
    if (scrollPosition > windowHeight * 0.3) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);
  
  // Click handler for scroll indicator
  scrollIndicator.addEventListener('click', () => {
    const firstSection = document.querySelector('section');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

