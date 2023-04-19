import React from 'react'
import { useRef } from 'react'
import "../styles/addUser.css"

const AddUser = () => {
  let username=useRef(null)
  let password=useRef(null)
  let email = useRef(null)

  let submit = (r) => {
    r.preventDefault() //prevent page from reloading
    let data = {
      username: username.current.value,
      password:password.current.value,
      email:email.current.value
      
    }
    fetch('http://localhost:4000/user',{
      method:'POST',
      headers:{"Content-Type":'application/json' },
      body:JSON.stringify(data)
    })
    alert('user added added...')
  }

  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
  <form act onSubmit={submit} >
  <div className="log">
    <h1 style={{color:"white"}}>Create User...</h1>
  <div className='manu' >
    <input ref={email} type="text" placeholder='Add Email' /> <br />
    <input type="text" ref={username} placeholder='Enter  User name'/> <br />
    <input ref={password} type="password" placeholder='add pin...' />
  </div>
  <div className="btn">
    <button style={{color:"white"}}>Create</button>
  </div>
  </div>
  </form>
  
</div>
  )
}

export default AddUser