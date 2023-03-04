import React from 'react'
import cl from './HeaderLogo.module.css'

const HeaderLogo = () => {
   return (
      <div className={cl.headerLogo}>
         <a href='/'>
            <img
               className={cl.headerLogo__img}
               src='https://cdn-icons-png.flaticon.com/512/3183/3183425.png'
               alt=''
            />
         </a>
         <h1 className={cl.headerLogo__title}>Rock'n'Roll</h1>
      </div>
   )
}

export default HeaderLogo
