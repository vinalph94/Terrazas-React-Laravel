import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, getCookie, saveCookie } from "../config/config";
import axios from "axios";
import swal from "sweetalert";

function ResidentLogin() {

  const navigate = useNavigate();
  const [loginInput,setLogin] = useState({
    email:'',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value});
   
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('api/login', data).then(res => {
        if(res.data.status === 200){
          localStorage.setItem('auth_token',res.data.token);
          localStorage.setItem('auth_name',res.data.username);
          saveCookie({ id: res.data.id, role: res.data.role,name:res.data.username,email:res.data.email,phone:res.data.phone });
          swal("Success",res.data.message,"success").then(function() {
          //resident
          if (res.data.role == 0) { //resident
            navigate("/resident/profile");
          }
          else if (res.data.role == 1){//manager super-admin
            navigate("/manager/home");
          }
          else if (res.data.role == 2){ //garden-manager
            navigate("/gardenmanager/home");
          }
          else if(res.data.role == 3){//pool-manager
            navigate("/poolmanager/home");
          }
          else if (res.data.role == 4){//security-manager
            navigate("/securitymanager/home");
          }
        });
        }
        else if(res.data.status === 401){
          swal({
            title:"Warning",
            text:"Invalid Credentials",
            icon:"warning",
          });
        }
        else if(res.data.status === 500){
          swal({
            title:"Error",
            text:"Please try again later",
            icon:"error",
          });
        }
        else {
          setLogin({...loginInput, error_list: res.data.validation_errors});
        }
      });
    });
  }

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   var formData = { username: username, password: password };

  //   // make API call or handle form submission here
  //   fetch(BASE_URL + "login.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
          
  //         saveCookie({ id: data.id, role: data.role,name:data.name,email:data.email,phone:data.phone });
          
  //         if (data.role == "resident") {
  //           navigate("/resident/profile");
  //         }
  //         else if (data.role=="g-manager"){
  //           navigate("/gardenmanager/home");
  //         }
  //         else if(data.role =="p-manager"){
  //           navigate("/poolmanager/home");
  //         }
  //         else if (data.role=="s-admin"){
  //           navigate("/manager/home");
  //         }



  //       } else {
  //         alert(data.msg);
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error);
  //       // console.error('Error:', error);
  //     });

  //   // // Make API call to check if username and password are valid

  //   // if (true) {

  //   //   navigate('/resident/profile');

  //   // }
  // };

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

      <h1 className="text-5xl font-bold white">Welcome </h1>
      <br />
      <form onSubmit={loginSubmit}>
        <h2 className="white">Login to manage your home!</h2>
        <br />
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="input input-bordered input-info w-full max-w-xs"
            value={loginInput.email}
            onChange={handleInput}
          />
          <span>{loginInput.error_list.email}</span>
        </div><br/>
        <div>
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered input-info w-full max-w-xs"
            value={loginInput.password}
            onChange={handleInput}
          />
           <span>{loginInput.error_list.password}</span>
        </div>
        <div>
          <button className="btn btn-outline" type="submit">
            Login
          </button>
        </div>
      </form>
      <br />
      <Link to="/forgot_password" className="link link-hover link-info">
        Forgot Password?
      </Link>
      <Link to="/signup" className="link link-hover link-info">
        {" "}
        | Sign up
      </Link>
    </div>
  );
}

export default ResidentLogin;
