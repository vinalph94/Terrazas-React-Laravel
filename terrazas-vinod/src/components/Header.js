import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Terrazas</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="navbar-home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-home" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-home" to="services">
                Services
              </Link>
            </li>
            
            <li>
            <a>
              <Link to="/login">Login</Link>
            </a>
            </li>

            {/*
            <li tabIndex="0">
              <a>
              Login
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
              
               <ul className="p-2 bg-base-200">
                <li>
                <Link to="/resident_login">Resident</Link>
                </li>
                <li>
                  <Link to="/manager_login">Manager/Admin</Link>
                </li>
                <li>
                  <Link to="/visitor/home">Visitor</Link>
                </li>
                
              </ul> 
            </li>*/}
            <li>
              <a className="navbar-home" href="http://sxy1729.uta.cloud/">
                Blog
              </a>
            </li>
            <li>
              <Link className="navbar-home" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="navbar-home" to="/visitor/home">
                Visitor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
