import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';

function Dashboard() {
  const authState = useSelector(state => state.authentication)
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    try {
      axios.defaults.baseURL = "http://localhost/authentication_laravel_react_monolithic/laravel-app/public/api"
      axios.defaults.headers.common['Authorization'] = `Bearer ${authState.token}`;
      const response = await axios.get('/profile/' + authState.id);
      const result = response.data;
      //console.log(result);
      setUserData(result.user);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }
  useEffect(() => {
    getUserData()
  },[])
  return (
    <>
    <h1>name: {userData.name}</h1>
    <h1>email: {userData.email}</h1>
    <p>token: {authState.token}</p>
    </>
  )
}

export default Dashboard