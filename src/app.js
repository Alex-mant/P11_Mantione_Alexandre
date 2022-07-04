import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import HousingPage from './pages/HousingPage';
import Header from './components/Header/index';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from './pages/About';
import Footer from './components/Footer/index';
import DataContextProvider from './context/DataContext';

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
