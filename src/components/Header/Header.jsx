import { NavLink } from 'react-router-dom';
import IsActive from '../../utils/IsActive';
import SetMyLogo from '../../utils/SetMyLogo';
import './Header.css';

const Header = () => {
  return (
  <header>
    <SetMyLogo color="#FF6060" width="210" heigth="68" name="header"/>
    <nav className='navbar-header'>
      <NavLink to="/kasa" style={{textDecoration: IsActive("/kasa") ? "underline" : "none"}}>Accueil</NavLink>
      <NavLink to="/about" style={{textDecoration: IsActive("/about") ? "underline" : "none"}}>A propos</NavLink>
    </nav>
  </header>
  )
}

export default Header;