import { useLang } from '../../context/LanguageContext';

export default function Festen() {
    const { t } = useLang();

    return (
        <section id="praktiskt" className="section-container">
            <h2 className="section-title">{t.praktiskt.title}</h2>

            <div className="section-content">
                <p className="typewriter-label">{t.praktiskt.dresscode_label}</p>
                <p className="typewriter-text">{t.praktiskt.dresscode}</p>
            </div>
        </section>
    );
}
