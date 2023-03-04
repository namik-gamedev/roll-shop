import React from 'react'
import cl from './CartFormInputBlock.module.css'

const CartFormInputBlock = ({ type, inputValue, onChange, label, placeholder, name }) => {
   return (
      <div className={cl.cartFormInputBlock}>
         <label htmlFor={name}>{label}</label>
         <input
            value={inputValue}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={cl.cartFormInputBlock__input}
         />
      </div>
   )
}

export default CartFormInputBlock
