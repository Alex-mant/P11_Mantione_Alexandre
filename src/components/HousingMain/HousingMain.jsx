import { setMyStars } from '../../utils/setMyStars';
import {data} from "../../data/data"
import './HousingMain.css'
import '../../styles/Main.css'
import { useLocation } from 'react-router-dom';

const HousingMain = () => {
  
  const currentId = useLocation().search.split("=")[1];
  const [thisHousing] = data.filter((data) => data.id === currentId);

  return (
    <main className='housing-main'>

      <div className='housing-presentation'>
        <div className='title-localisation-tags'>
          <h2>{thisHousing.title}</h2>
          <span className='localisation'>{thisHousing.location}</span>
          <div className='tagSection'>
            <span className='tags'>a faire</span>
            <span className='tags'>a faire</span>
            <span className='tags'>a faire</span>
          </div>
        </div>

        <div className='person-stars'>

          <div className='profilePhoto-name'>
            <span>{thisHousing.host.name.split(" ")[0]}<br/>{thisHousing.host.name.split(" ")[1]}</span>
            <img className="simuPhoto" src={thisHousing.host.picture} alt="" />
          </div>

          <div className='housing-stars'>
            {setMyStars(30,30,"#FF6060")}
            {setMyStars(30,30,"#FF6060")}
            {setMyStars(30,30,"#FF6060")}
            {setMyStars(30,30,"#E3E3E3")}
            {setMyStars(30,30,"#E3E3E3")}
          </div>

        </div>
      </div>

      <div className='dropdown-container'>

        <div className='dd-container'>
          <div className='housingDropDown'>
            <span>Description</span>
            <div className='dropdownSquare'></div>
          </div>
          <p className='text-dropdown'>
            {thisHousing.description}
          </p>
        </div>        

        <div className='dd-container'>
          <div className='housingDropDown'>
            <span>Équipements</span>
            <div className='dropdownSquare'></div>
          </div>
          <p className='text-dropdown'>
            a faire <br/>
            a faire<br/>
            a faire<br/>
            a faire<br/>
            a faire<br/>
            a faire<br/>
            a faire<br/>
          </p>
        </div>
      

      </div>

    </main>
  )

}

export default HousingMain;