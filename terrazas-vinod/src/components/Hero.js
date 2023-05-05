import React from "react";

function Hero() {
  return (
    <div>
      <div className="intro">
        <img
          className="home-img"
          src={require("../static/images/home.jpg")}
          alt="Terrazas image"
        />
        <div className="text">
          Terrazas de Guacuco.
          <br />
          Welcome to the premier residntial complex in Venezuela
        </div>
      </div>
    </div>
  );
}


export default Hero;