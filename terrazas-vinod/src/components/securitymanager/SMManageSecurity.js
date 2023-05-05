import axios from "axios";
import React, {  useState } from "react";
import { getCookie } from "../../config/config";

function SMManageSecurity() {
  const [securityData, setSecurityData] = React.useState([]);
  const [showAddSecurityModal, setShowAddSecurityModal] = useState(false);


  function toggleAddSecurityModal() {
    setShowAddSecurityModal(!showAddSecurityModal);
  }

  function hideAddSecurityModal(){
    showAddSecurityModal =false;
  }

  function handleAddSecuritySubmit(event) {
    
    const formData = new FormData(event.target);
    var newSecurity = {
      shift_time: formData.get("shift_time"),
      location: formData.get("location"),
      name: formData.get("name"),
      
    };

    
    axios
      .post("/api/securityperson/add", newSecurity)
      .then((response) => response.json())
      .then((data) => {
        hideAddSecurityModal();

        fetchPermissions();

      });
  }


  function fetchPermissions() {
    axios
      .get("/api/securityperson/get_all")

      .then((data) => setSecurityData(data.data));
  }

  const handleUpdateClick = (id) => {
    axios
      .post(
        `/api/securityperson/update_security_status?id=${id}`,
        { id },
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

  const handleDeleteClick = (id) => {
    axios
      .post(
        `/api/securityperson/delete_security?id=${id}`,
        { id },
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

  React.useEffect(() => {
    fetchPermissions();
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
        .my-modal{
          
          position: fixed; /* Stay in place */
          z-index: 1000; /* Sit on top */
          left: 0;
          top: 0;
          width: 100%; /* Full width */
          height: 100%; /* Full height */
          overflow: auto; /* Enable scroll if needed */
          background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
          color:white;
          --tw-bg-opacity: 1;
          
          margin:25px;
          background-color: hsl(var(--b3,var(--b2))/var(--tw-bg-opacity));
        }
        .my-modal-box{
          
  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #fff;
  width: 80%; /* Could be more or less, depending on screen size */
        }
        .close{
          color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
        }.close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;

        }
        h3{
          font-size: 40px;
          font-weight:bold;
        }
        `}
      </style>
      {showAddSecurityModal && (
          <div className="my-modal">
            <div className="my-modal-box">
              <span className="close" onClick={toggleAddSecurityModal}>
                &times;
              </span>
              <h3>Add Security Person</h3>
              <form onSubmit={handleAddSecuritySubmit}>
                <label>
                  Name
                  <input type="text" name="name" />
                </label>

                <label>
                  Location
                  <input type="text" name="location" />
                </label>
                <label>
                  Shift time
                  <input type="text" name="shift_time" />
                </label>

                <button type="submit" class="btn btn-accent">
                  Add
                </button>
              </form>
            </div>
          </div>
        )}


      <div className="form-container">
        <div>
          <h3 >Manage Security</h3>
          <button
                className="btn btn-primary"
                type="submit"
                onClick={toggleAddSecurityModal}
              >
                Add Security Person
              </button>
              <br/>
              <br/>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Location</th>
                <th>Shift time</th>
                <th>Active Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {securityData.map((item, index) => (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{item.shift_time}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateClick(item.id)}
                      className="btn btn-error"
                    >
                      {item.active_status === "on-duty"
                        ? "Make Off-Duty"
                        : "Put On-Duty"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteClick(item.id)}
                      className="btn btn-error"
                    >
                      Delete
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

export default SMManageSecurity;
