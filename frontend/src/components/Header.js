import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary justify-content-between">
      <div
        className="container-fluid p-1"
        style={{ backgroundColor: "darkblue" }}
      >
        <div className="ms-1">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            // onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          >
            {/* <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i> */}
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </span>
          <Sidebar />

          <Link className="navbar-brand ms-2" to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="Logo"
              width="36"
              height="36"
            />
            <small className="navbar-brand text-white fw-bold m-2">
              Elixir{" "}
              <small className="fst-italic" style={{ fontSize: "12px" }}>
                v3.0.1
              </small>
            </small>
          </Link>
        </div>
        <span
          className="navbar-brand text-white fw-bold"
          style={{ fontSize: "24px" }}
        >
          Cognizant
        </span>

        <div className="d-flex justify-content-end m-1">
          <span className="text-white fw-bold m-2">Veerappan Ramanathan</span>
          <img
            src={process.env.PUBLIC_URL + "/images/user_icon.jpg"}
            className="d-inline-block align-top dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            width={36}
            height={36}
            style={{ cursor: "pointer" }}
            alt=""
          />

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
