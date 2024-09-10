/* import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WomenWestern from './pages/WomenWestern'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './components/Footer'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeKitchen from './pages/HomeKitchen'
import BeautyHealth from './pages/BeautyHealth'
import JewelleryAccessories from './pages/JewelleryAccessories'
import BagsFootwear from './pages/BagsFootwear'
import Electronics from './pages/Electronics'
import Router from './router/Router */

import Router from "./router/Router"


const App = () => {
  return (
    <Router/>

   
  )
}

export default App






 {/* <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/womenwestern' element={<WomenWestern />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids/>} />


        <Route path='/homeandkitchen' element={<HomeKitchen/>} />
        <Route path='/beautyandhealth' element={<BeautyHealth />} />
        <Route path='/jewelleryandaccessories' element={<JewelleryAccessories />} />
        <Route path='/bagsandfootwear' element={<BagsFootwear/>} />
        <Route path='/electronics' element={<Electronics/>} /> 


        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div> */}