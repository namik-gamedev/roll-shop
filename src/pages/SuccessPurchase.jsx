import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/UI/button/Button'
import '../styles/SuccessPurchase.css'

const SuccessPurchase = () => {
   return (
      <div className='SuccessPurchase'>
         <h2>Вы успешно сделали заказ!</h2>
         <Button>
            <Link to='/'>Вернуться к меню</Link>
         </Button>
      </div>
   )
}

export default SuccessPurchase
