import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../reducers/reduxAuth';
import axios from 'axios';
function Register() {
  const [postData, setPostData] = useState({name: '', email: '', password: '', confirmPassword: '' });
  const dispatch = useDispatch();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };
  const regiterHandel = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
      const response = await axios.post('/register', postData);
      const result = response.data;
      console.log(result.token);
      dispatch(register({ id: result.user.id, user: result.user.name, token: result.token, role: 'user', auth: true }));
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
        <h1>Register</h1>
        <form onSubmit={regiterHandel}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName" name='name' onChange={handleInputChange} value={postData.name}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={handleInputChange} value={postData.email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleInputChange} value={postData.password}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Conform Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" name='confirmPassword' onChange={handleInputChange} value={postData.confirmPassword}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register