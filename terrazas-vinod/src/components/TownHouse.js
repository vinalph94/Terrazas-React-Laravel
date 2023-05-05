import React from "react";
import { Link } from "react-router-dom";

function TownHouse() {
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
                <img src={require("../static/images/townhousefloor.jpg")} />
              </div>

              <div className="card-body items-center text-center">
                <h2 className="card-title white">TownHouse Floor Plan</h2>
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
                    <th>177</th>
                    <td>2400</td>
                    <td>1600</td>
                    <td>Available</td>
                    <td>
                      <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th>179</th>
                    <td>2600</td>
                    <td>1700</td>
                    <td>Available</td>
                    <td>
                    <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th>187</th>
                    <td>2850</td>
                    <td>1800</td>
                    <td>4/13/2023</td>
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

export default TownHouse;
