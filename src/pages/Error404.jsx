import { useEffect } from 'react'
import Error from '../components/Error'

const Error404 = () => {  

  useEffect(() =>{
    document.querySelector('main').style.background = "#ffff"
  })

  return(
    <main className='error-main'>
      < Error />
    </main>
  )
}

export default Error404;