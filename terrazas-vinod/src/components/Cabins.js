import React from "react";
import { Link } from "react-router-dom";

function Cabins() {
  return (
    <div>
      <style>
        {`
    .profile-container {
        padding: 24px;
        margin: 24px;
        margin-bottom: 265px;
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
        <div
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
        >
          <div
            style={{
              flex: 0.3,
              display: "inline-block",
              marginBottom: "10px",
              paddingRight: "64px",
            }}
          >
            <div className="card bg-base-300 shadow-xl">
              <div className="avatar">
                <img src={require("../static/images/cabin.jpg")} />
              </div>

              <div className="card-body items-center text-center">
                <h2 className="card-title white">Cabins Floor Plan</h2>
              </div>
            </div>
          </div>

          <div
            className="bg-base-200 shadow-xl"
            style={{ flex: 1, marginLeft: "0px" }}
          >
            <div className="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>Apartment</th>
                    <th>Rent</th>
                    <th>Size</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>564</th>
                    <td>1210</td>
                    <td>980</td>
                    <td>Available</td>
                    <td>
                    <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th>577</th>
                    <td>1240</td>
                    <td>990</td>
                    <td>2/26/2023</td>
                    <td>
                    <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th>654</th>
                    <td>1200</td>
                    <td>950</td>
                    <td>3/15/2023</td>
                    <td>
                    <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabins;
