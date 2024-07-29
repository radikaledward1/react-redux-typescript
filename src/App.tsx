import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inventory from './components/Inventory'
import AddInventory from './components/AddInventory'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index path='/' element={<Inventory/>} />
        <Route path='/add' element={<AddInventory/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
