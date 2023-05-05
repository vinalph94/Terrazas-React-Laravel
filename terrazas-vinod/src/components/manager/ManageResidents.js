import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/config";

function ManageResidents() {
  const [AllResident, setAllResident] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditRowIndex(index);
  };
  const handleCancelClick = () => {
    setEditRowIndex(null);
  };

  const handledeleteClick = (id) => {
   const  data ={
      id: id
    }
    axios
      .post("/api/manager/Delete_Users.php",data)
      .then((response) => {
       alert("resident deleted")
       fetchData(); 
      })
      .catch((error) => {
        console.log(error);
        alert("resident has registered to Apartment Event");
      });
  };

  const handleSaveClick = async (id,name,email,phoneno,aptno) => {
    console.log(id);
    const data = {
      id: id,
      name: name,
      email: email,
      phone: phoneno,
      aptno: aptno,
      role: "0"
    };
    console.log(data);
    try {
      const response = await axios.post(
        "/api/manager/Update_Users.php",
        data
      );

      console.log(response);
      setEditRowIndex(null);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setAllResident((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };
  async function fetchData() {
    axios
      .get("/api/manager/Manage_Users.php")
      .then((response) => {
        console.log(response.data);
        var d =  response.data.filter((data)=>{
          
          return(data.role == 0)

      });
      setAllResident(d);

       
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData();
    
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <div className="overflow-x-auto">




          <table className="table w-full">
            <thead>
              <tr>
                
              
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>APT NO</th>
                  <th></th>
                  <th></th>
              </tr>
            </thead>
            <tbody>
            {AllResident.map((resident, index) => (
              <tr key={index}>
              <td>
                
              {editRowIndex === index ? (
                      <input
                        type="text"
                        name="editName"
                        value={resident.name}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    ) : (
                      resident.name
                    )}
                
                </td>
           
            <td>
            {editRowIndex === index ? (
                      <input
                        type="text"
                        name="email"
                        value={resident.email}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    ) : (
                      resident.email
                    )}
            </td>
            <td>{editRowIndex === index ? (
                      <input
                        type="text"
                        name="phone"
                        value={resident.phone}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    ) : (
                      resident.phone
                    )}</td>
              <td>{editRowIndex === index ? (
                      <input
                        type="text"
                        name="aptno"
                        value={resident.aptno}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    ) : (
                      resident.aptno
                    )}</td>

              <td>
              {editRowIndex === index ? (
                      <>
                        <button
                          className="btn btn-error btn-sm mr-3"
                          onClick={() =>
                            handleSaveClick(
                              resident.id,
                              resident.name,
                              resident.email,
                              resident.phone,
                              resident.aptno
                            )
                          }
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-error btn-sm"
                          onClick={() => handleCancelClick()}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                    )}
              </td>
            <td>
            <button
                        className="btn btn-error btn-sm"
                        onClick={() => handledeleteClick(resident.id)}
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
    </div>
  );
}

export default ManageResidents;
