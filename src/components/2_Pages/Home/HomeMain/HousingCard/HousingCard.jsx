import {data} from "../../../../../data/data.js"
import './HousingCard.css'

const HousingCard = () => {
  const myData = data;
  
  return myData.map((data) =>
    <div key={data.id} className='housing-card'>
      <div className='housing-img'><img src={data.cover} alt="" /></div>
      <div className='gradient-filter'><span className='housing-name'>{data.title}</span></div>
      
    </div>
  )
};

export default HousingCard;