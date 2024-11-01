import React from 'react'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product/:productId' element={<Product/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='place-order' element={<PlaceOrder/>}/>
      </Routes>



    </div>

  )
}

export default App
