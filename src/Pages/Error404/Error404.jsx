import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Error.css'

const Error404 = () => {

  useEffect(() =>{
    document.querySelector('main').style.background = "#ffff"
  })

  return(
    <main className='error-main'>
      <h3 className="Error-title Error-text-format">404</h3>
      <p className="Error-message Error-text-format">Oups! La page que vous demandez n'existe pas.</p>
      <nav className="back-to-home">
        <Link className=" Error-text-format" to="/kasa">Retourner à la page d'accueil</Link>
      </nav>
    </main>
  )
}

export default Error404;