import './Info.css';
import { Link } from 'react-router-dom';
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

            <div className="thin-line"></div>

            <div className="info-block">
                <p className="typewriter-label">{t.info.gifts_label}</p>
                <p className="typewriter-text info-body-text">{t.info.gifts_text}</p>
                <Link to="/gavor" className="info-link">{t.info.gifts_link}</Link>
            </div>

            <div className="thin-line"></div>

            <div className="info-block">
                <p className="typewriter-label">{t.info.schedule_label}</p>

                <div className="schedule-list">
                    {t.info.schedule.map((item, i) => (
                        <div className="schedule-item" key={i}>
                            {item.time && <span className="schedule-time">{item.time}</span>}
                            <p className="schedule-text">{item.text}</p>
                        </div>
                    ))}
                </div>

                <p className="schedule-outro">{t.info.schedule_outro}</p>
            </div>
        </section>
    );
}
