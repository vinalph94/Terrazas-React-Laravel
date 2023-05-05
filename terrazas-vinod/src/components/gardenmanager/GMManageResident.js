import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";

function GMManageResident() {
  const [AllResident, setAllResident] = useState([]);
  const [Request, setRequest] = useState([]);

  async function fetchData() {
    axios
      .get("/api/gardenmanager/Garden_Access_Read.php?filter='Resident'")
      .then((response) => {
        console.log(response);
        setAllResident(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchDataRequest() {
    axios
      .get("/api/gardenmanager/Garden_Access_Request.php?filter='Resident'")
      .then((response) => {
        console.log(response);
        setRequest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    fetchData();
    fetchDataRequest();
  }, []);

  const handleDelete = async(id) => {
    try{
      console.log(id);
      const response= await axios.post('/api/gardenmanager/Garden_Access_Delete.php', { id })
      console.log(response);
      fetchDataRequest();
      fetchData();
      } 
      catch (error) {
      console.error(error);
       }
    
  };
  const handleAccept = async(id) => {
    try{
      console.log(id);
      const response= await axios.post('/api/gardenmanager/Garden_Access_Accept.php', { id })
      console.log(response);
      fetchDataRequest();
      fetchData();
      } 
      catch (error) {
      console.error(error);
       }
    
  };

  return (
    <div className="profile-container">
      <style type="text/css">
        {`
.form-container {
  padding-top: 24px;
  min-height:100vh;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

.hdng {
  font-size: 30px;
  padding-bottom: 10px;
}
              `}
      </style>

      <div className="form-container">
      <div>
          <h1 className="hdng">Membership Request</h1>
        </div>
        <div className="overflow-x-auto mb-20">
          <table className="table w-full">
            <thead>
              <tr>
                
                <th>Name</th>
               
                <th>join Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {Request.map(resident => (
          <tr key={resident.membership_id_r}>
            <td>{resident.name}</td>
           
            <td>{resident.join_date}</td>
            <td>
            <button className="btn btn-error btn-sm mr-5" onClick={() => handleAccept(resident.membership_id_r)}>Accept</button>
              <button className="btn btn-error btn-sm" onClick={() => handleDelete(resident.membership_id_r)}>Reject</button>
            </td>
          </tr>
        ))}

            </tbody>
            </table>
            </div>


        <div>
          <h1 className="hdng">Manage Resident</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                
                <th>Name</th>
                
                <th>join Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {AllResident.map(resident => (
          <tr key={resident.membership_id_r}>
            <td>{resident.name}</td>
            
            <td>{resident.join_date}</td>
            <td>
              <button className="btn btn-error btn-sm" onClick={() => handleDelete(resident.membership_id_r)}>Delete</button>
            </td>
          </tr>
        ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GMManageResident;
