import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/adminNavBar.css'
import user from '../assets/user.png'

const UserNavBar = () => {
  return (
    <div className='AdminNavbar'>
    <div className="uptext">
    
       <br />
       <img width="48" height="50" style={{marginLeft:"10px"}} src={user} alt="" /> <br/> 
       admin@gmail.com
    </div><br /> <br />
    <div className="lis">
     <Link to="/userportal/">Home</Link> <br /> <br />
    
     <Link to="/userportal/book-list">BookList</Link><br /> <br />
    
    </div>
    <div className="logout">
        <Link to="/">Logout</Link>
    </div>
</div>
  )
}

export default UserNavBar