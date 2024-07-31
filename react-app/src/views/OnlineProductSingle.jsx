import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function OnlineProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }

  if (!product) return <div>Loading...</div>

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img src={product.thumbnail || '/no image.png'} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">${product.price}</h5>
              <h6 className="card-subtitle mb-2">{product.title}</h6>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineProductSingle