import React, { useContext, useEffect, useState } from 'react';
import { userContex } from '../../App';
import logo from '../../logos/Group 1329.png'
import EventCard from './EventCard';


const Events = () => {
    const [logedInUser,setLogedInUser] = useContext(userContex);
    const [event,setEvent] = useState([])
    const [count,setCount] = useState(0)
    useEffect(()=>{
        fetch(`http://localhost:5000/event?email=${logedInUser.email}`)
        .then(res =>  res.json())
        .then(data =>{
            setEvent(data)
        })
    },[count])

    const  handleDelete = (id) =>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                setCount(count+1)
            }
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <a className="navbar-brand" href="/home"><img style={{width : "195px",height:"50px"}} src={logo}></img></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"           aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ml-auto">

                        <a className="nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-link" href="/features">Donation</a>
                        <a className="nav-link" href="/pricing">Events</a>
                        <a className="nav-link" href="/pricing">Blog</a>
                        <span style={{fontWeight:"bold", marginTop:"7px"}}>{logedInUser.name}</span>
                
                    </div>
                </div>
            </nav>

            <div style={{backgroundColor:"#F8F9FA"}} className="row">
                {
                    event.map(event =><EventCard handleDelete={handleDelete} event={event}></EventCard>)
                }
            </div>     
        </div>
    );
};

export default Events;