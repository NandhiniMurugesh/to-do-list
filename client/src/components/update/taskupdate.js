import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Taskupdate(){
    var {id} = useParams()
    const[taskname,setTaskname]=useState('')

    const[taskdescription,setTaskDescription]=useState('')
    
   
    useEffect(()=>{
        fetch("http://localhost:5140/singletask/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setTaskname(data[0].taskname)
            
            setTaskDescription(data[0].taskdescription)
           
            
        })
    },[])
    function taskupdate(event){
        event.preventDefault()
        var taskname=document.getElementById("taskname").value
     
       
    
        var taskdescription=document.getElementById("taskdescription").value
      
       

        var key={
            taskname:taskname,
           
            taskdescription:taskdescription,
           
         
        }
        if(taskname==""){
            alert("Enter the Task Name")
        }
       
        else if(taskdescription==""){
            alert("Enter the Description")

        }
        
        
       
        else{
            axios.put("http://localhost:5140/taskupdate/"+id,key)
            .then((upddet)=>{
                if(upddet.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                    console.log(key)
                
                }
                else if (upddet.data.status==='success'){
                    alert("data updated Successfully!")
                    console.log("success")
                   
                }

            })
        }
    }
    return (
        <>
             <div className="todomain container-fluid ">
        <div className="container text-center title">
            <h3>To Do List</h3>
            
            </div>
            <div className=" container text-center w-75 p-5 ">
                    <form  onSubmit={taskupdate}>  
                     
                        <input type="text" placeholder="tname" onChange={(upd)=>setTaskname(upd.target.value)}  id="taskname" value={taskname} /><br/>
                      
                     
                    
                        <textarea onChange={(upd)=>setTaskDescription(upd.target.value)} id="taskdescription" name="taskdescription" rows="7" cols="70" value={taskdescription}></textarea><br/>
                  
                        
                       
                    
                       <input type="submit" className="bg-secondary p-2" value="Update"
                       />
                                            </form>
                                       
                                            </div>                    

                    
                  
              

            </div>
        </>
    );
}