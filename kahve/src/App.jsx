import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Projects from "./pages/Projects"
import Store from "./pages/Store"
import Orders from "./pages/Orders"
import Services from "./pages/Services"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App