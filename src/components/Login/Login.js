import React, { useContext, useEffect, useState } from 'react';
import * as firebase from "firebase/app"
import './Login.css';
import logo from "../../logos/Group 1329.png"
import googleimg from "../../logos/google.png"
import { userContex } from '../../App';
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseconfig';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {

    const [user,setUser] = useState([]);
    const [logedInUser,setLogedInUser] = useContext(userContex);
    let provider = new firebase.auth.GoogleAuthProvider()

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    useEffect(()=>{

        fetch("http://localhost:5000/getuser")
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })

    },[])

    const handleLogInWithGoogle = () =>{

        firebase.auth().signInWithPopup(provider)
        .then(data => {

            const {email,displayName} = data.user;
            const userEmailInDatabase = user.find(user => user.email === email);

            if(userEmailInDatabase){
                const userInfo = {email: email , name : displayName}
                setLogedInUser(userInfo)
                history.replace(from)
            }

            else{

                const userInfo = {email:email,name:displayName}
                fetch('http://localhost:5000/user',{
                    method : "POST",
                    headers:{'Content-type' : 'application/json'},
                    body : JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data =>{
                   if(data){
                        setLogedInUser(userInfo)
                        history.replace(from)
                   }
                   else{
                       alert("an error occured..plz try again")
                   }
                })
            }
        })
        
    }
    return (
        <div className="login-page">
            <img className="logo" src={logo} alt=""></img>
            <div className="login-box">
                <h3>Login with</h3>
                <button className="sign-in-btn" onClick={handleLogInWithGoogle}><img className="btn-img" src={googleimg} alt=""/> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;