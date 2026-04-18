import './Hero.css';
import castleimg from '../../assets/castle_img.png';

export default function Hero() {
    return (
        <section id="hem" className='hero-section'>
            <div className='castle-container'>
                <img src={castleimg} alt="Bjertorp Slott" className='castle-img' />
            </div>
            <div className='hero-intro'>
                <p className='typewriter'>Välkomna att fira vårt bröllop på Bjertorp Slott.</p>
                <p className='fine-print'>Lördagen den 19 september 2026</p>
            </div>
            
        </section>
    );
}