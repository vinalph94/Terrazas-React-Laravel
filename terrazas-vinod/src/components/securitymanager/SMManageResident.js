import React, { useState, useEffect } from "react";
import axios from "axios";
function SMManageResident() {
  const [residents, setResidents] = useState([]);

  function fetchPermissions() {
    axios
      .get("/api/securitymanager/get_all").then((data) => setResidents(data.data));
  }

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleApproveClick = (userId) => {
    axios
      .post(
        `/api/securitymanager/update_resident_permissions?user_id=${userId}`,
        { userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Approved:", response.data);
        fetchPermissions();
        // Do something with the response data, such as updating the UI
      })
      .catch((error) => {
        console.error("Error approving user:", error);
      });
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
          <h1 className="hdng">Manage Resident</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Apartment</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{resident.name}</td>
                  <td>{resident.apartment}</td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleApproveClick(resident.id)}
                    >
                      {resident.access ? "Revoke" : "Approve"}
                    </button>
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

export default SMManageResident;
