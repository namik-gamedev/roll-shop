import React from 'react'
import './styles/App.css'
import Homepage from './pages/Homepage'
import SuccessPurchase from './pages/SuccessPurchase'
import { Routes, Route } from 'react-router-dom'

const App = () => {
   return (
      <div>
         <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/successpurchase' element={<SuccessPurchase />} />
         </Routes>
      </div>
   )
}

export default App
