import React, { useState, useRef, useEffect } from "react";
import { DownArrow1 } from "../../icons";
import { SevenBell1 } from "../../icons";
import logoImg from "../../assets/logo/image.png";

export function Navbar({ initialActive = "Home" }) {
  const [activeNavItem, setActiveNavItem] = useState(initialActive);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowNotifications(false);
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const navItems = ["Home", "About Us", "Location", "Health News", "Careers"];

  return (
    <header className="header" ref={wrapperRef}>
    
      <div className="header-left">
        <span
          className={`logo-home ${activeNavItem === "Home" ? "active" : ""}`}
          onClick={() => setActiveNavItem("Home")}
        >
          <img src={logoImg} alt="Clinically" className="logo-img" />
          Home
        </span>

        <nav className="nav-menu">
          {navItems.slice(1).map((item) => (
            <span
              key={item}
              className={`nav-item ${activeNavItem === item ? "active" : ""}`}
              onClick={() => setActiveNavItem(item)}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>


      <div className="header-right">
        <div
          className="notification"
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowUserMenu(false);
          }}
        >
          <SevenBell1 />
          {showNotifications && (
            <div className="notification-dropdown">
              <h4>Notifications</h4>
              <ul>
                <li>
                  <strong>Your appointment is confirmed</strong>
                  <br />
                  <small>Today at 3:00 PM</small>
                </li>
                <li>
                  <strong>Reminder: Upcoming appointment</strong>
                  <br />
                  <small>Tomorrow at 10:00 AM</small>
                </li>
                <li>
                  <strong>New health tips available</strong>
                  <br />
                  <small>2 days ago</small>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="user-menu-toggle"
          onClick={() => {
            setShowUserMenu(!showUserMenu);
            setShowNotifications(false);
          }}
        >
          <div className="avatar" />
          <span className="name">Ali</span>
          <DownArrow1 className={showUserMenu ? "rotated" : ""} />
          {showUserMenu && (
            <div className="user-dropdown">
              <div>Profile</div>
              <div>My Appointments</div>
              <div>Settings</div>
              <div className="logout">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
