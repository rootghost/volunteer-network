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

                       <div style={{backgroundColor:"white",padding:"10px",borderRadius:"10px"}}>

                            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",background:"#E5E5E5",borderRadius:"5px"}}>

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
                                <>
                                    <VolunteerList></VolunteerList>
                                <VolunteerList></VolunteerList>
                                </>
                            }
                       </div>
                </div>
            </div>