import axios from "axios";
import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";


export function Taskdetail() {

    const [tasklist, setTaskdetail] = useState([]);
   
    useEffect(() => {
        fetch("http://localhost:5140/taskdetail")
            .then(storedata => storedata.json())
            .then(tasklistdata => setTaskdetail(tasklistdata))

    }
    )
    const del = (id) => {
        var key = { id: id }
        axios.post("http://localhost:5140/delete/", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data deleted")
                }
            })
    }

    return (
        <>

            <div className="todomain container-fluid ">
                <h1>To- do List</h1>
                    <div className="row">

                {
                     
                    tasklist.map((value, index) =>
                        <>
                       <div className="d-flex  col-lg-4">
                           
                                    <div class="card-body">
                                        <h5 class="card-title">{value.taskname}</h5>
                                        
                                        <p class="card-text">{value.taskdescription}</p>
                                        <button className="btn btn-danger" onClick={() => { del(value.id) }}>Delete</button>
                                        <Link to={`/taskupdate/${value.id}`} ><button className=" btn btn-primary view">Update</button></Link>
                                    </div>
                            </div>
                            


                          
                        </>
                       
                    )
                }
              
              </div>
            </div>

        </>

    );
}

