import './Navigation.css'
import { HashLink } from 'react-router-hash-link'
import { NavLink, useLocation } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useLang } from '../../context/LanguageContext'

export default function Navigation() {
    const location = useLocation();
    const activeSection = useScrollSpy(['dagen', 'plats', 'praktiskt']);
    const { lang, t, toggleLang } = useLang();

    const isHomePage = location.pathname === '/';

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <HashLink
                        to='/#dagen'
                        className={isHomePage && activeSection === 'dagen' ? 'active' : ''}
                    >{t.nav.dagen}</HashLink>
                </li>
                <li>
                    <HashLink
                        to='/#plats'
                        className={isHomePage && activeSection === 'plats' ? 'active' : ''}
                    >{t.nav.plats}</HashLink>
                </li>
                <li>
                    <HashLink
                        to='/#praktiskt'
                        className={isHomePage && activeSection === 'praktiskt' ? 'active' : ''}
                    >{t.nav.praktiskt}</HashLink>
                </li>
                <li><NavLink to='/osa'>{t.nav.osa}</NavLink></li>
                <li><NavLink to='/tal'>{t.nav.tal}</NavLink></li>
            </ul>

            <div className="lang-toggle">
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
        </nav>
    )
}
