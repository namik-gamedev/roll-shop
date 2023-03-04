import React from 'react'
import CartItem from './cartItem/CartItem'
import cl from './CartList.module.css'

const CartList = ({ cartItems, incrementItemCount, decrementItemCount }) => {
   return (
      <div className={cl.cartList}>
         {cartItems.map((item, index) => (
            <CartItem
               incrementItemCount={incrementItemCount}
               decrementItemCount={decrementItemCount}
               key={index}
               data={item}
            />
         ))}
      </div>
   )
}

export default CartList
