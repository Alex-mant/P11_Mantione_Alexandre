import { useState } from 'react';
import "./style.css"

const HousingBanner = ({currentHousing}) => {
  let [index, setIndex] = useState(0);

  const previous = () => {
    index === 0 ? setIndex(currentHousing.pictures.length - 1) : setIndex(index - 1)
  }
  const next = () => {
    index === currentHousing.pictures.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  return (
  <div className='HousingBanner'>
    <div className={currentHousing.pictures.length > 1 ?'carrousel precedent': ''} onClick={previous}></div>
    <div className={currentHousing.pictures.length > 1 ?'filter filLeft':''}></div>
    <img className='HousingBanner-img' src={currentHousing.pictures[index]} alt="bannière" />
    <div className={currentHousing.pictures.length > 1 ?'filter filRight':''}></div>
    <div className={currentHousing.pictures.length > 1 ?'carrousel suivant': ''} onClick={next}></div>
  </div>
  )

}

export default HousingBanner;
