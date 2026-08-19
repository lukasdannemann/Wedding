import './Info.css';
import { useLang } from '../../context/LanguageContext';

export default function Info() {
    const { t } = useLang();

    // Plockar ut label + värde dynamiskt ur varje objekt i additionalInfo
    // så att du kan lägga till/byta poster i translations utan att röra JSX
    const renderSubBlocks = () =>
        t.info.additionalInfo.map((item, idx) => {
            const labelKey = Object.keys(item).find((k) => k.endsWith('_label'));
            const valueKey = Object.keys(item).find((k) => !k.endsWith('_label'));
            const label = item[labelKey];
            const value = item[valueKey];

            return (
                <div className="info-sub-block" key={idx}>
                    <p className="info-sub-label">{label}</p>
                    {Array.isArray(value) ? (
                        value.map((line, i) => (
                            <p className="typewriter-text info-sub-text" key={i}>{line}</p>
                        ))
                    ) : (
                        <p className="typewriter-text info-sub-text">{value}</p>
                    )}
                </div>
            );
        });

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
                {t.info.additionalInfo_label && (
                    <p className="typewriter-label">{t.info.additionalInfo_label}</p>
                )}
                <div className="info-sub-list">
                    {renderSubBlocks()}
                </div>
            </div>
        </section>
    );
}
