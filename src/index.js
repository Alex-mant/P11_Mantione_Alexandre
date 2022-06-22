import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import HousingPage from './Pages/HousingPage/HousingPage';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Error404 from './Pages/Error404/Error404';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import './styles/Responsive.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        < Header />
        <ScrollToTop>
          <Routes>            
            < Route exact path='/kasa' element= {<Home />} />  
            < Route path='/about' element= {<About />} />
            < Route path= '/housing' element = {<HousingPage/>} />
            < Route path="*" element= {<Error404 />} />  
          </Routes>
        </ScrollToTop>
        < Footer />
    </Router>
  </React.StrictMode>
);
