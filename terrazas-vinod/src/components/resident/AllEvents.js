import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, getCookie } from "../../config/config";

const AllEvents = () => {
  const [myevents, setMyEvents] = useState([]);
  const [selectevents, setSelectEvents] = useState([]);

  async function fetchData() {
    axios
      .get("/api/gardenmanager/Garden_Event_Read.php")
      .then((response) => {
        console.log(response);
        setMyEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchDataSelect() {
    var resident_id = getCookie()["id"];
    if (resident_id == undefined) return;
    axios

      .get(
        "/api/gardenmanager/Resident_Event_View.php?filter=" + resident_id
      )
      .then((response) => {
        console.log(response);

        setSelectEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
    fetchDataSelect();
  }, []);
  const handleRegister = async (id) => {
    const data = {
      event_id: id,
      participant_name: getCookie()["name"],
      email: getCookie()["email"],
      phone: getCookie()["phone"],
      resident_id: getCookie()["id"],
    };
    try {
      console.log(id);
      const response = await axios.post(
        "api/gardenmanager/Resident_Event_Register.php",
        data
      );
      console.log(response);
      fetchData();
    } catch (error) {
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
          <h1 className="hdng">All Events</h1>
        </div>

        {myevents.map((event) => (
          <div
            className="card lg:card-side bg-base-100 shadow-xl mb-10 bg-navy"
            key={event.event_id}
          >
            <figure>
              <img style ={{height:"240px",width:"240px"}}src={require(`../../static/images/${event.image}`)}></img>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.event_name}</h2>
              <p>Description: {event.event_Description}</p>
              <p>Date: {event.event_date}</p>
              <p>Place: {event.place}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-error"
                  onClick={() => handleRegister(event.event_id)}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}

        <div>
          <h1 className="hdng">Registered Event</h1>
        </div>

        {selectevents.map((event) => (
          <div
            className="card lg:card-side bg-base-100 shadow-xl mb-10 bg-navy"
            key={event.event_id}
          >
            <figure>
              <img style ={{height:"240px",width:"240px"}} src={require(`../../static/images/${event.image}`)}></img>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.event_name}</h2>
              <p>Description: {event.event_Description}</p>
              <p>Date: {event.event_date}</p>
              <p>Place: {event.place}</p>
              <div className="card-actions justify-end">
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
