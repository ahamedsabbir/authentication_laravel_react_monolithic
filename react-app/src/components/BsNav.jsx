import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/reduxAuth';
import { formatCart } from '../reducers/reduxCart';

function BsNav() {
  const [categories, setCategories] = useState([]);
  const authState = useSelector(state => state.authentication)
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const logoutHandel = (e) => {
    e.preventDefault();
    dispatch(logout());
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  }
  const getCategories = async () => {
    try {
      axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
      const response = await axios.get('/categories');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li className="nav-item" key={category.id}>
                      <NavLink className="nav-link" aria-current="page" to={"/products/category/" + category.id}>{category.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink className="nav-link" aria-current="page" to="/counter">Counter</NavLink>
              </li>
            </ul>
            <ul className='d-flex navbar-nav'>

              {!authState.auth && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    New
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/register">Register</NavLink></li>
                  </ul>
                </li>
              )}

              {authState.auth == true && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {authState.user}
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/checkout">Checkout</NavLink></li>
                    <li><button className="dropdown-item" onClick={() => dispatch(formatCart())}>Cart Clear</button></li>
                    <li><a className="dropdown-item" onClick={logoutHandel}>Logout</a></li>
                  </ul>
                </li>
              )}

              <li>
                <NavLink type="button" className="btn btn-primary" to={"/cart"}>
                  <i className="fa-solid fa-cart-shopping"></i> <span className="badge text-bg-secondary">{cartState.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BsNav