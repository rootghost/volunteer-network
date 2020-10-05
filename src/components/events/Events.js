import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContex } from '../../App';
import logo from '../../logos/Group 1329.png'
import EventCard from './EventCard';


const Events = () => {
    const [logedInUser,setLogedInUser] = useContext(userContex);
    const [event,setEvent] = useState([])
    const [count,setCount] = useState(0)
    useEffect(()=>{
        fetch(`https://fathomless-ridge-12223.herokuapp.com/event?email=${logedInUser.email}`)
        .then(res =>  res.json())
        .then(data =>{
            setEvent(data)
        })
    },[count])

    const  handleDelete = (id) =>{
        fetch(`https://fathomless-ridge-12223.herokuapp.com/delete/${id}`,{
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

                <Link className="navbar-brand" to="/home"><img style={{width : "195px",height:"50px"}}alt="" src={logo}></img></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"           aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ml-auto">

                        <Link className="nav-link active" to="/home">Home <span class="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/donation">Donation</Link>
                        <Link className="nav-link" to="/events">Events</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <span style={{fontWeight:"bold", marginTop:"7px"}}>{logedInUser.name}</span>
                
                    </div>
                </div>
            </nav>

            <div style={{backgroundColor:"#F8F9FA"}} className="row">
                {
                    event.map(event =><EventCard key={event._id} handleDelete={handleDelete} event={event}></EventCard>)
                }
            </div>     
        </div>
    );
};

export default Events;