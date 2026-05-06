import { useLang } from '../../context/LanguageContext';

export default function Dagen() {
    const { t } = useLang();

    return (
        <section id="dagen" className="section-container">
            <h2 className="section-title">{t.dagen.title}</h2>
            <p className="fine-print">{t.hero.date}</p>

            <div className="section-content">
                <p className="typewriter-text">{t.dagen.description}</p>
            </div>
        </section>
    );
}
