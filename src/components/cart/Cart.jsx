import React, { useState } from 'react'
import cl from './Cart.module.css'
import CartForm from './cartForm/CartForm'
import CartIsEmpty from './cartIsEmpty/CartIsEmpty'
import CartList from './cartList/CartList'
import CartTotal from './cartTotal/CartTotal'

const Cart = ({ cartIsEmpty, cartItems }) => {
   function getTotal() {
      return cartItems.reduce((total, item) => total + item.totalPrice, 0)
   }

   return (
      <div className={cl.cart}>
         <h2 className={`${cl.cart__title} title`}>Ваша корзина</h2>
         {cartIsEmpty && <CartIsEmpty />}
         {/* Реализация списка товаров в корзине */}
         <CartList cartItems={cartItems} />
         {!cartIsEmpty && <CartTotal total={getTotal()} />}
         {!cartIsEmpty && <CartForm />}
      </div>
   )
}

export default Cart
