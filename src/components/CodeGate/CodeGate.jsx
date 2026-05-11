import { useState } from 'react';
import './CodeGate.css';
import castleimg from '../../assets/riks-arkivet-transparent.png';
import { useAuth } from '../../context/AuthContext';
import { useLang } from '../../context/LanguageContext';

export default function CodeGate() {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const { login } = useAuth();
    const { lang, t, toggleLang } = useLang();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!login(code)) {
            setError(true);
            setCode('');
        }
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
        setCode(value);
        if (error) setError(false);
    };

    return (
        <div className="code-gate">
            <div className="code-gate-lang">
                <button
                    onClick={() => toggleLang('sv')}
                    className={lang === 'sv' ? 'active' : ''}
                >SV</button>
                <span>|</span>
                <button
                    onClick={() => toggleLang('en')}
                    className={lang === 'en' ? 'active' : ''}
                >EN</button>
            </div>

            <div className="code-gate-card">
                <img src={castleimg} alt="Gamla Riksarkivet" className="code-gate-castle" />
                <h1 className="code-gate-title">Calle &amp; Siobhán</h1>
                {/* <p className="fine-print code-gate-date">{t.hero.date}</p> */}

                {/* <div className="thin-line"></div> */}

                <form onSubmit={handleSubmit} className="code-gate-form">
                    <label htmlFor="access-code" className="typewriter-label">
                        {t.gate.label}
                    </label>
                    <input
                        id="access-code"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="off"
                        maxLength={4}
                        value={code}
                        onChange={handleChange}
                        autoFocus
                        className="code-gate-input"
                    />
                    <p className={`code-gate-error ${error ? 'visible' : ''}`}>
                        {t.gate.error}
                    </p>
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={code.length !== 4}
                    >
                        {t.gate.submit}
                    </button>
                </form>
            </div>
        </div>
    );
}
