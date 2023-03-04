import React from 'react'
import cl from './RollList.module.css'
import RollItem from './rollItem/RollItem'
import RollData from '../../services/rollData/RollData'

const RollList = ({ addToCart }) => {
   const data = RollData.getData()

   return (
      <div className={cl.rollList}>
         {data.map((item, index) => (
            <RollItem key={index} data={item} addToCart={addToCart} />
         ))}
      </div>
   )
}

export default RollList
