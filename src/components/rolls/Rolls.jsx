import React from 'react'
import RollList from '../rollList/RollList'
import cl from './Rolls.module.css'

const Rolls = ({ addToCart }) => {
   return (
      <div className={cl.rolls}>
         <h2 className={`${cl.rolls__title} title`}>Меню Роллов</h2>
         <RollList addToCart={addToCart} />
      </div>
   )
}

export default Rolls
