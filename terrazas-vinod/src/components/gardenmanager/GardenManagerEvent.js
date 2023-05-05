import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";

const GardenManagerEvent = () => {
  const [event_name, setName] = useState("");
  const [event_Description, setDescription] = useState("");
  const [event_date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [myevents, setMyEvents] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async(id) => {
    try{
      console.log(id);
      const response= await axios.post('/api/gardenmanager/Garden_event_Delete.php', { id })
      console.log(response);
      fetchData();
      } 
      catch (error) {
      console.error(error);
      alert("cannot delete!. People have registered for this event")
       }
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgpath = image.name;
    console.log(image.name);
    console.log(imgpath);
    const data = {
      event_name: event_name,
      event_Description: event_Description,
      event_date: event_date,
      image: imgpath,
      place: "garden",
    };
    console.log(data);

    try {
      const response = await axios.post(
        "/api/gardenmanager/Garden_event_Insert.php",
        data
      );
      e.preventDefault();
      fetchData();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
          <h1 className="hdng">Add an Event</h1>
          </div>
        <form onSubmit={handleSubmit} className="grid grid-row-5 mb-20">
          <div>
           
            <input
              type="text"
              placeholder="Event Name"
              className="mt-5 input input-bordered input-info w-full max-w-xs"
              id="name"
              value={event_name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            
            <input
              id="description"
              placeholder="Event Description"
              value={event_Description}
              className=" mt-5 input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></input>
          </div>
          <div>
           
            <input
              type="date"
              id="date"
              placeholder="Event Date"
              value={event_date}
              className=" mt-5 input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            
            <input
              type="file"
              id="image"
              className="mt-5"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div>
            <button className="mt-5 btn btn-error btn-outline w-full max-w-xs" type="submit">Add Event</button>
          </div>
          
        </form>

          {myevents.map((event) => (
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10 bg-navy" key={event.event_id}>
            <figure><img style={{height:"240px",width:"240px"}} src={require(`../../static/images/${event.image}`)}></img></figure>
            <div className="card-body">
                      <h2 className="card-title">{event.event_name}</h2>
                      <p>Description: {event.event_Description}</p>
                      <p>Date: {event.event_date}</p>
                    <p>Place: {event.place}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-error" onClick={() => handleDelete(event.event_id)}>Delete</button>
                      </div>
                    </div>
          </div>


          ))}

      </div>
    </div>
  );
};

export default GardenManagerEvent;
