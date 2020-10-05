import React from 'react';
import image from "../../images/extraVolunteer.png"

const EventCard = (props) => {
console.log(props)
    const {_id,event,date} = props.event
    

    return (
      
            <div style={{background:"white",display:"flex",justifyContent:"space-between",borderRadius:"5px",padding:"15px"}} className="col-md-6">
                
                <div style={{display:"flex"}}>
                    <img style={{width:"200px",height:"150px"}} src={image} alt=""></img>
                    <div style={{padding:"10px"}}>
                        <h6>{event}</h6>
                        <h6>{date}</h6>
                    </div>
                </div>
                
                <div style={{alignSelf:"flex-end"}} >
                    <button onClick={()=>props.handleDelete(_id)} className="btn btn-danger">cancel</button>
                </div>
                
            </div>
      
        
    );
};

export default EventCard;