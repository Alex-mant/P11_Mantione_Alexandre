import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import HousingPage from './Pages/HousingPage/HousingPage';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Error404 from './Pages/Error404/Error404';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json").then((res) => setData(res.data))
  }, []);

  return (
    <Router>
        < Header />
        <ScrollToTop>
          <Routes>            
            < Route exact path='/kasa/home' element= {<Home />} />  
            < Route path='/kasa/about' element= {<About />} />
            < Route path= '/kasa/home/housing' element = {<HousingPage />} />
            < Route path="*" element= {<Error404 />} />  
          </Routes>
        </ScrollToTop>
        < Footer />
    </Router>
  )
}

export default App