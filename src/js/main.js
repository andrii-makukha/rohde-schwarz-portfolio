// ============================================
// Main JavaScript Entry Point
// ============================================

import { initSmoothScroll } from './modules/smoothScroll.js';
import { initMarquee } from './modules/marquee.js';
import { initScrollAnimations } from './modules/animations.js';
import { initNavigation } from './modules/navigation.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initMarquee();
  initScrollAnimations();
  initNavigation();
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when tab is hidden
    document.body.style.animationPlayState = 'paused';
  } else {
    document.body.style.animationPlayState = 'running';
  }
});

