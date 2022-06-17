import { Link } from 'react-router-dom';
import { setMyLogo } from '../../utils/setMyLogo';
import './Header.css';
 
const Header = () => {
  return (
  <header>
    {setMyLogo("#FF6060", 210, 68, "header")}
    <nav className='navbar-header'>
      <Link to="/Kasa">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
  </header>
  )
}

export default Header;