import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import './volunteer.css'

const Volunteer = () => {

    const {event} = useParams()
    const history = useHistory()

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:5000/eventRegistration",{
            method : "POST",
            headers:{'Content-type': 'application/json'},
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                history.replace("/events")
            }
        })
    };

    return (
        <div>
            <img className="logo" src={logo} alt=""/>
            <div className="register-box">
                <div>
                    <h5>Register a volunteer </h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group">
                            <input name="name" class="form-control"  ref={register({ required: true })} placeholder="Your Name" />
                            {errors.name && <span className="error">Name is required</span>}
                        </div>
                        <div class="form-group">
                            <input name="email" class="form-control"  ref={register({ required: true })} placeholder="Email" />
                            {errors.name && <span className="error">Email is required</span>}
                        </div>
                        <div class="form-group">
                            <input name="date" type="date" class="form-control"  ref={register({ required: true })} placeholder="Date" />
                            {errors.name && <span className="error">Date is required</span>}
                        </div>
                        <div class="form-group">
                            <input name="description" class="form-control"  ref={register({ required: true })} placeholder="Description" />
                            {errors.name && <span className="error">Description is required</span>}
                        </div>
                        <div class="form-group">
                            <input name="event" class="form-control"  ref={register({ required: true })} defaultValue={event} placeholder="Email" />
                            {errors.name && <span className="error">Event is required</span>}
                        </div>
                        <input  className="register-btn" type="submit" value="Register"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;