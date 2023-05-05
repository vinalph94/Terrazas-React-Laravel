import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SecurityManagerLogin = () => {
 
     
      const { register, handleSubmit, formState: { errors } } = useForm();
      const navigate = useNavigate()
      const onSubmit = (data) => {
        navigate('/poolmanager/home')
      }
        return (
    
          <div>
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
            <div className="form-container">
              <h1 className="text-5xl font-bold white">Security Manager</h1>
              <br />
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="white">Login to manage your Terrazas</h2>
                <br />
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("firstName", { required: true, maxLength: 10 })}
                    />
                    {errors.firstName && <p>Please check the UserName Name</p>}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
        
                  />
                  {errors.password && <p>Please check the Password</p>}
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
            </div>
          </div>
   
    );
  };
  

export default SecurityManagerLogin;