import React from "react";
import { Link } from "react-router-dom";

const VisitorHome = () => {
  return (
    <div id="main">
      <style type="text/css">
        {`

        #main{
          min-height:100vh;

        }

        h1 {
            
            font-size:4em;
            font-weight:bold;

        }

        .container {
          
            display: flex;
            flex-wrap: wrap;
            
        }

        .box {
          
            display:inline-block;
          margin: 10px;
        }
        
        `}
      </style>

      <div className="bg-base-200 shadow-xl" style={{ padding: "25px" }}>
        <br />
        <h1 className="card-title white" style={{ marginLeft: "25px" }}>
          Welcome visitor
        </h1>
        <br/>
        <div className="container">
          <div className="box">
            <div className="bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title white">Register before Arrival</h2>
                <p>Register before your arrival by filling out the form<br/> and we will consider ypur request</p>
                <div className="card-actions">
                  <Link className="btn btn-primary" to="../register_visitor">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title white">Get Directions</h2>
                <p>
                  Access the driving instructions <br />
                  inside the complex.
                </p>
                <div className="card-actions">
                  {/* <a className="btn btn-primary" to="../directions">
                    Directions
                  </a> */}
                  <Link className="btn btn-primary" to="../directions">
                    Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          

          <div className="box">
            <div className="bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title white">
                  Have Queries? Chat with management
                </h2>
                <p>
                  Chat with the management and allow <br/>them to assist you further
                </p>
                <div className="card-actions ">
                  <Link className="btn btn-primary" to="../visitor_chat">
                    CHAT
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

export default VisitorHome;
