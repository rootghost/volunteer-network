import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import Card from './Card';

const Home = () => {

    const [activity,setActivity] = useState([])

    useEffect(()=>{

        fetch("http://localhost:5000/activity")
        .then(res => res.json())
        .then(data =>setActivity(data))

    },[])

    return (
    
        <div>
            {/* search section */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <a className="navbar-brand" href="/home"><img style={{width : "195px",height:"50px"}} alt="" src={logo}></img></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"           aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ml-auto">

                        <Link className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/features">Donation</Link>
                        <Link className="nav-link" to="/events">Events</Link>
                        <Link className="nav-link" to="/pricing">Blog</Link>
                        <button className="btn btn-primary ml-2">Register</button>
                        <button className="btn btn-dark ml-2"><Link style={{textDecoration:"none"}} to="/admin">Admin</Link></button>
                   
                    </div>
                </div>
                </nav>      
            </div>

            {/* search section */}

            <div className="mt-5">
                <h2 className="text-center">I GROW UP BY HELPING PEOPLE IN NEED</h2>
                <form className="form-inline my-lg-0 ">
                    <div className="mt-3 d-flex mx-auto">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-primary  my-sm-0" type="submit">Search</button>
                    </div>
                </form>
            </div>

            {/* volunteering activity content */}
            <div className="mt-3 row">
                {
                    activity.map( activity => <Card key={activity._id} activity={activity}></Card>)
                }
            </div>



        </div>

    );
};

export default Home;