import React  from "react";
import { Link } from "react-router-dom";


function FloorPlan(){

    return (

<div>
        <style>

{
    `
    
    
    .profile-container {
        padding: 24px;
        margin: 24px;


    }

    a:hover {
        color: #087474;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto 0 auto;
        padding-bottom: 5rem;

    }

    .box {
        display: inline-block;
        margin: 20px;
    }

    `
}


        </style>
    <div className="profile-container">

    <div style={{display: "flex",flexWrap: "wrap",flexDirection:"row"}}>
        <div className="bg-base-200 shadow-xl" style={{flex:"1", marginLeft:"0px"}}>

            <h1 style={{padding:"96px",fontSize:"40px",textAlign:"center"}} className="text-3xl font-bold white">
                Floor Plans</h1>
            <div className="container">

                <div className="box">

                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Link className="service-hover" to="../studio"><img src={require("../static/images/studio.jpg")}
                                    alt="Floor plan"/></Link>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Studio</h2>
                        </div>
                    </div>


                </div>

                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Link className="service-hover" to="../townhouse"><img src={require("../static/images/townhouse.jpg")}
                                    alt="Townhouse"/></Link>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Townhouse</h2>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Link className="service-hover" to="../cabins"><img src={require("../static/images/cabin.jpg")}
                                    alt=""/></Link>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Cabins</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>

    )



}

export default FloorPlan;