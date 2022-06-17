import './HousingBanner.css';
import homeBanner from'../../../../assets/images/home-banner.jpg'

const HousingBanner = () => {

  return (
  <div className='HousingBanner'>
    <img className='HousingBanner-img' src={homeBanner} alt="bannière" />
  </div>
  )

}

export default HousingBanner;
