import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';
import Singleproduct from './components/singleproduct';
import { useState } from 'react';


function App() {
  let[cart,setCart]=useState([])
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
     <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<Cart cart={cart} setCart={setCart} />} path='/cart' />
    <Route element={<Singleproduct cart={cart} setCart={setCart}/>} path='/:id'/>
    </Routes>
    </BrowserRouter>      
    </div>
  );
}

export default App;