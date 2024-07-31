import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OnlineProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='container'>
      <div className='row'>
        {products.map(product => (
          <div className="col-md-4 mt-4" key={product.id}>
            <div className='card h-100'>
              <img src={product.thumbnail || '/no-image.png'} className="card-img-top" alt={product.title}/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">${product.price.toFixed(2)}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.title}</h6>
                <p className="card-text flex-grow-1">{product.description}</p>
                <Link to={`/online/product/single/${product.id}`} className="btn btn-primary mt-auto"> View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineProducts;