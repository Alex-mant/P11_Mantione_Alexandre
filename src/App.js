import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import HousingPage from './Pages/HousingPage/HousingPage';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Error404 from './Pages/Error404/Error404';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import DataContextProvider from './utils/DataContext';

const App = () => {
  return (
    <Router>
      < Header />
      <ScrollToTop>
        <DataContextProvider>
          <Routes>
            < Route exact path='/kasa/home' element= {<Home />} />  
            < Route path='/kasa/about' element= {<About />} />
            < Route path= '/kasa/home/housing' element = {<HousingPage />} />
            < Route path="*" element= {<Error404 />} />
          </Routes>
        </DataContextProvider> 
      </ScrollToTop>
      < Footer />
    </Router>
  )
}

export default App