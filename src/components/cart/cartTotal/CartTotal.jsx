import React from 'react'
import cl from './CartTotal.module.css'

const CartTotal = ({ total }) => {
   return <div className={cl.cartTotal}>Итого: {total} ₽</div>
}

export default CartTotal
