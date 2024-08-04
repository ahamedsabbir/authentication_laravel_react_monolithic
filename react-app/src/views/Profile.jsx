import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../reducers/reduxAuth';
import axios from 'axios';

function Profile() {
  const authState = useSelector(state => state.authentication)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleFileChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const response = await axios.post(`/profile/image/${authState.id}`, formData,
        {
          baseURL: "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api",
          headers: {
            'Authorization': `Bearer ${authState.token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      const result = response.data;
      console.log(result.user);
      dispatch(update({ image: result.user.image, id: result.user.id, user: result.user.name, token: authState.token, role: 'user', auth: true }));
    } catch (error) {
      console.error('Error during image upload:', error.response?.data || error.message);
    }
    setLoading(false);
  }

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label htmlFor="imageInput" className="form-label">
          <img src={'http://localhost/authentication_laravel_react_monolithic/laravel-app/public/storage/' + authState.image} alt={authState.user} width="100" height="100" />
          <br />
          {loading ? 'Uploading...' : 'Upload Image'}
        </label>
        <input type="file" className="form-control d-none" id="imageInput" onChange={handleFileChange} accept="image/*" />
      </div>
    </div>
  )
}

export default Profile