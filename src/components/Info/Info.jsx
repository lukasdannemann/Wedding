import './Info.css';
import { useLang } from '../../context/LanguageContext';

export default function Info() {
    const { t } = useLang();

    return (
        <section className="section-container info-section">
            <div className="thin-line"></div>

            <div className="info-block">
                <p className="typewriter-label">{t.info.datetime_label}</p>
                <p className="typewriter-text">{t.info.datetime}</p>
            </div>

            <div className="info-block">
                <p className="typewriter-label">{t.info.location_label}</p>
                <p className="typewriter-text">{t.info.location}</p>
            </div>

            <div className="info-block">
                <p className="typewriter-label">{t.info.dresscode_label}</p>
                <p className="typewriter-text">{t.info.dresscode}</p>
            </div>
        </section>
    );
}
