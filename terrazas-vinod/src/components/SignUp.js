import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/config";
import swal from 'sweetalert';
// function SignUp() {
//   // function myFunction() {
//   //      alert("Account created successfully! Please login");
//   // }

//   const [emailId, setEmail] = useState("");
//   const [password, setPsw] = useState("");
//   const [fName, setfname] = useState("");
//   const [lastName, setlname] = useState("");
//   const [phone, setphone] = useState("");
//   const [result, setResult] = useState("");
//   const navigate = useNavigate();

//   const [state, setState] = React.useState({
//     email: "",
//     psw: "",
//     phone: "",
//     result: "",
//   })
//   const handleChange1 = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChange2 = (e) => {
//     setPsw(e.target.value);
//   };
//   const handleChange3 = (e) => {
//     setphone(e.target.value);
//   };
//   const handleChange4 = (e) => {
//     setlname(e.target.value);
//   };
//   const handleChange5 = (e) => {
//     setfname(e.target.value);
//   };

//   const handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     // this.setState({ [name]: value },
//     //   () => { this.validateField(name, value) });
//   }

//   const handleSumbit = async (e) => {
//     e.preventDefault();
//     const form = $(e.target);
//     const formData = form.serialize();
//     //alert(JSON.stringify(formData))

//     try{
//          const response = await axios.post(form.attr("action"),JSON.stringify(formData),
//         );
//        // alert(JSON.stringify(response));
//        //alert(response.data);
//         alert("User registered successfully")
//         navigate("/login");

//      }catch(err){
//          if(!err?.response){
//              alert("No server response");
//          }else{
//              alert(err);
//          }
//      }

// make API call or handle form submission here
// fetch(form.attr("action"), {
//   method: 'POST',
//   headers: {
//     'Accept':'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(formData),
// })
//   .then((response) => response.json())
//   .then((jsonData) => {
//     // setData(data);
//     alert(jsonData);
//     //setResult(response[0].Message);
//     navigate("/login");
//   })
//   .catch((error) => {
//     alert("Error"+error);
//     console.error('Error:', error);

// const form = $(e.target);
// $.ajax({
//   type: "POST",
//   url: form.attr("action"),
//   data: form.serialize()
// }).then(function(res){
//     alert(res);
//     navigate("/login");
//  }).fail(function(res){
//     alert("Error in server");
//  });

//   success(data) {
//     setResult(data);
//     console.log(data);
//     alert(data);
//     alert("New User Registered successfully Please Login");
//     navigate("/login");
//   },

