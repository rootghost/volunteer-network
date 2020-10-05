import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import userlogo from "../../logos/users-alt 1.png"
import addLogo from "../../logos/plus 1.png"
import './Admin.css'
import VolunteerList from './VolunteerList';
import { useForm } from 'react-hook-form';

const Admin = () => {

    const [option,setOption] = useState("volunteer")
    const [event,setEvent] = useState([]);
    const [count,setCount] = useState(0)
    const { register, handleSubmit, watch, errors } = useForm();

    const handleOption =(option) =>{
        setOption(option)
    }

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

    const onSubmit = data => {
        const eventInfo = {event: data.event,picture:"clothSwap.png"}
        fetch("http://localhost:5000/AddActivity",{
            method:"POST",
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(eventInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("Event Added Successfully")
            }
        })
    };


    useEffect(()=>{
        fetch("http://localhost:5000/allevent")
        .then(res => res.json())
        .then(data =>setEvent(data))
    },[count])
    

    return (
        <div>

           <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link className="navbar-brand" to="/home"><img style={{width: "137.81px",height: "36.62px"}} src={logo} alt=""/></Link>
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span style={{fontWeight:"700",marginLeft:"60px"}} >{option === "volunteer"?"Volunteer register list":"Add Event"}</span>
                    </div>
                </div>

            </nav>
            
                    
            <div style={{display:"flex",padding:"10px"}}>

                <div style={{width:"20%"}}>

                    <p className={option === "volunteer"?"addColor": ""} style={{cursor:"pointer",fontWeight:"700"}} onClick={()=>handleOption("volunteer")}><img style={{height:"17px",width:"17px",marginRight:"5px"}} src={userlogo} alt=""></img>Volunteer Register List</p>

                    <p className={option === "addEvent"?"addColor": ""} style={{cursor:"pointer",fontWeight:"700"}} onClick={()=>handleOption("addEvent")}><img src={addLogo} style={{height:"17px",width:"17px",marginRight:"5px"}} alt=""></img>Add Event</p>

                </div>

                <div style={{width:"80%",background:"#E5E5E5",padding:"20px",}}>

                    {
                        option === "volunteer" &&
                        <div style={{backgroundColor:"white",padding:"10px",borderRadius:"10px"}}>

                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#E5E5E5",borderRadius:"5px",padding:"9px"}}>

                                <div>
                                    <p style={{fontWeight:"600"}}>Name</p>
                                </div>
                                <div>
                                    <p style={{fontWeight:"600"}}>
                                        Email
                                    </p>
                                </div>
                                <div>
                                    <p style={{fontWeight:"600"}}>Registratin Date</p>
                                </div>
                                <div>
                                    <p style={{fontWeight:"600"}}>Volunter List</p>
                                </div>
                                <div>
                                    <p style={{fontWeight:"600"}}>
                                        Action
                                    </p>
                                </div>

                            </div>
                            {
                                event.map(ev => <VolunteerList key={ev._id} handleDelete={handleDelete} event={ev}></VolunteerList>)
                            }
                       </div>
                    }

                    {
                        option === "addEvent" &&
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <input name="event" class="form-control"  ref={register({ required: true })} placeholder="Event Title" />
                                    {errors.name && <span className="error">event name is required</span>}
                                </div>
                                <div class="form-group">
                                    <input name="date" type="date" class="form-control"  ref={register({ required: true })} placeholder="Event date" />
                                    {errors.name && <span className="error">Date is required</span>}
                                </div>
                                <div class="form-group">
                                    <input name="description"  class="form-control"  ref={register({ required: true })} placeholder="Description" />
                                    {errors.name && <span className="error">Description is required</span>}
                                </div>
                                <button className="btn btn-primary" type="submit">Sumbit</button>
                            </form>
                        </div>
                    }
                </div>
            </div>
          
        </div>
    );
};

export default Admin;