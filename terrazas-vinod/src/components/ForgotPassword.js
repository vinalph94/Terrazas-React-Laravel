import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
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
      <br />
      <h1 className="text-5xl font-bold white">Forgot password?</h1>
      <br />
      <form action="#">
        <h2 class="white">Let's verify you!</h2>
        <br />
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <br />
        <div>
          <button className="btn btn-outline" type="submit">
            Reset
          </button>
        </div>
      </form>
      <br />
      <Link to="/" className="link link-hover link-info">
        Login
      </Link>
    </div>
  );
}

export default ForgotPassword;
