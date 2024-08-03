import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
      const response = await axios.get('/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
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
                  <Link to={'/product/'+product.id} className="btn btn-primary">View Details</Link>
                  &nbsp;
                  <button className="btn btn-primary">Add to Cart</button>
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