import React from "react";
import { Link } from "react-router-dom";

const Directions = () => {
  return (
    <div id="main">
      <style type="text/css">
        {`
        #main
        {
          min-height:100vh;
          padding:25px;
        }
        .profile-container{


            min-height:100vh;
        }
        .h1 {
            padding: 24px;
            margin: 24px;

        }

        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .box {
            display: inline-block;
            margin: 10px;
        }
        
        `}
      </style>

      <div className="bg-base-200 shadow-xl" style={{flex:1,marginLeft:"0px"}}>
        <div className="box">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
            <img src={require("../../static/images/Parking-Lot.jpg")}></img>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Visitors Parking Lot</h2>
              <p>
                Visitors are allowed to park in their vehicles not more that
                24hrs.
              </p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" to="../map">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={require("../../static/images/resident.jpeg")} alt="Car" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Residential Units Entrance</h2>
              <p>Directions for complex residentinal units entrace.</p>
              <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="../map">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={require("../../static/images/court.jpeg")}  />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ammenities: Tennies Court</h2>
              <p>
                Visitors are allowed to park in their vehicles not more that
                24hrs.
              </p>
              <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="../map">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={require("../../static/images/pool.jpeg")} alt="Car" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ammenities: Swimming Pool</h2>
              <p>Enjoy our lavish swimming pool thats open 24/7.</p>
              <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="../map">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={require("../../static/images/garden.jpeg")} alt="Car" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ammenities: Garden</h2>
              <p>
                In addition our garden community offers walking track minutes
                away from your door.
              </p>
              <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="../map">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
