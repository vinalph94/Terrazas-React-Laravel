import React from "react";
import { Link } from "react-router-dom";

function ManagerLoggedOutHeader() {
  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Terrazas
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <Link href="/manager_login">Manager/Admin Home</Link>
            </li> */}
            <li tabindex="0">
              <a>
                Managers
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-300">
              <li>
                  <Link to="/manager_login">Admin</Link>
                </li>
                <li>
                  <Link to="/manager_login/garden">Garden Manager</Link>
                </li>
                <li>
                  <a href="/manager_login/pool"> Pool Manager</a>
                </li>
                <li>
                  <a href="/manager_login/security"> Security Manager</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/resident_login">Resident</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManagerLoggedOutHeader;
