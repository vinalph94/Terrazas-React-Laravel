import React from "react";

function BookApartment() {
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
        <h1 className="text-5xl font-bold white">
          Apartment select - Resident Info
        </h1>
        <br />
        <form action="sign_lease">
          <h2 className="white">
            Fill in your details, sign the lease, take the apartment
          </h2>
          <br />
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <button className="btn btn-outline" type="submit">
              Proceed to sign the lease
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default BookApartment;
