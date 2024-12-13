import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {



  return (
    <footer>

      <div className="redes">
        <div className="logofooter">
          <p className='mammafooter'> <FontAwesomeIcon icon={faPizzaSlice} /> Mamma Mía</p>
          
          <p className='direccion'>Av.Italia #123, Ñuñoa</p>
        </div>
        <div className="iconos">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /> <span className='enlace'> /Mammamiapizeeria</span> </a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /><span className='enlace'> /Mammamiapizza</span> </a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /> <span className='enlace'> /Mammamiacl</span></a>
        </div>

      </div>
      <div className="info"> © 2024 - Pizzería Mamma Mia! - Todos los derechos reservados
      </div>

    </footer>
  )
}

export default Footer