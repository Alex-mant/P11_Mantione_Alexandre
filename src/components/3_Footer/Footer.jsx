import { setMyLogo } from '../../assets/utils/setMyLogo';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {setMyLogo('white', 122, 40, 'footer')}
    <span className='copyright'>© 2020 Kasa. All rights reserved</span>
    </footer>
    )
}

export default Footer;