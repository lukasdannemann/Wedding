import './ErrorPage.css';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

export default function ErrorPage() {
    const { t } = useLang();

    return (
        <section className="error-page">
            <p className="error-code">404</p>
            <h2 className="error-title">{t.error.title}</h2>
            <p className="typewriter-text error-text">{t.error.text}</p>

            <div className="thin-line"></div>

            <Link to="/" className="submit-btn error-btn">
                {t.error.button}
            </Link>
        </section>
    );
}
