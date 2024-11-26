import React from "react"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Collections from "./pages/Collections"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Placeorder from "./pages/Placeorder"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"

function App() {
  return (
<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-100">
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/collections" element={<Collections/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/place-order" element={<Placeorder/>}/>
    <Route path="/product/:productId" element={<Product/>}/>


  </Routes>
  <Home/>

</div>
  )
}

export default App
