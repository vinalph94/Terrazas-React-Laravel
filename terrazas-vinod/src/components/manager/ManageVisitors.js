import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/config";



function ManageVisitors() {
  const [managers, setManagers] = useState([]);
  const [addTiming, setAdddTiming] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
   const  data ={
      name: username,
      email:email,
      password: password,
      role: role,
      phone: phone,
    }
    console.log(data);
    try {
      const response = await axios.post(
        "/api/manager/Add_Users.php",
        data
      );

      console.log(response);
      setEditRowIndex(null);
      fetchData();
      toggle();
    } catch (error) {
      console.error(error);
    }
  }
   function toggle() {
    setAdddTiming((addTiming) => !addTiming);
  }
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

  const handleSaveClick = async (id,name,email,phoneno,role) => {
    console.log(id);
    const data = {
      id: id,
      name: name,
      email: email,
      phone: phoneno,
      role: role,
      aptno:'200'
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
    setManagers((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };
  async function fetchData() {
    axios
      .get("/api/manager/Manage_Users.php")
      .then((response) => {
        
        
        var d =  response.data.filter((data)=>{
          
            return(data.role == 2 || data.role == 3 ||data.role ==4)

        });
        setManagers(d);
       
        
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

          <div>
          <h1 className="hdng">Add Manager</h1>
          <button className="btn btn-error btn-sm" onClick={toggle}>
            ADD 
          </button>
          <br/>
        </div>
        <br/>
        {addTiming ? (
          <div>
            <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone No:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select a role</option>
          <option value="2">garden</option>
          <option value="3">pool</option>
          <option value="4">security</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
          </div>
        ) : null}



          <table className="table w-full">
            <thead>
              <tr>
                
              
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  
                  <th></th>
                  <th></th>
              </tr>
            </thead>
            <tbody>
            {managers.map((resident, index) => (
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
                        name="role"
                        value={resident.role}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    ) : (
                      resident.role
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
                              resident.role,
                              
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

export default ManageVisitors;
