import { Link } from 'react-router-dom';
import { setMyLogo } from '../../utils/setMyLogo';
import './Header.css';
 
const Header = () => {
  return (
  <header>
    {setMyLogo("#FF6060", 210, 68, "header")}
    <nav className='navbar-header'>
      <Link to="/kasa">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  </header>
  )
}

export default Header;