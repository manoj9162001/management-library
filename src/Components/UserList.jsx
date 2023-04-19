import React from 'react'
import '../styles/userlist.css'
import { useState,useEffect } from 'react'
const UserList = () => {
  const [users,setUser]=useState([])
  useEffect(()=>{
    let fetchdata= async()=>{
      let response=await fetch("http://localhost:4000/user")
      let data=await response.json()
      setUser(data)
      console.log(users);
    }
fetchdata()
  })
  return (
    <div  className='usercontainer'>
    {users.map((u)=><div className="userss">
        <div className="name">{u.username}</div>
        <div className="email">{u.email}</div>
      </div>)
    }
  </div>
  )
}

export default UserList