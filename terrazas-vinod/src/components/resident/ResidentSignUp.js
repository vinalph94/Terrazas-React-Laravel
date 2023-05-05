import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ResidentSignUp() {
  // function myFunction() {
  //      alert("Account created successfully! Please login");
  // }

  const [emailId, setEmail] = useState("");
  const [password, setPsw] = useState("");
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [phone, setphone] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: "",
    psw: "",
    phone: "",
    result: "",
  })
  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setPsw(e.target.value);
  };
  const handleChange3 = (e) => {
    setphone(e.target.value);
  };
  const handleChange4 = (e) => {
    setlname(e.target.value);
  };
  const handleChange5 = (e) => {
    setfname(e.target.value);
  };


  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // this.setState({ [name]: value },
    //   () => { this.validateField(name, value) });
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),    
      success(data) {
        setResult(data);
        console.log(data);
        alert(data);
        alert("New User Registered successfully Please Login");
        navigate("/resident_login");
      },
    });
    alert("New User Registered successfully Please Login");
        navigate("/resident_login");
  };

  return (
    <div className="form-container">
      <style>
        {`
            .form-container {
                min-height:81vh;
                padding-top: 24px;
                max-width: 500px;
                margin: 0 auto;
                text-align: center;
                padding: 30px;s
            }
    
            
            input[type="text"],
            input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
    
            }
            `}
      </style>

      <h1 className="text-5xl font-bold white">Create Account </h1>
      <br />
      <div className="divider"></div>
      <form action="http://localhost/app/register.php"
        method="post"
        onSubmit={(event) => handleSumbit(event)} >
        <h2 className="white">Sign up to view and book your new home</h2>
        <br />
        <div>
          <input type="text" required placeholder="FirstName"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => handleChange5(event)}
            className="input input-bordered input-info w-full max-w-xs" />
          <input type="text" required placeholder="LastName"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => handleChange4(event)}
            className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div>
          <input type="text" title="Enter a valid 10 digit phone number" pattern="[1-9]{1}[0-9]{9}" required placeholder="Phone No."
            name="phone"
            value={phone}
            onChange={(event) => handleChange3(event)}
            className="input input-bordered input-info w-full max-w-xs" />
        </div>
        {/* <br/> */}
        <div>
          <input type="email" required placeholder="Username/Email ID"
            name="emailId"
            id="emailId"
            value={emailId}
            onChange={(event) => handleChange1(event)}
            className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <br />
        <div>
          <input type="password" required minLength="6" maxLength="15"
            placeholder="Password"
            /*pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/" */
            name="password"
            value={password}
            onChange={(event) => handleChange2(event)}
            className="input input-bordered input-info w-full max-w-xs" />

        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text"></span>
            <input type="checkbox" required className="checkbox" />I Agree to all the terms and conditions of Terraazas de Guacuco.
          </label>
        </div>
        <div>
          <button className="btn btn-outline" type="submit">Sign Up</button>
          {/* <button className="btn btn-outline" type="submit" onClick={myFunction}>Submit</button> */}
        </div>
      </form>
      <br />
    </div>
  );
}

export default ResidentSignUp;
