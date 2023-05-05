import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, saveCookie } from "../../config/config";
import axios from "axios";
import swal from "sweetalert";

function ResidentHeader() {

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post('api/logout').then(res => {
      if(res.data.status === 200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal({
          title:"Success",
          text:"Logged out successfully",
          icon:"success",
        }).then(function() {
          navigate("/login")
      });
    }
    });
  }

  const navigate = useNavigate();

  var c = getCookie()
  
  if (!c["id"] && !c["role"]=="resident") {

    navigate("/");
  }

  

  const handleLogout = () => {
    saveCookie({})
    navigate("/login")
  }

  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Terrazas</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="profile">Home</a>
            </li>

            <li>
              <a href="/login" onClick={logoutSubmit}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResidentHeader;
