import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function AddTask(){
    var {id} = useParams()
    const[taskname,setTaskname]=useState('')

    const[taskdescription,setTaskDescription]=useState('')
   
   
    useEffect(()=>{
        fetch("http://localhost:5140/addtask/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setTaskname(data[0].taskname)
          
            setTaskDescription(data[0].taskdescription)
           
           
        })
    },[])
    function addtask(event){
        event.preventDefault()
        var taskname=document.getElementById("taskname").value
       
        var taskdescription=document.getElementById("taskdescription").value
       
     
        
        var key={
           taskname:taskname,
         
           taskdescription:taskdescription,
           
         
        }
        if(taskname==""){
            alert("Enter the task Name")
        }
       
        else if(taskdescription==""){
            alert("Enter the Description")

        }
       
       
        else{
            axios.post("http://localhost:5140/addtask/",key)
            .then((upddet)=>{
                if(upddet.data.status==='error'){
                    alert(upddet)
                    alert("task not added")
                    console.log("not_added")
                
                }
                else if (upddet.data.status==='success'){
                    alert("task added Successfully!")
                    console.log("success")
                    
                }

            })
        }
    }
    return (
        <>
             <div className="todomain container-fluid ">
        <div className="container text-center title">
            <h3>TO DO LIST</h3>
           
           
            </div>
            <div className="addtask container text-center w-75 p-5 ">
                    <form  onSubmit={addtask}>  
                        <label>Enter the Task Name</label>
                        <input type="text" placeholder="taskname"  id="taskname"  /><br/>
                        
                        <label>Enter the Description </label>
                        <textarea id="taskdescription" name="description" rows="7" cols="70"></textarea><br/>
                       
                    
                       <input type="submit" className="bg-secondary p-2" value="ADD TASK
                       "/>
                                            </form>
                                       
                                            </div>                    

                    
                  
              

            </div>
        </>
    );
}
