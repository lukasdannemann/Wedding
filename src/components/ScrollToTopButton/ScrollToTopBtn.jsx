import { useState, useEffect } from 'react';
import './ScrollToTopBtn.css';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Visa knappen när man skrollat ner 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Gör skrollen mjuk och lyxig
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-btn">
          {/* Du kan använda en enkel pil eller en ikon här */}
          ↑
        </button>
      )}
    </div>
  );
}