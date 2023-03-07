import React, { useContext } from 'react'
import { IncDecContext } from '../../../pages/Homepage'
import CartItem from './cartItem/CartItem'
import cl from './CartList.module.css'

const CartList = ({ cartItems }) => {
   const incDecContext = useContext(IncDecContext)

   return (
      <div className={cl.cartList}>
         {cartItems.map((item, index) => (
            <CartItem
               incrementItemCount={incDecContext.inc}
               decrementItemCount={incDecContext.dec}
               key={index}
               data={item}
            />
         ))}
      </div>
   )
}

export default CartList
