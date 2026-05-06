import './Hero.css';
import castleimg from '../../assets/riks-arkivet-transparent.png';
import { useLang } from '../../context/LanguageContext';

export default function Hero() {
    const { t } = useLang();

    return (
        <section id="hem" className='hero-section'>
            <div className='castle-container'>
                <img src={castleimg} alt="Gamla Riksarkivet" className='castle-img' />
            </div>
            <div className='hero-intro'>
                <p className='fine-print'>{t.hero.date}</p>
                <p className='typewriter'>{t.hero.intro}</p>
            </div>
        </section>
    );
}
