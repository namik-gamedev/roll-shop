import React from 'react'
import cl from './Button.module.css'

const Button = ({ onClick, children, className, type }) => {
   return (
      <button type={type} onClick={onClick} className={`${cl.btn} ${className}`}>
         {children}
      </button>
   )
}

export default Button
