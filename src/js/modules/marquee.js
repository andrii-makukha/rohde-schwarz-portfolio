// ============================================
// Marquee Animation
// ============================================

export const initMarquee = () => {
  const marqueeTrack = document.querySelector('.marquee-track');
  if (!marqueeTrack) return;

  // Duplicate content for seamless loop
  const pills = marqueeTrack.querySelectorAll('.pill');
  pills.forEach(pill => {
    const clone = pill.cloneNode(true);
    marqueeTrack.appendChild(clone);
  });
};

