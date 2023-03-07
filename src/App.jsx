import './styles/App.css'
import Homepage from './pages/Homepage'
import SuccessPurchase from './pages/SuccessPurchase'
import { Routes, Route, Link } from 'react-router-dom'

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
