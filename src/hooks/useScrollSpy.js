import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (ids, offset = 100) => {
  const [activeId, setActiveId] = useState('');
  const frameId = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Avbryt tidigare väntande ramar för att inte överbelasta
      cancelAnimationFrame(frameId.current);

      frameId.current = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + offset;

        for (const id of ids) {
          const element = document.getElementById(id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveId(id);
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId.current);
    };
  }, [ids, offset]);

  return activeId;
};