// src/components/Navigation/Navigation.jsx
import './Navigation.css'
import { HashLink } from 'react-router-hash-link'
import { NavLink, useLocation } from 'react-router-dom' // Importera useLocation
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navigation() {
    const location = useLocation(); // Håll koll på nuvarande URL
    const activeSection = useScrollSpy(['dagen', 'boende', 'praktiskt']);

    // Kontrollera om vi är på startsidan
    const isHomePage = location.pathname === '/';

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <HashLink 
                        to='/#dagen' 
                        /* Lägg bara till 'active' om vi är på startsidan OCH sektionen är aktiv */
                        className={isHomePage && activeSection === 'dagen' ? 'active' : ''}
                    >Dagen</HashLink>
                </li>
                <li>
                    <HashLink 
                        to='/#boende'
                        className={isHomePage && activeSection === 'boende' ? 'active' : ''}
                    >Boende</HashLink>
                </li>
                <li>
                    <HashLink 
                        to='/#praktiskt' 
                        className={isHomePage && activeSection === 'praktiskt' ? 'active' : ''}
                    >Praktiskt</HashLink>
                </li>
                
                {/* NavLink sköter sin egen 'active'-klass automatiskt */}
                <li><NavLink to='/osa'>OSA</NavLink></li>
                <li><NavLink to='/tal'>Tal</NavLink></li>
            </ul>
        </nav>
    )
}