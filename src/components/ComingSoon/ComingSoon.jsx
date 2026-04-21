// src/components/ComingSoon/ComingSoon.jsx
import './ComingSoon.css';
import castleimg from '../../assets/castle_img.png';

export default function ComingSoon() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        {/* <h1>Calle & Siobhán</h1> */}
        
        <div className="castle-container">
          <img src={castleimg} alt="Bjertorp Slott" className="castle-img" style={{marginTop: '-1rem'}}/>
        </div>
        
        <p className="fine-print" style={{ fontSize: '1.5rem', marginTop: '-2rem'}}>
          19 september 2026
        </p>
        
        <div className="thin-line"></div>
        
        <p className="typewriter-text">
          Vi bygger för fullt på vår bröllopssida! <br/>
          Här kommer du kunna OSA och se all information inom kort!  
          <span className='fine-print'>// Calle & Siobhán </span>
        </p>
      </div>
    </div>
  );
}