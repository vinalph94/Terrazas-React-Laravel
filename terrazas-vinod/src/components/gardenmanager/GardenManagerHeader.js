import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, saveCookie } from "../../config/config";

function GardenManagerHeader() {
  const navigate = useNavigate();

  var c = getCookie();

  // if (!c["id"] && !c["role"] == "2") {
  //   navigate("/");
  // }

  const handleLogout = () => {
    saveCookie({});
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case text-xl"
            to="/gardenmanager/home"
          >
            Terrazas
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/gardenmanager/manage_resident">Manage Resident</Link>
            </li>
            <li>
              <Link to="/gardenmanager/manage_visitor">Manage Visitor</Link>
            </li>
            <li>
              <Link to="/gardenmanager/charts">Reports</Link>
            </li>

            <li>
              <Link to="/gardenmanager/chat">Chat</Link>
            </li>
            <li>
              <Link to="/gardenmanager/manage_event">Events</Link>
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

export default GardenManagerHeader;
