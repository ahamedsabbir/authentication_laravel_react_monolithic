import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/reduxAuth';
import axios from 'axios';
function Register() {
  const [postData, setPostData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };
  const regiterHandel = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
      const response = await axios.post('/login', postData);
      const result = response.data;
      console.log(result.token);
      dispatch(login({ id: result.user.id, user: result.user.name, token: result.token, role: 'user', auth: true }));
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }
  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <form onSubmit={regiterHandel}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={handleInputChange} value={postData.email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleInputChange} value={postData.password}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register