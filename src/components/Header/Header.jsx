import './Header.css'
import { config } from '../../config'

export default function Header() {
    return(
        <header className='header'>
          <h1>{config.coupleNames}</h1>
        </header>
    )
}