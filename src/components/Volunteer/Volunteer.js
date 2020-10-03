import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import './volunteer.css'

const Volunteer = () => {

    const {event} = useParams()

    const [formdata,setFormData] = useState({});
    const history = useHistory()

    const handleSubmit = (e) =>{
        // history.push("/events")
        e.preventDefault();
        
    }

    return (
        <div>
            <img className="logo" src={logo} alt=""/>
            <div className="register-box">
                <div>
                    <h5>Register a volunteer </h5>
                    <form action="http://localhost:5000/eventRegistration" method="POST">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputEmail1" required placeholder="Full Name" name="name" ></input>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" required id="exampleInputEmail1" placeholder="Email" name="email" ></input>
                        </div>
                        <div class="form-group">
                            <input type="Date" class="form-control" required id="exampleInputEmail1" placeholder="Date" name="date" ></input>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" required id="exampleInputEmail1" placeholder="Description" name="description" ></input>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" required id="exampleInputEmail1" value={event} placeholder="Full Name" name="event"></input>
                        </div>
                        <input  className="register-btn" type="submit" value="Register"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;