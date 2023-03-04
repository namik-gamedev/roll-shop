import React from 'react'
import cl from './Header.module.css'
import HeaderLogo from './headerLogo/HeaderLogo'
import HeaderMenu from './headerMenu/HeaderMenu'

const Header = () => {
   return (
      <header className={cl.header}>
         <HeaderLogo cl={cl} />
         <HeaderMenu cl={cl} />
      </header>
   )
}

export default Header
