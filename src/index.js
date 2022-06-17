import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './components/1_Header/Header';
import Footer from './components/3_Footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/2_Pages/Home/Home';
import About from './components/2_Pages/About/About';
import Error404 from './components/2_Pages/Error404/Error404';
import ScrollToTop from './assets/utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        < Header />
        <ScrollToTop>
          <Routes>            
            < Route exact path='/kasa' element= {<Home />} />  
            < Route path='/About/' element= {<About />} />
            < Route path="*" element= {<Error404 />} />  
          </Routes>
        </ScrollToTop>
        < Footer />
    </Router>
  </React.StrictMode>
);
