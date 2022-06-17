import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { setMyLogo } from '../../assets/utils/setMyLogo';
import './Header.css';
 
const Header = () => {
 const url = useLocation().pathname.split('/')[1]

  useEffect(() => {
    document.title = url !== '' ? "Kasa - " + url : "Kasa"
  })

  return (
  <header>
    {setMyLogo("#FF6060", 210, 68, "header")}
    <nav className='navbar-header'>
      <Link to="/kasa">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
  </header>
  )
}

export default Header;