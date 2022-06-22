import { NavLink } from 'react-router-dom';
import IsActive from '../../utils/IsActive';
import { setMyLogo } from '../../utils/setMyLogo';
import './Header.css';

const Header = () => {
  return (
  <header>
    {setMyLogo("#FF6060", 210, 68, "header")}
    <nav className='navbar-header'>
      <NavLink to="/kasa" style={{textDecoration: IsActive("/kasa") ? "underline" : "none"}}>Accueil</NavLink>
      <NavLink to="/about" style={{textDecoration: IsActive("/about") ? "underline" : "none"}}>A propos</NavLink>
    </nav>
  </header>
  )
}

export default Header;