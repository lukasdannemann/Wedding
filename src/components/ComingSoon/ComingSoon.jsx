// src/components/ComingSoon/ComingSoon.jsx
import './ComingSoon.css';
import castleimg from '../../assets/castle_img.png';

export default function ComingSoon() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <h1>Calle & Siobhán</h1>
        
        <div className="castle-container">
          <img src={castleimg} alt="Bjertorp Slott" className="castle-img" />
        </div>
        
        <p className="fine-print" style={{ fontSize: '1.5rem', margin: '10px 0 30px 0' }}>
          19 september 2026
        </p>
        
        <div className="thin-line"></div>
        
        <p className="typewriter-text" style={{ opacity: 0.8 }}>
          Vi bygger för fullt på vår bröllopssida! <br/>
          Inbjudan och mer information publiceras här inom kort!  
        </p>
      </div>
    </div>
  );
}