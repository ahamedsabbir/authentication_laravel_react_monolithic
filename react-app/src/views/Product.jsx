import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Product() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const getProduct = async () => {
        try {
            axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
            const response = await axios.get('/product/' + id);
            console.log(response.data.product)
            setProduct(response.data.product);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <div className="card">
                            <img src={'/assets/img/no-image.jpg'} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">${product.price}</h5>
                                <h6 className="card-subtitle mb-2">{product.name}</h6>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product