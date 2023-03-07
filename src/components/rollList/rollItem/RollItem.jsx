import React from 'react'
import cl from './RollItem.module.css'

const RollItem = ({ data, addToCart }) => {
   return (
      <div onClick={(e) => addToCart(data)} className={cl.rollItem}>
         <img className={cl.rollItem__img} src={data.imgSrc} alt='' />
         <h3 className={cl.rollItem__title}>{data.title}</h3>
         <p className={cl.rollItem__composition}>
            Сост.: <br /> {data.composition}
         </p>
         <div className={cl.rollItem__price}>{data.price} ₽</div>
      </div>
   )
}

export default RollItem
