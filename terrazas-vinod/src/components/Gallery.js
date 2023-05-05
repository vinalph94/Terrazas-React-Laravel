import React from "react";

function Gallery() {
  return (
    <div id="slideshow">
      <div className="slide-wrapper">
        <div className="slide">
          <a className="slide-number" href="#">
            <img src={require("../static/images/gallery.jpg")} alt="Amenities" />
          </a>
        </div>
        <div className="slide">
          <a className="slide-number" href="#">
          <img src={require("../static/images/gallery1.jpg")} alt="Amenities" />
          </a>
        </div>
        <div className="slide">
          <a className="slide-number" href="#">
          <img src={require("../static/images/gallery4.jpg")} alt="Amenities" />
          </a>
        </div>
        <div className="slide">
          <a className="slide-number" href="#">
          <img src={require("../static/images/gallery7.jpg")} alt="Amenities" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
