import './HousingMain.css'
import '../../styles/Main.css'
import HousingTags from '../HousingTags/HousingTags';
import Dropdown from '../Dropdown/Dropdown';
import SetMyStars from '../../utils/SetMyStars'

const HousingMain = ({currentHousing}) =>{

  return (
    <main className='housing-main'>

      <div className='housing-presentation'>
        <div className='title-localisation-tags'>
          <h2>{currentHousing.title}</h2>
          <span className='localisation'>{currentHousing.location}</span>
          <HousingTags tags={currentHousing.tags}/>                  
        </div>

        <div className='person-stars'>

          <div className='profilePhoto-name'>
            <span>{currentHousing.host.name.split(" ")[0]}<br/>{currentHousing.host.name.split(" ")[1]}</span>
            <img className="simuPhoto" src={currentHousing.host.picture} alt="" />
          </div>

          <div className='housing-stars'>
            <SetMyStars rating={currentHousing.rating}/>     
          </div>

        </div>
      </div>

      <div className='dropdown-container'>
        <Dropdown name={"Description"} text={currentHousing.description}/>
        <Dropdown name={"Équipements"} text={currentHousing.equipments}/>    
      </div>

    </main>
  )

}

export default HousingMain;