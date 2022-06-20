import '../../styles/Main.css';
import HousingCard from '../HousingCard/HousingCard';


const Main = () => {

  return (
    <main className='home-main'>
       {HousingCard()}
    </main>
  )
}

export default Main