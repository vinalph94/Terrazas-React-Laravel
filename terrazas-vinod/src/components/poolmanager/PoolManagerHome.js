import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "../../config/config";
const PoolManagerHome = () => {
  const [poolTiming, setpoolTiming] = useState([]);
  const [addTiming, setAdddTiming] = useState(false);
 
  const {
    register,
    formState: { errors },
  } = useForm();

  const [editRowIndex, setEditRowIndex] = useState(null);
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handledeleteClick = (id) => {
    const  data ={
       id: id
     }
     axios
       .post("/api/poolmanager/Pool_Delete_Time.php",data)
       .then((response) => {
        alert("resident deleted")
        fetchData(); 
       })
       .catch((error) => {
         console.log(error);
         alert("resident has registered to Apartment Event");
       });
   };

  async function fetchData() {
    axios
      .get("/api/poolmanager/Pool_Read.php")
      .then((response) => {
        console.log(response);
        setpoolTiming(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setpoolTiming((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleSaveClick = async(index, poolId, day, startTime, endTime) => {
    const data = {
      pool_id: poolId,
      day: day,
      start_time: startTime,
      end_time: endTime,
    };
    console.log(data);
try{
    const response= await axios
      .post("/api/poolmanager/Pool_Update_Time.php", data);
      
      console.log(response);
      setEditRowIndex(null);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    setEditRowIndex(null);
  };
  const handleSubmit = async (event) => {
    console.log("Submitted");
    toggle();
    event.preventDefault();
    // Construct the request body
    const data = {
      // pool_id: "pool1",
      day: day,
      start_time: startTime,
      end_time: endTime,
    };

    // Send the POST request to the PHP script
    try {
      const response = await axios.post(
        "/api/poolmanager/Pool_Create_Day.php",
        data
      );
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  function toggle() {
    setAdddTiming((addTiming) => !addTiming);
  }

  const handleEditClick = (index) => {
    setEditRowIndex(index);
  };

  return (
    <div className="profile-container">
      <style type="text/css">
        {`
 .form-container {
      padding-top: 24px;
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
          <h1 className="hdng">Pool Timings</h1>
          <button className="btn btn-error btn-sm" onClick={toggle}>
            ADD Time
          </button>
        </div>
        {addTiming ? (
          <div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-4 mt-20 mb-20"
            >
              <div>
                <input
                  type="text"
                  placeholder="Day"
                  className="input input-bordered input-info w-full max-w-xs"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="time"
                  placeholder="Start Time"
                  className="input input-bordered input-info w-full max-w-xs"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="time"
                  placeholder="End Time"
                  className="input input-bordered input-info w-full max-w-xs"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>

              <div>
                <button className="btn  btn-error btn-outline" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        ) : null}

        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Id</th>
                <th>Day</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th></th>
                <th></th>
               
              </tr>
            </thead>
            <tbody>
            {poolTiming.map((row, index) => (
          <tr key={index}>
           <td>{row.id}</td>
            <td>{row.day}</td>
            <td>
              {editRowIndex === index ? (
                <input
                  type="time"
                  name="startTime"
                  value={row.startTime}
                  onChange={(event) => handleInputChange(index, event)}
                />
              ) : (
                row.start_time
              )}
            </td>
            <td>
              {editRowIndex === index ? (
                <input
                  type="time"
                  name="endTime"
                  value={row.endTime}
                  onChange={(event) => handleInputChange(index, event)}
                />
              ) : (
                row.end_time
              )}
            </td>
            <td>
              {editRowIndex === index ? (
                <>
                  <button className="btn btn-error btn-sm mr-3" onClick={() => handleSaveClick(index,row.id, row.day, row.startTime, row.endTime)}>Save</button>
                  <button className="btn btn-error btn-sm" onClick={() => handleCancelClick()}>Cancel</button>
                </>
              ) : (
                <button className="btn btn-error btn-sm" onClick={() => handleEditClick(index)}>Edit</button>
              )}
            </td>
            <td>
            <button
                        className="btn btn-error btn-sm"
                        onClick={() => handledeleteClick(row.id)}
                      >
                        delete
                      </button>
            </td>
          </tr>
        ))}
            </tbody>
          </table>
        </div>
        <div style={{height:"50vh"}}> </div>
      </div>
    </div>
  );
};

export default PoolManagerHome;
