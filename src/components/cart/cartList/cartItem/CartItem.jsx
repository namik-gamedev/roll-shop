import React from 'react'
import cl from './CartItem.module.css'
import CartItemButton from './cartItemButton/CartItemButton'

const CartItem = ({ data, incrementItemCount, decrementItemCount }) => {
   return (
      <div className={cl.cartItem}>
         <div className={cl.cartItem__top}>
            <img className={cl.cartItem__img} src={data.imgSrc} alt='' />
            <h3 className={cl.cartItem__title}>
               {data.title} <br /> <span>(8шт./сет)</span>
            </h3>
         </div>

         <div className={cl.cartItem__bottom}>
            <CartItemButton
               onClick={(e) => decrementItemCount(data)}
               className={cl.cartItem__btn_left}
            >
               -
            </CartItemButton>
            <div className={cl.cartItem__count}>{data.count}</div>
            <CartItemButton
               onClick={(e) => incrementItemCount(data)}
               className={cl.cartItem__btn_right}
            >
               +
            </CartItemButton>
         </div>
         <div className={cl.cartItem__totalPrice}>Всего: {data.totalPrice} ₽</div>
      </div>
   )
}

export default CartItem
