import { useEffect } from 'react';
import { setMyLogo } from '../../assets/utils/setMyLogo';
import './Header.css';
 
const Header = () => {

  useEffect(() => {
    document.title = `Kasa - ${window.location.href.split("/")[3]}`
  })

  return (
  <header>
    {setMyLogo("#FF6060", 210, 68, "header")}
    <nav className='navbar-header'>
      <ol>
        <li><a href='Home'>Accueil</a></li>
        <li><a href="About">A Propos</a></li>
      </ol>
    </nav>
  </header>
  )
}

export default Header;