import React from "react";
import { Link } from "react-router-dom";

function SignLease(){


    return (
        <div>
            <style>
        {
            `
            .lease-container {
                display: flex;
                align-items: center;
                align-self: center;
                padding-top: 2px;
                flex-direction:column;           
                width:100%;     
                min-width:100vw;
                margin-bottom:25px;
            }
            `
        }
    </style>



        <div className="lease-container">
            
            
            <iframe src={require("../../static/docs/lease.pdf")} width="100%" height="500px">
            </iframe>
            <br />
            <Link className="btn btn-primary" style={{alignSelf:"center"}} to="../resident/profile">Sign</Link>
            

        </div>
        </div>


    )
}

export default SignLease;
