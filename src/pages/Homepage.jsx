import React, { createContext, useEffect, useReducer, useState } from 'react'
import Cart from '../components/cart/Cart'
import Header from '../components/header/Header'
import Rolls from '../components/rolls/Rolls'
import '../styles/Homepage.css'

export const IncDecContext = createContext()

const itemsReducer = (state, action) => {
   function add(item) {
      const existingItem = state.find((i) => i.title === item.title)
      if (existingItem) {
         return increment(existingItem)
      } else {
         item.id = Date.now()
         return [...state, item]
      }
   }

   function increment(item) {
      const newCartItems = [...state]
      const targetItem = newCartItems.find((i) => i.id === item.id)
      targetItem.count++
      targetItem.totalPrice += targetItem.price
      return newCartItems
   }

   function decrement(item) {
      const newCartItems = [...state]
      const targetIndex = newCartItems.findIndex((i) => i.id === item.id)
      const targetItem = newCartItems[targetIndex]
      item.count > 1 ? (item.count -= 1) : newCartItems.splice(targetIndex, 1)
      targetItem.totalPrice -= targetItem.price
      return newCartItems
   }

   switch (action.type) {
      case 'add':
         return add(action.value)
      case 'increment':
         return increment(action.value)
      case 'decrement':
         console.log(1)
         return decrement(action.value)
      default:
         console.log(state)
         return state
   }
}

const Homepage = () => {
   const [cartItems, setCartItems] = useReducer(itemsReducer, [])
   const [cartIsEmpty, setCartIsEmpty] = useState(true)

   useEffect(() => {
      if (cartItems.length === 0) {
         setCartIsEmpty(true)
      } else {
         setCartIsEmpty(false)
      }
   }, [cartItems])

   return (
      <IncDecContext.Provider
         value={{
            inc: (item) => setCartItems({ type: 'increment', value: item }),
            dec: (item) => setCartItems({ type: 'decrement', value: item }),
         }}
      >
         <div className='Homepage'>
            <div className='container'>
               <Header />
               <Rolls addToCart={(item) => setCartItems({ type: 'add', value: item })} />
               <Cart cartItems={cartItems} cartIsEmpty={cartIsEmpty} />
            </div>
         </div>
      </IncDecContext.Provider>
   )
}

export default Homepage
