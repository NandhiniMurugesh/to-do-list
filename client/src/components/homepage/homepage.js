import React from "react";
import { Menutodo } from "../menu/menu";

export function Home(){
    return(
       
        <>
        <div className="todomain container-fluid ">
        <div className="container text-center title">
            <h3>TO DO LIST</h3>
            
            <Menutodo/>
            </div>
            <div className="container text-center homeContent">
               Hi Welcome, Add your task here and complete the work as effectively.
            </div>

        </div>
        </>
    
       
    );
}