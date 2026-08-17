import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'

export default function Navigation() {
    const { lang, t, toggleLang } = useLang();

    return (
        <nav className='navbar'>
            <ul>
                <li><NavLink to='/' end>{t.nav.hem}</NavLink></li>
                <li><NavLink to='/osa'>{t.nav.osa}</NavLink></li>
                <li><NavLink to='/tal'>{t.nav.tal}</NavLink></li>
                <li><NavLink to='/gavor'>{t.nav.gavor}</NavLink></li>
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
