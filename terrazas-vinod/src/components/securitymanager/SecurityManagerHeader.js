import React from "react";
import { Link } from "react-router-dom";

function SecurityManagerHeader() {
  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="home">
            Terrazas
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="charts">Charts</Link>
            </li>
            <li>
              <Link to="manage_visitor">Manage Visitor</Link>
            </li>
            <li>
              <Link to="chat">Chat</Link>
            </li>
            <li>
              <Link to="/manager_login/security">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecurityManagerHeader;
