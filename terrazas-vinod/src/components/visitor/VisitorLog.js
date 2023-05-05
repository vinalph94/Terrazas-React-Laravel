import React from "react";

function VisitorLog() {
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
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>In Time</th>
                  <th>Phone No.</th>
                  <th> Apt Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Subhash</td>
                  <td>6:45AM</td>
                  <td>+1 8233737293</td>
                  <td>1121B</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Ravi</td>
                  <td>10:30AM</td>
                  <td>+1 8142568370</td>
                  <td>1011A</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Venkatesh</td>
                  <td>12:20PM</td>
                  <td>+1 8686517717</td>
                  <td>1214C</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Yashaswi</td>
                  <td>1:13PM</td>
                  <td>+1 760247865</td>
                  <td>1224A</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Vinod</td>
                  <td>5:15PM</td>
                  <td>+1 8178293007</td>
                  <td>1143C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitorLog;
