import './Navigation.css'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy' // Importera din hook

export default function Navigation() {
    // Lista på de ID:n vi vill bevaka på startsidan
    const activeSection = useScrollSpy(['hem', 'schema', 'vigsel', 'festen', 'plats']);

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <HashLink 
                        smooth to='/#schema' 
                        className={activeSection === 'schema' ? 'active' : ''}
                    >Schema</HashLink>
                </li>
                <li>
                    <HashLink 
                        smooth to='/#vigsel' 
                        className={activeSection === 'vigsel' ? 'active' : ''}
                    >Vigsel</HashLink>
                </li>
                {/* Fortsätt likadant för resten... */}
                <li><NavLink to='/contact'>OSA</NavLink></li>
                <li><NavLink to='/speech'>Tal</NavLink></li>
            </ul>
        </nav>
    )
}