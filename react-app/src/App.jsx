import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link, redirect, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import BsNav from './components/BsNav'
import BsFooter from './components/BsFooter'
import BsLoading from './components/BsLoading';
import Home from './views/Home'
import Counter from './views/CounterRedux'
import NotFound from './views/NotFound'
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Products from './views/Products';
import Product from './views/Product';
import ProductsCategory from './views/ProductsCategory';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    //toast.success('Well done!');
  }, []);

  return (
    <>
      <BrowserRouter>
        <BsNav></BsNav>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/counter' Component={Counter} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/profile' Component={Profile} />
          <Route path='/products' Component={Products} />
          <Route path='/products/category/:cat' Component={ProductsCategory} />
          <Route path='/product/:id' Component={Product} />
          <Route path='/cart' Component={Cart} />
          <Route path='/checkout' Component={Checkout} />
          <Route path='*' Component={NotFound} />
        </Routes>
        <BsFooter></BsFooter>
      </BrowserRouter>
      {loading && <BsLoading></BsLoading>}
      <ToastContainer />
    </>
  )
}

export default App
