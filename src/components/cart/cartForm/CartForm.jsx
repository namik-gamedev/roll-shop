import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/button/Button'
import cl from './CartForm.module.css'
import CartFormInputBlock from './cartFormInputBlock/CartFormInputBlock'

const CartForm = ({ submitPurchase }) => {
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')
   const [phoneError, setPhoneError] = useState(false)
   const [addressError, setAdressError] = useState(false)

   useEffect(() => {
      if (
         phone === '' ||
         phone.match(/[a-zA-Z]/) ||
         phone.match(/[а-яА-ЯЁё]/) ||
         phone.match(/[/.*,^`~:;]/)
      ) {
         setPhoneError(true)
      } else {
         setPhoneError(false)
      }
   }, [phone])
   useEffect(() => {
      if (address === '') {
         setAdressError(true)
      } else {
         setAdressError(false)
      }
   }, [address])

   // TODO: make form from this
   return (
      <div className={cl.cartForm}>
         <CartFormInputBlock
            type='text'
            label='Номер телефона'
            placeholder='+7(999)-999-99-99'
            name='phone'
            inputValue={!phone.startsWith(' ') ? phone : ''}
            onChange={(e) => setPhone(e.target.value)}
         />
         {phoneError && <p className={cl.cartForm__error}>Недопустимое значение</p>}
         <CartFormInputBlock
            type='text'
            label='Адрес доставки'
            placeholder='Город Х ул. Х дом Х'
            name='address'
            inputValue={!address.startsWith(' ') ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
         />
         {addressError && <p className={cl.cartForm__error}>Недопустимое значение</p>}
         {!(phoneError || addressError) && (
            <Button>
               <Link to='/successpurchase'>Оформить заказ</Link>
            </Button>
         )}
      </div>
   )
}

export default CartForm
