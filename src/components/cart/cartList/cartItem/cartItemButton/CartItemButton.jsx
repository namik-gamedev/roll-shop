import React from 'react'
import Button from '../../../../UI/button/Button'
import cl from './CartItemButton.module.css'

const CartItemButton = ({ children, onClick, className }) => {
   return (
      <Button onClick={onClick} className={`${cl.cartItemBtn} ${className}`}>
         {children}
      </Button>
   )
}

export default CartItemButton
