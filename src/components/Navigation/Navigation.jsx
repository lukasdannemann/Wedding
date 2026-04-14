import './Navigation.css'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

export default function Navigation() {


    return(
        <>
        <nav className='navbar'>
            <ul>
                <li><HashLink smooth to='#'>Schema</HashLink></li>
                <li><HashLink smooth to='#'>Vigsel</HashLink></li>
                <li><HashLink smooth to='#'>Hitta hit</HashLink></li>
                <li><NavLink to='/contact'>OSA</NavLink></li>
                <li><NavLink to='/speech'>Tal</NavLink></li>
            </ul>
        </nav>
        </>
    )
}