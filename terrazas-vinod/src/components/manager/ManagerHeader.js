import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, saveCookie } from "../../config/config";

function ManagerHeader() {
  const navigate = useNavigate();

  var c = getCookie();

  if (!c["id"] && !c["role"] == "resident") {
    navigate("/");
  }

  const handleLogout = () => {
    saveCookie({});
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Terrazas</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/manager/home">Admin Home</Link>
            </li>
            <li>
              <Link to="/manager/chat">Chat</Link>
            </li>
            <li>
              <Link to="/manager/charts">Charts</Link>
            </li>
            <li>
            <a href="/login" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManagerHeader;
