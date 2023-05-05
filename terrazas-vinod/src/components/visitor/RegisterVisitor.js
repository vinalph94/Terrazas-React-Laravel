import React from "react";
import axios from 'axios';
import { BASE_URL } from "../../config/config";
import { useNavigate } from "react-router";


const handleSubmit = (event) => {
  

  event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("firstName") + " " + formData.get("lastName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const resident_name = formData.get("resident_name")
    const apt_number = formData.get("aptNumber");
    
    const licensePlate = formData.get("licensePlate");
    const intime = formData.get("intime");
    const formData2 = new FormData();
   
    formData2.append('name', name);
    formData2.append('email', email);
    formData2.append('phone_number', phone);
    formData2.append('license_plate', licensePlate);
    formData2.append('entry_date_time', intime);
    formData2.append('resident_name', resident_name);
    formData2.append('apt_number', apt_number);

    console.log(formData2.get("VisitorName"));
    axios
      .post("/api/visitor/add", formData2)
      .then((response) => {
        alert("Thanks for registering. We will consider your request!")
        window.location.assign("/")

      })
      .catch((error) => {
        console.log("Failed")
        console.error(error);
      });
};

function RegisterVisitor() {



  return (
    <div>
      <style>
        {`
                
                .form-container {
                    padding-top: 24px;
                    max-width: 500px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 30px;
                }
        
                input[type="text"],
                input[type="password"] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 20px;
        
                }
            
                `}
      </style>
      <div className="form-container">
        <h1 className="text-3xl font-bold white">
          Outdoor Guest Registration Form{" "}
        </h1>
        <br />
        <div className="divider"></div>
        <form onSubmit={handleSubmit}>
          <h2 className="white">
            By Signing below you agree to the terms and conditions of Guest
            Policy
          </h2>
          <br />
          <div>
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="LastName"
              name="lastName"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>


          <br />

          <div>
            <input
              type="text"
              placeholder="Phone No."
              name="phone"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <br />

          <div>
            <input
              type="text"
              name="resident_name"
              placeholder="Resident Name"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Apt Number"
              name="aptNumber"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <br />

          <div>
            <br />
            <input
              type="text"
              placeholder="License Plate"
              className="input input-bordered input-info w-full max-w-xs"
              name="licensePlate"
            />
          </div>

          <div>
            <label for="intime">In Time and Date</label>
            <br />
            <input
              id="intime"
              type="datetime-local"
              name="intime"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <br />

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text"></span>
              <input type="checkbox" className="checkbox" />I Agree to all the
              terms and conditions of Terraazas de Guacuco.
            </label>
          </div>

          <div>
            <button
              className="btn btn-outline"
              type="submit"
              
            >
              Submit
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default RegisterVisitor;
