import React, { createContext, useState } from 'react'
import Cart from '../components/cart/Cart'
import Header from '../components/header/Header'
import Rolls from '../components/rolls/Rolls'
import '../styles/Homepage.css'

export const IncDecContext = createContext()

const Homepage = () => {
   const [cartItems, setCartItems] = useState([])
   const [cartIsEmpty, setCartIsEmpty] = useState(true)

   function addToCart(item) {
      const existingItem = cartItems.find((i) => i.title === item.title)
      if (existingItem) {
         incrementItemCount(existingItem)
      } else {
         item.id = Date.now()
         setCartItems([...cartItems, item])
         setCartIsEmpty(false)
      }
   }

   function incrementItemCount(item) {
      const newCartItems = cartItems
      const targetItem = newCartItems.find((i) => i.id === item.id)
      targetItem.count++
      targetItem.totalPrice += targetItem.price
      setCartItems([...newCartItems])
   }

   function decrementItemCount(item) {
      const newCartItems = cartItems
      const targetIndex = newCartItems.findIndex((i) => i.id === item.id)
      const targetItem = newCartItems[targetIndex]
      item.count > 1 ? (item.count -= 1) : newCartItems.splice(targetIndex, 1)
      if (newCartItems.length === 0) {
         setCartIsEmpty(true)
      }
      targetItem.totalPrice -= targetItem.price
      setCartItems([...newCartItems])
   }

   return (
      <IncDecContext.Provider value={{ inc: incrementItemCount, dec: decrementItemCount }}>
         <div className='Homepage'>
            <div className='container'>
               <Header />
               <Rolls addToCart={addToCart} />
               <Cart cartItems={cartItems} cartIsEmpty={cartIsEmpty} />
            </div>
         </div>
      </IncDecContext.Provider>
   )
}

export default Homepage
