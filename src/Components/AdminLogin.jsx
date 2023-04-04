import React from "react";
import "../Styles/userlogin.css";
import { useRef } from "react";
import {Navigate,useNavigate} from 'react-router-dom';


const AdminLogin = () => {
     let navigate=useNavigate()    
     let email=useRef(null);
    let password=useRef(null);
    let adminlogin=()=>{
    if (email==="manu@gmail.com" && "password"===12345){
        navigate('/admin')
    }else{
        alert("inavalid cedentials")
    }
    }
    return ( 
        <div className="AdminLogin">
           
            <h1>Admin Login</h1>
           
                <form action="" onsubmit={adminlogin}>
                <div className="login">
                    <input ref={email} type="email"placeholder="Enter login id" minLength={10} maxLength={20} required className="admin"/>
                    </div><br />
                    <div className="password">
                    <input ref={password} type="password" placeholder=" enter a Password"minLength={4} maxLength={8} required className="admin" /><br />
                    </div>
                   <div className="sing">
                    <button>Sign in</button>
                    </div>
                </form>
             </div>
     );
}
 
export default AdminLogin;