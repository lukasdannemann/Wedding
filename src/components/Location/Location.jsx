import { useLang } from '../../context/LanguageContext';

export default function HittaHit() {
    const { t } = useLang();

    return (
        <section id="plats" className="section-container">
            <h2 className="section-title">{t.plats.title}</h2>

            <div className="section-content">
                <p className="typewriter-label">{t.plats.label}</p>
                <p className="typewriter-text">{t.plats.text}</p>
            </div>
        </section>
    );
}
