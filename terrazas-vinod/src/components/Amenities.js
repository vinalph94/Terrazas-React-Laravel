import React  from "react";
import { Link } from "react-router-dom";


function Amenities(){

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


    img{
      height:140px;
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
                Amenities</h1>
            <div className="container">

                <div className="box">

                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <a className="service-hover" href="#"><img src={require("../static/images/swimmingpool.jpg")}
                                    alt="Floor plan"/></a>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Swimming Pools</h2>
                        </div>
                    </div>


                </div>

                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <a className="service-hover" href="#"><img src={require("../static/images/tenniscourt.jfif")}
                                    alt=""/></a>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Tennis Courts</h2>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <a className="service-hover" href="#"><img src={require("../static/images/walkingtrials.jfif")}
                                    alt=""/></a>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Walking Trails</h2>
                        </div>
                    </div>
                </div>



                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <a className="service-hover" href="#"><img  src={require("../static/images/garden.jpg")}
                                    alt=""/></a>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Gardens</h2>
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

export default Amenities;