import React from 'react'
import Button from '../../UI/button/Button'
import cl from './HeaderMenu.module.css'

const HeaderMenu = () => {
   return (
      <menu className={cl.headerMenu}>
         <li className={cl.headerMenu__item}>
            <a href='/' className={cl.headerMenu__link}>
               Link 1
            </a>
         </li>
         <li className={cl.headerMenu__item}>
            <a href='/' className={cl.headerMenu__link}>
               Link 2
            </a>
         </li>
         <li className={cl.headerMenu__item}>
            <a href='/' className={cl.headerMenu__link}>
               Link 3
            </a>
         </li>
         <li className={cl.headerMenu__item}>
            <a href='/' className={cl.headerMenu__link}>
               Link 4
            </a>
         </li>
         <li className={cl.headerMenu__item}>
            <Button>Кнопка</Button>
         </li>
      </menu>
   )
}

export default HeaderMenu
