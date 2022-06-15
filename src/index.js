import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './components/1_Header/Header';
import Footer from './components/3_Footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/2_Pages/Home/Home';
import About from './components/2_Pages/About/About';
import Error404 from './components/2_Pages/Error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        < Header />
        <Routes>
          < Route exact path='/' element= {<Home />} />  
          < Route path='/About/' element= {<About />} />
          < Route path="*" element= {<Error404 />} />  
        </Routes>
        < Footer />
    </Router>
  </React.StrictMode>
);
