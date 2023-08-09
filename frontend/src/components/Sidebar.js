import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import { Icon } from "@iconify/react";

const Sidebar = (props) => {
  const myPendingUpdatePkt = 1;

  const sidebarNavItems = [
    {
      display: "Dashboard",
      icon: <Icon icon="solar:home-outline" width="24" height="24" />,
      to: "/dashboard",
    },
    {
      display: "My Updates & PKT's",
      icon: <Icon icon="carbon:test-tool" width="24" height="24" />,
      to: "/mypendingtask",
      badge: (
        <span className=" ms-3 mt-2 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {myPendingUpdatePkt}
        </span>
      ),
    },
    {
      display: "Reporting",
      icon: <Icon icon="mdi:file-report-outline" width="24" height="24" />,
      to: "/report",
    },
  ];

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{ width: "20%" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Menu
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav text-start">
          {sidebarNavItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" aria-current="page" to={item.to}>
                <span className="sidebar-nav-icon">{item.icon}</span>
                <span className="sidebar-nav-name ms-2">{item.display}</span>
                {item.badge && myPendingUpdatePkt > 0 && (
                  <span className="position-relative">{item.badge}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
