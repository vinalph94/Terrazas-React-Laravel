import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const ManagerHome = () => {



  return (
    <div>
      <style type="text/css">
        {`

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

      <div className="profile-container">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Apartments</div>
              <div className="stat-value">350</div>
              <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Pool</div>
              <div className="stat-value text-secondary">60</div>
              <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Tennies Court</div>
              <div className="stat-value">27</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Garden</div>
              <div className="stat-value">27</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>

        <div
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <div className="container"></div>


          <div className="box">
            <div className="bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title white">Manage Residents</h2>
                <p>
                  Look out for the details of residents living in Terraazas.
                </p>
                <div className="card-actions ">
                  <Link
                    className="btn btn-primary"
                    to="/manager/manage_residents"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title white">Manage Managers</h2>
                <p>Check out total number of visitors visiting Terraazas.</p>
                <div className="card-actions ">
                  <Link className="btn btn-primary" to="/manager/manage_visitors">
                    Manage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
