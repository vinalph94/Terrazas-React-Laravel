import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../config/config";

function ResidentProfile() {
  const navigate = useNavigate();

  var c = getCookie();

  if (!c["id"] && !c["role"] == "resident") {
    navigate("/");
  }

  return (
    <div className="profile-container">
      <style type="text/css">
        {`
            .profile-container {
                padding: 24px;
                margin: 24px;
                min-height:90vh;
                
    
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            flex: 0.3,
            display: "inline-block",
            marginBottom: "10px",
            paddingRight: "64px",
          }}
        >
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body items-center text-center">
              <h1>
                Hello, <br />
              </h1>
              <h2 id="nameHeading" className="card-title white">
                {getCookie()["name"]}
              </h2>
              <input
                style={{ display: "none" }}
                id="nameTextBox"
                type="text"
                placeholder="New Name"
                className="input input-bordered input-info w-full max-w-xs"
              />

              <br />
              <div className="card-actions"></div>
            </div>
          </div>
        </div>

        <div
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <div className="container">
            <div className="box">
              <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Register vehicles</h2>
                  <p>Register your vehicles to avoid parking tickets</p>
                  <div className="card-actions">
                    <Link className="btn btn-primary" to="../register_vehicle">
                      CLICK HERE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Check amenities timings</h2>
                  <p>
                    Spend your day at pool, enjoy walk along garden trails etc.
                  </p>
                  <div className="card-actions">
                    <Link className="btn btn-primary" to="../check_timings">
                      CLICK HERE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Check Events</h2>
                  <p>Check Garden and Pool Events</p>
                  <div className="card-actions">
                    <Link className="btn btn-primary" to="../check_events">
                      CLICK HERE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Membership Services</h2>
                  <p>We have multiple clubs and memberships to choose from</p>
                  <div className="card-actions">
                    <Link className="btn btn-primary" to="../subscriptions">
                      CLICK HERE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Chat with management</h2>
                  <p>Raise your concerns with the management</p>
                  <div className="card-actions ">
                    <Link className="btn btn-primary" to="../chat">
                      CLICK HERE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentProfile;
