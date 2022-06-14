import '../../styles/Banner.css';
import aboutBanner from '../../../../assets/images/about-banner.jpg'
// import { useLocation } from 'react-router-dom';

const Banner = () => {

  return(
    <div className='banner'>
    <img className='banner-img' src={aboutBanner} alt="bannière" />
    <div className='banner-filter'></div>
  </div>
  )

}

export default Banner;
