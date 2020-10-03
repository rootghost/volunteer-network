import React, { useContext } from 'react';
import './Login.css';
import logo from "../../logos/Group 1329.png"
import googleimg from "../../logos/google.png"
import { userContex } from '../../App';

const Login = () => {

    const [logedInUser,setLogedInUser] = useContext(userContex);
    

    const handleLogIn = () =>{
        console.log("clicked")
    }
    return (
        <div className="login-page">
            <img className="logo" src={logo} alt=""></img>
            <div className="login-box">
                <h3>Login with</h3>
                <button className="sign-in-btn" onClick={handleLogIn}><img className="btn-img" src={googleimg} alt=""/> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;