import { NavLink } from 'react-router-dom';
import IsActive from '../../utils/IsActive';
import SetMyLogo from '../../utils/SetMyLogo';
import './Header.css';

const Header = () => {
  return (
  <header>
    <SetMyLogo color="#FF6060" width="210" heigth="68" name="header"/>
    <nav className='navbar-header'>
      <NavLink to="/kasa/home" className={IsActive("/kasa/home") ? "active-link" : "inactive-link"}>Accueil</NavLink>
      <NavLink to="/kasa/about" className={IsActive("/kasa/about") ? "active-link" : "inactive-link"}>A propos</NavLink>
    </nav>
  </header>
  )
}

export default Header;