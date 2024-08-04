import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatCart, removeCart } from '../reducers/reduxCart';
import { NavLink } from 'react-router-dom';

function Cart() {
    const [price, setPrice] = useState(0)
    const cartState = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        setPrice(cartState.reduce((acc, item) => acc + parseInt(item.price), 0))
    })
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Shopping Cart</h2>
                <div className="row">
                    <div className="col-md-8">
                        {cartState.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                                <img src="/assets/img/no-image.jpg" className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                            </div>
                                            <div className="ms-3">
                                                <h5>{item.name}</h5>
                                                <p className="small mb-0">${item.description}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: '50px' }}>
                                                <h5 className="fw-normal mb-0">2</h5>
                                            </div>
                                            <div style={{ width: '80px' }}>
                                                <h5 className="text-muted mb-0">${item.price}</h5>
                                            </div>
                                            <button onClick={() => dispatch(removeCart(item.id))} className="btn btn-link px-2" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>{price}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>{price * 0.1}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                        </div>
                                        <span><strong>${price + price * 0.1}</strong></span>
                                    </li>
                                </ul>
                                <NavLink type="button" className="btn btn-primary btn-lg btn-block" to={"/checkout"}>Checkout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart