import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-3">Checkout</h2>
                <form>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <h4>Personal Information</h4>
                            <div className="mb-3">
                                <label for="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" required />
                            </div>
                            <div className="mb-3">
                                <label for="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h4>Shipping Address</h4>
                            <div className="mb-3">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" required />
                            </div>
                            <div className="mb-3">
                                <label for="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" required />
                            </div>
                            <div className="mb-3">
                                <label for="zip" className="form-label">ZIP Code</label>
                                <input type="text" className="form-control" id="zip" required />
                            </div>
                        </div>

                        <div className="col-12">
                            <h4>Payment Details</h4>
                            <div className="mb-3">
                                <label for="cardName" className="form-label">Name on Card</label>
                                <input type="text" className="form-control" id="cardName" required />
                            </div>
                            <div className="mb-3">
                                <label for="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" required />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="expiration" placeholder="MM/YY" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cvv" required />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Place Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home