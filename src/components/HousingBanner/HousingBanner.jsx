import './HousingBanner.css';

const HousingBanner = ({urlBanner}) => {

  return (
  <div className='HousingBanner'>
    <img className='HousingBanner-img' src={urlBanner} alt="bannière" />
  </div>
  )

}

export default HousingBanner;
