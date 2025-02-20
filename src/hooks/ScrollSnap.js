// src/hooks/useScrollSnap.js
import { useEffect } from 'react';

const useScrollSnap = () => {
  useEffect(() => {
    let isAnimating = false;

    const handleWheel = (e) => {
      if (isAnimating) return;
      // Prevent the default scrolling behavior
      e.preventDefault();

      if (e.deltaY > 0) {
        // Downward scroll: if we're below 100px, let free scrolling; if not, snap to 100
        if (window.scrollY < 100) {
          isAnimating = true;
          window.scrollTo({ top: 100, behavior: 'smooth' });
          setTimeout(() => {
            isAnimating = false;
          }, 600);
        }
      } else if (e.deltaY < 0) {
        // Upward scroll: snap to 0 if above 0
        if (window.scrollY > 0) {
          isAnimating = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            isAnimating = false;
          }, 600);
        }
      }
    };

    // Add the event listener with passive set to false
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useScrollSnap;