//};

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [step, setStep] = useState(1);
  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const navigate = useNavigate();

  const [registerInput, setRegister]= useState({
    error_list: [],
  });


  const handleInput = (e) => {
    e.persist();
    setRegister({...registerInput, [e.target.name]: e.target.value})
  }

  var Data = {
    name: name,
    email: email,
    phone: phone,
    password: password,
    
  };

  //alert(data);
  var InsertAPI = "http://localhost/api/signup.php";
  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // const handleSignup =  (e) => {
  //   alert(JSON.stringify(Data));
  //   fetch(InsertAPI,
  //     {
  //       method:'POST',
  //       headers:headers,
  //       body:JSON.stringify(Data)
  //     }
  //     )
  //     .then((response)=>response.json())
  //     .then((response)=>
  //     {
  //       alert(response[0].Message);
  //     })
  //     .catch((error)=>
  //     {
  //       alert("Error"+error);
  //     })
  // };

  const handleSignup =  (e) => {
    e.preventDefault();

      axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('api/register', Data).then(res =>{

      if (res.data.status === 200) {
        localStorage.setItem('auth_token',res.data.token);
        localStorage.setItem('auth_name',res.data.username);
        swal("Success",res.data.message,"success").then(function() {
        navigate("/login");
       // setStep(2);
      });;
        //setStep(2);
        
       } else {
        //swal("Failre",res.data.validation_errors.email,"error")
        //setError(error => [...error,res.data.validation_errors]);
          setRegister({...registerInput, error_list:res.data.validation_errors});

      }
   
    });
  });
};

  // const form = $(e.target);
  // $.ajax({
  // type: "POST",
  // url: "http://localhost/api/print.php",
  // contentType: "application/json",
  // data: JSON.stringify(data),
  // success: function(response) {
  //   alert(response);
  //   setStep(2);
  // },
  // error: function(jqXHR, textStatus, errorThrown) {
  //   alert(errorThrown);
  //   console.log(textStatus, errorThrown);
  // }
  //  });
  // }

  // alert(JSON.stringify(data));
  // fetch('http://localhost/api/signup.php', {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   success: function(response) {

  //     console.log(response);
  //     setStep(2);
  //   },
  //   error: function(jqXHR, textStatus, errorThrown) {
  //     console.log(textStatus, errorThrown);
  //   }
  // .then((response) => response.json())
  // .then((data) => {
  //   if (data.success) {
  //     setStep(2);
  //   } else {
  //     alert(data.msg);
  //     //setError(res.data.error);
  //   }
  //  });
  //}

  //   try {
  //     const res = await axios.post('http://localhost/api/signup.php',data,{
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     if (res.data.error) {
  //       setError(res.data.error);
  //     } else {
  //       setStep(2);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleEmailVerification = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        BASE_URL + `verify.php?verify_email=${emailCode}`
      );

      if (res.data.error) {
        setError(res.data.error);
      } else {
        navigate("/login");
        // setStep(3);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePhoneVerification = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost/api/verify.php?verify_phone=${phoneCode}`
      );

      if (res.data.error) {
        setError(res.data.error);
      } else {
        //window.location.href = 'dashboard.php';
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
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
      {/* <h2 className="white">Sign up to view and book your new home</h2> */}
      <br />
      {step === 1 && (
        <form onSubmit={handleSignup}>
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              required
              placeholder="Please enter your Name"
              id="name"
              value={name}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
            />
            <span>{registerInput.error_list.name}</span>
          </div>
          <div>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              required
              placeholder="Username/Email ID"
              id="email"
              value={email}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div >{registerInput.error_list.email}</div>
          </div>
          <br />
          <div>
            {/* <label htmlFor="phone">Phone</label> */}
            <input
              type="text"
              title="Enter a valid 10 digit phone number"
              pattern="[1-9]{1}[0-9]{9}"
              required
              placeholder="Phone No."
              id="phone"
              value={phone}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setPhone(e.target.value)}
            />
            <span>{registerInput.error_list.phone}</span>
          </div>

          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password must contain atleast 1 uppercase, lowercase, number and special character"
              placeholder="Password"
              id="password"
              required
              minLength="6"
              maxLength="15"
              value={password}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{registerInput.error_list.password}</span>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text"></span>
              <input type="checkbox" required className="checkbox" />I Agree to
              all the terms and conditions of Terraazas de Guacuco.
            </label>
          </div>
          {error && <p>{error}</p>}
          <div>
            <button className="btn btn-outline" type="submit" name="register">
              Sign Up
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleEmailVerification}>
          <div>
            <label htmlFor="emailCode">
              <h1>
                <b>Enter Email verification code</b>
              </h1>
            </label>
            <br />

            <input
              type="text"
              id="emailCode"
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <div>
            <button className="btn btn-outline" type="submit" name="register">
              Verify email
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePhoneVerification}>
          <div>
            <label htmlFor="phoneCode">Phone verification code</label>
            <input
              type="text"
              id="phoneCode"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Verify phone</button>
        </form>
      )}
    </div>

    // <div className="form-container">
    //   <style>
    //     {`
    //         .form-container {
    //             min-height:81vh;
    //             padding-top: 24px;
    //             max-width: 500px;
    //             margin: 0 auto;
    //             text-align: center;
    //             padding: 30px;s
    //         }

    //         input[type="text"],
    //         input[type="password"] {
    //             width: 100%;
    //             padding: 10px;
    //             margin-bottom: 20px;

    //         }
    //         `}
    //   </style>

    //   <h1 className="text-5xl font-bold white">Create Account </h1>
    //   <br />
    //   <div className="divider"></div>
    //   <form action="http://localhost/api/register.php"
    //     method="post"
    //     onSubmit={(event) => handleSumbit(event)} >
    //     <h2 className="white">Sign up to view and book your new home</h2>
    //     <br />
    //     <div>
    //       <input type="text" required placeholder="FirstName"
    //         name="fName"
    //         id="fName"
    //         value={fName}
    //         onChange={(event) => handleChange5(event)}
    //         className="input input-bordered input-info w-full max-w-xs" />
    //       <input type="text" required placeholder="LastName"
    //         name="lastName"
    //         id="lastName"
    //         value={lastName}
    //         onChange={(event) => handleChange4(event)}
    //         className="input input-bordered input-info w-full max-w-xs" />
    //     </div>
    //     <div>
    //       <input type="text" title="Enter a valid 10 digit phone number" pattern="[1-9]{1}[0-9]{9}" required placeholder="Phone No."
    //         name="phone"
    //         value={phone}
    //         onChange={(event) => handleChange3(event)}
    //         className="input input-bordered input-info w-full max-w-xs" />
    //     </div>
    //     {/* <br/> */}
    //     <div>
    //       <input type="email" required placeholder="Username/Email ID"
    //         name="emailId"
    //         id="emailId"
    //         value={emailId}
    //         onChange={(event) => handleChange1(event)}
    //         className="input input-bordered input-info w-full max-w-xs" />
    //     </div>
    //     <br />
    //     <div>
    //       <input type="password" required minLength="6" maxLength="15"
    //         placeholder="Password"
    //         /*pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/" */
    //         name="password"
    //         value={password}
    //         onChange={(event) => handleChange2(event)}
    //         className="input input-bordered input-info w-full max-w-xs" />

    //     </div>
    //     <div className="form-control">
    //       <label className="label cursor-pointer">
    //         <span className="label-text"></span>
    //         <input type="checkbox" required className="checkbox" />I Agree to all the terms and conditions of Terraazas de Guacuco.
    //       </label>
    //     </div>
    //     <div>
    //       <button className="btn btn-outline" type="submit" name="register">Sign Up</button>
    //       {/* <button className="btn btn-outline" type="submit" onClick={myFunction}>Submit</button> */}
    //     </div>
    //   </form>
    //   <br />
    // </div>
  );
}

export default SignUp;
