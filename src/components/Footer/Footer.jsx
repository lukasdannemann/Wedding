import './Footer.css';
import castleimg from '../../assets/castle_img.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-text-left">
                    <p className="footer-names">Calle & Siobhán</p>
                    <p className="footer-venue">Bjertorp Slott, Kvänum</p>
                </div>

                <img src={castleimg} alt="Bjertorp Slott" className="footer-castle" />

                <p className="footer-contact">
                    Frågor? Kontakta oss på{' '}
                    <a href="mailto:calle.siobhan@brollop.se">calle.siobhan@brollop.se</a>
                </p>

            </div>
        </footer>
    );
}