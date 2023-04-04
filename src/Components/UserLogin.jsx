import React from "react";
import "../Styles/userlogin.css";
import { Link } from "react-router-dom";
const UserLogin = () => {
    return ( 
        <div className="UserLogin">
            
            <div className="form">
                <form action="">
                <h1>User Login</h1>
                    <input type="email" placeholder="Enter Your Email" required minLength={8} maxLength={10} className="box"/><br/>
                    <input type="password" placeholder="Enter password"  maxLength={8} minLength={6} required className="box"/><br />
                    <button id="submit">Sign in</button><br />
                    <Link className="forget" >Forget Password ?</Link>
                </form>
            </div>
        </div>
     );
}
 
export default UserLogin;