import React from 'react';
import delButton from "../../logos/trash-2 9.png"

const VolunteerList = (props) => {

    const {_id,name,email,date,event} = props.event

    return (
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#FFFFF",borderRadius:"5px",padding:"5px"}}>
                                
            <div>
                <p style={{fontWeight:"600"}}>{name}</p>
            </div>
            <div>
                <p style={{fontWeight:"600"}}>{email}</p>
            </div>
            <div>
                <p style={{fontWeight:"600"}}>{date}</p>
            </div>
            <div>
                <p style={{fontWeight:"600"}}>{event}</p>
            </div>
            <div>
                <button onClick={()=>props.handleDelete(_id)} className="btn btn-danger"><img style={{width:"15px",height:"17px"}} src={delButton} alt=""/></button>
            </div>

        </div>
    );
};

export default VolunteerList;