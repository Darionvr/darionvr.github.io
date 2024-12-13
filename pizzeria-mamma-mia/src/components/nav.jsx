import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'


export const Nav = () => {
  const carrito = <FontAwesomeIcon icon={faShoppingCart} />
  const pizza = <FontAwesomeIcon icon={faPizzaSlice} />
  const total = 25000;
  const token = false;

  return (
    <nav>
      
<p className='logo'> {pizza} Mamma Mía </p>

        <ul>
            <li><a href="#"> Home </a></li>
            <li className={token == false ? 'noRegistrado' : null}><a href="#"> Profile</a></li>
            <li className={token == false ? 'noRegistrado' : null}><a href="#" > Logout</a></li>
            <li className={token == true ? 'noRegistrado' : null}><a href="#" >Register</a></li>
            <li className={token == true ? 'noRegistrado' : null}><a href="#" >Login</a></li>
            
        </ul>
        
<button className='total'><a href="#">{carrito} ${total.toLocaleString('de-DE')}</a></button>
    </nav>
  )
}

export default Nav
