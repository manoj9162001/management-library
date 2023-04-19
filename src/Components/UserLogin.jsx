import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import "../styles/userLogin.css"
// import larrow from "../assets/arrow.png"
// import userimg from "../assets/userimg.png"
const UserLogin = () => {
  let id = useRef(null);
  let password = useRef(null)
  let navigate = useNavigate()
  let submit = (e) => {
    // e.preventDefault();
    if (id.current.value == 'admin@gmail.com' && password.current.value == 12345) {
      navigate("/userportal");
    } else {
      alert("Invalid credentials");
    }
  }
  return (
    <div className='UserLogin'>
      <h1>User Login</h1>
      <form action="" onSubmit={submit}>
        <div className="login">
          <input ref={id} type="text" placeholder='enter login id' />
        </div>
        <div className="password">
          <input ref={password} type="text" placeholder='Enter Your Password' />
        </div>
        <div className="signIn">
          <button>Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default UserLogin