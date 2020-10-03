import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({activity}) => {
    const {event,picture} = activity
    return (
           
           <div className=" mt-3 col-md-3" style={{borderRadius:"10px"}}>
                <div>
                    <img style={{height:"240px",width:"100%"}} src={require(`../../images/${picture}`)} alt=""/> 
                </div>
                <Link style={{textDecoration:"none"}} to={`/volunteer/${event}`}>
                    <div style={{height:"80px",backgroundColor:"#3F90FC",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"10px"}}>
                        <p style={{color:"white",textAlign:"center",fontWeight:"600"}}>{event}</p>
                    </div>
                </Link>
           </div>
            
    );
};

export default Card;