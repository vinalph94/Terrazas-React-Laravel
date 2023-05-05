import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, getCookie } from "../../config/config";
import axios from "axios";
function RegisterVehicle() {
  const navigate = useNavigate();

  var c = getCookie();

  if (!c["id"] && !c["role"] == "resident") {
    navigate("/login");
  }

  const [vehicleData, setVehicleData] = useState([]);
  const [showAddCarModal, setShowAddCarModal] = useState(false);

  const [loading, setLoading] = useState(false);


  function handleDeleteCarSubmit(id){
    
    axios
    .delete("api/delete_vehicle.php/" + id)
    .then(data => {
      loadVehicles();
    })

  }

  function toggleAddCarModal() {
    setShowAddCarModal(!showAddCarModal);
  }

  function hideAddCarModal(){
    showAddCarModal =false;
  }

  function handleAddCarSubmit(event) {
    
    const formData = new FormData(event.target);
    var newCar = {
      license_plate_number: formData.get("plate"),
      vehicle_model: formData.get("model"),
      vehicle_make: formData.get("make"),
      vehicle_color: formData.get("color"),
    };

    newCar.resident_id = getCookie()["id"];
    axios
      .post("api/add_vehicle.php", newCar)
      .then((response) => response.json())
      .then((data) => {
        hideAddCarModal();

        loadVehicles();

      });
  }

  function loadVehicles(){
    axios
      .get("api/get_vehicles.php/" + getCookie()["id"])
      .then(data => {
        setVehicleData(data.data);
      })
  }

  useEffect(() => {
    // Fetch the vehicle data from API and update the state
    loadVehicles();
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
          font-size: 30px;
          font-weight:bold;
        }
        `}
      </style>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {showAddCarModal && (
          <div className="my-modal">
            <div className="my-modal-box">
              <span className="close" onClick={toggleAddCarModal}>
                &times;
              </span>
              <h3>Add Car</h3>
              <form onSubmit={handleAddCarSubmit}>
                <label>
                  Vehicle Plate:
                  <input type="text" name="plate" />
                </label>

                <label>
                  Make:
                  <input type="text" name="make" />
                </label>
                <label>
                  Model:
                  <input type="text" name="model" />
                </label>

                <label>
                  Color:
                  <input type="text" name="color" />
                </label>
                <button type="submit" class="btn btn-accent">
                  Add car
                </button>
              </form>
            </div>
          </div>
        )}

        <div
          style={{
            flex: 0.3,
            display: "inline-block",
            marginBottom: "10px",
            paddingRight: "64px",
          }}
        >
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body items-center text-center">
              <button
                className="btn btn-accent"
                type="submit"
                onClick={toggleAddCarModal}
              >
                Add Car
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Vehicle Plate</th>
                  <th>Make & model</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                {vehicleData.map((vehicle, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{vehicle.license_plate_number}</td>
                    <td>
                      {vehicle.vehicle_model + " " + vehicle.vehicle_make}
                    </td>
                    <td>{vehicle.vehicle_color}</td>
                    <td><button className="btn btn-primary" onClick={()=> handleDeleteCarSubmit(vehicle.id)}>Delete</button></td>
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

export default RegisterVehicle;
