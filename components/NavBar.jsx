import React from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import {Cart} from './';  
import { useStateContext } from '../context/StateContext';



const NavBar = () => {
  const {ShowCart,setShowCart,totelQuantity} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          M-Kart Online Shopping Store
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShoppingCart/>
        <span className='cart-item-qty'>{totelQuantity}</span>
      </button>
      {ShowCart && <Cart/>}
    </div>
  )
}

export default NavBar