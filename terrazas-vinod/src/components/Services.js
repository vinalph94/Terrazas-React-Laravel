import React from "react";
import { Link } from "react-router-dom";


function Services(){
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
                Services</h1>
            <div className="container">

                <div className="box">

                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Link className="service-hover" to="../floorplan"><img src={require("../static/images/FloorPlan.jpg")}
                                    alt="Floor plan"/></Link>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Floor Plan</h2>
                        </div>
                    </div>


                </div>

                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <a className="service-hover" href="../amenities"><img src={require("../static/images/amenity.jpg")}
                                    alt="Amenities"/></a>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Amenities</h2>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <a className="service-hover" href="../gallery"><img src={require("../static/images/gallery.jpg")}
                                    alt="Gallery"/></a>
                            <h2 className="card-title white" style={{justifyContent:"center"}}>Gallery</h2>
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


export default Services;