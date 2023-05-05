import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/config";


function AmenitiesTimings() {
  const [gardenTiming, setGardenTiming] = useState([]);
  const [poolTiming, setPoolTiming] = useState([]);
  async function fetchDataGarden() {
    axios
      .get(BASE_URL + "gardenmanager/Garden_Read.php")
      .then((response) => {
        console.log(response);
        setGardenTiming(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchDataPool() {
    axios
      .get(BASE_URL + "poolmanager/Pool_Read.php")
      .then((response) => {
        console.log(response);
        setPoolTiming(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchDataGarden();
    fetchDataPool();
  }, []);
  
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
      <h2 style={{fontSize:"40px"}}>Garden Timings</h2><br/>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      
        <div className="shadow-xl" style={{flex:1,marginLeft:"0px"}}>
        
        <div className="overflow-x-auto">
          
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Id</th>
                <th>Day</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {gardenTiming.map((row, index) => (
                <tr key={index}>
                  <td>{row.garden_id}</td>
                  <td>{row.day}</td>
                  <td>
                    {
                      row.start_time
}
                  </td>
                  <td>
                    {
                      row.end_time
                    }
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br/>
        <h2 style={{fontSize:"40px"}}>Pool Timings</h2><br/>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Id</th>
                <th>Day</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {poolTiming.map((row, index) => (
                <tr key={index}>
                  <td>{row.garden_id}</td>
                  <td>{row.day}</td>
                  <td>
                    {
                      row.start_time
}
                  </td>
                  <td>
                    {
                      row.end_time
                    }
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AmenitiesTimings;
