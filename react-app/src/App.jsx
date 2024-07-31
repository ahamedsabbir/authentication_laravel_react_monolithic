import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link, redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import BsNav from './components/BsNav'
import BsFooter from './components/BsFooter'
import Home from './views/Home'
import Counter from './views/CounterRedux'
import NotFound from './views/NotFound'
function App() {
  useEffect(() => {
    //toast.success('Well done!');
  }, []);

  return (
    <>
      <BrowserRouter>
        <BsNav></BsNav>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/counter' Component={Counter} />
          <Route path='*' Component={NotFound} />
        </Routes>
        <BsFooter></BsFooter>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
