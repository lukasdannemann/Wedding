// src/components/Navigation/Navigation.jsx
import './Navigation.css'
import { HashLink } from 'react-router-hash-link'
import { NavLink, useLocation } from 'react-router-dom' // Importera useLocation
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navigation() {
    const location = useLocation(); // Håll koll på nuvarande URL
    const activeSection = useScrollSpy(['hem', 'vigsel', 'hitta-hit', 'schema']);

    // Kontrollera om vi är på startsidan
    const isHomePage = location.pathname === '/';

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <HashLink 
                        to='/#vigsel' 
                        /* Lägg bara till 'active' om vi är på startsidan OCH sektionen är aktiv */
                        className={isHomePage && activeSection === 'vigsel' ? 'active' : ''}
                    >Vigsel</HashLink>
                </li>
                <li>
                    <HashLink 
                        to='/#hitta-hit'
                        className={isHomePage && activeSection === 'hitta-hit' ? 'active' : ''}
                    >Hitta hit</HashLink>
                </li>
                <li>
                    <HashLink 
                        to='/#schema' 
                        className={isHomePage && activeSection === 'schema' ? 'active' : ''}
                    >Schema</HashLink>
                </li>
                
                {/* NavLink sköter sin egen 'active'-klass automatiskt */}
                <li><NavLink to='/osa'>OSA</NavLink></li>
                <li><NavLink to='/tal'>Tal</NavLink></li>
            </ul>
        </nav>
    )
}