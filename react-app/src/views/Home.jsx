import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../reducers/reduxAuth';

function Home() {
  const authState = useSelector(state => state.authentication.user)
  const dispatch = useDispatch();
  const loginHandel = () => {
    dispatch(login({user: "kamal", role: "admin", auth: true, token: "12345"}));
  }
  const logoutHandel = () => {
    dispatch(logout());
  }
  useEffect(() => {
    console.log(authState);
  },[]);
  return (
    <>
      <h1>name: {authState}</h1>
      <button onClick={loginHandel}>Login</button>
      <button onClick={logoutHandel}>Logout</button>
    </>
  )
}

export default Home