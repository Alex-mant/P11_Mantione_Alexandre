import { Link } from "react-router-dom";
import { data } from "../../data/data"
import './HousingCard.css'


const HousingCard = () => {
  const myData = data;
  
  return myData.map((data) =>
    <div key={data.id} className='housing-card'>
      <Link className="housing-img" to={"/kasa/home/housing?id=" + data.id}>
        <img src={data.cover} alt="" />
      </Link>
      <div className='gradient-filter'>
        <span className='housing-name'>{data.title}</span>
      </div> 
    </div>
  )
};

export default HousingCard;