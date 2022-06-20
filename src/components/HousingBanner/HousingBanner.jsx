import { useState } from 'react';
import './HousingBanner.css';

const HousingBanner = ({currentHousing}) => {
  let [index, setIndex] = useState(0);

  const previous = () => {
    index === 0 ? setIndex(currentHousing.pictures.length - 1) : setIndex(index--)
  }
  const next = () => {
    index < currentHousing.pictures.length ? setIndex(index++) : setIndex(0)
  }

  return (
  <div className='HousingBanner'>
    <div className='carrousel precedent' onClick={previous}></div>
    <div className='filter filLeft'></div>
    <img className='HousingBanner-img' src={currentHousing.pictures[index]} alt="bannière" />
    <div className='filter filRight'></div>
    <div className='carrousel suivant' onClick={next}></div>
  </div>
  )

}

export default HousingBanner;
