import './Footer.css';
import castleimg from '../../assets/riks-arkivet-transparent.png';
import { useLang } from '../../context/LanguageContext';

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-text-left">
                    <p className="footer-names">Calle & Siobhán</p>
                    <p className="footer-venue">{t.footer.venue}</p>
                </div>

                <img src={castleimg} alt="Gamla Riksarkivet" className="footer-castle" />

                <p className="footer-contact">
                    {t.footer.contact}{' '}
                    <a href="mailto:siobhan.jansson@gmail.com">siobhan.jansson@gmail.com</a>
                </p>

            </div>
        </footer>
    );
}
