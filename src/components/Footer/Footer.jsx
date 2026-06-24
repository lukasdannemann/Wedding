import './Footer.css';
import castleimg from '../../assets/riks-arkivet-transparent.png';
import { useLang } from '../../context/LanguageContext';
import { config } from '../../config';

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-text-left">
                    <p className="footer-names">{config.coupleNames}</p>
                    <p className="footer-venue">{t.footer.venue}</p>
                </div>

                <img src={castleimg} alt="Gamla Riksarkivet" className="footer-castle" />

                <p className="footer-contact">
                    {t.footer.contact}{' '}
                    <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>
                </p>

            </div>
        </footer>
    );
}
