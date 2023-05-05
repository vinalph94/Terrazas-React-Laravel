import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, saveCookie } from "../../config/config";


function PoolManagerHeader() {


  const navigate = useNavigate();

  var c = getCookie();

  if (!c["id"] && !c["role"] == "p-manager") {
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
          <Link className="btn btn-ghost normal-case text-xl" to="/poolmanager/home">
            Terrazas
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/poolmanager/manage_resident">Manage Resident</Link>
            </li>
            <li>
              <Link to="/poolmanager/manage_visitor">Manage Visitor</Link>
            </li>
            <li>
              <Link to="/poolmanager/chat">Chat</Link>
            </li>
            <li>
              <Link to="/poolmanager/charts">Reports</Link>
            </li>
            <li>
              <Link to="/poolmanager/manage_event">Event</Link>
            </li>
            <li>
            <a href="/login" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PoolManagerHeader;
