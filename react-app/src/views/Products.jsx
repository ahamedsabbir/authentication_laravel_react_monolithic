import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart } from '../reducers/reduxCart';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getProducts = async () => {
    setLoading(true);
    try {
      axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
      const response = await axios.get('/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  }
  const cartHandeler = (e, product) => {
    //e.preventDefault();
    dispatch(addCart(product));
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Products</h1>
        {loading && <div>Loading...</div>}
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mt-4" key={product.id}>
              <div className="card">
                <img src={'/assets/img/no-image.jpg'} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">${product.price}</h5>
                  <h6 className="card-subtitle mb-2">{product.name}</h6>
                  <p>{product.category.name}</p>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <Link to={'/product/'+product.id} className="btn btn-primary"><i className="fa-solid fa-eye"></i></Link>
                  &nbsp;
                  <button className="btn btn-primary" onClick={(e) => cartHandeler(e, product)}><i className="fa-solid fa-cart-plus"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products