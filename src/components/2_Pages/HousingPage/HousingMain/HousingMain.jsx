import { setMyStars } from '../../../../utils/setMyStars';
import './HousingMain.css'
import '../../styles/Main.css'

const HousingMain = () => {
  return (
    <main className='housing-main'>

      <div className='housing-presentation'>
        <div className='title-localisation-tags'>
          <h2>Cozy loft on the Canal Saint-Martin</h2>
          <span className='localisation'>Paris, île-de-France</span>
          <div className='tagSection'>
            <span className='tags'>Cozy</span>
            <span className='tags'>Canal</span>
            <span className='tags'>Paris10</span>
          </div>
        </div>

        <div className='person-stars'>

          <div className='profilePhoto-name'>
            <span>Alexandre<br/>Dumas</span>
            <div className='simuPhoto'></div>
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
            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
          </p>
        </div>        

        <div className='dd-container'>
          <div className='housingDropDown'>
            <span>Équipements</span>
            <div className='dropdownSquare'></div>
          </div>
          <p className='text-dropdown'>
            Climatisation <br/>
            Wi-Fi<br/>
            Cuisine<br/>
            Espace de travail<br/>
            Fer à repasser<br/>
            Sèche-cheveux<br/>
            Cintres<br/>
          </p>
        </div>
      

      </div>

    </main>
  )
  
}
  
export default HousingMain;