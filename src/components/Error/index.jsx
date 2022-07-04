import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Error = () => {

  return(
    <>
      <h3 className="Error-title Error-text-format">404</h3>
      <p className="Error-message Error-text-format">Oups! La page que vous demandez n'existe pas.</p>
      <nav className="back-to-home">
        <Link className="Error-link Error-text-format" to="/kasa/home">Retourner à la page d'accueil</Link>
      </nav>
    </>
  
  )

}

export default Error;
