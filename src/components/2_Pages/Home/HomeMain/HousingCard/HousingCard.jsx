import {data} from "../../../../../data/data.js"
import './HousingCard.css'

const HousingCard = () => {
  const myData = data;
  console.log(myData);

  return myData.map((data) =>
    <div key={data.id} className='housing-card'>
      <div className='housing-img'></div>
      <div className='gradient-filter'></div>
      <span className='housing-name'>{data.title}</span>
    </div>
  )
};

export default HousingCard;