import React, { useState, useRef, useEffect } from "react";
import { DownArrow1 } from "../../icons/DownArrow1";
import { SevenBell1 } from "../../icons/SevenBell1";
import {SearchForm} from "./sections/SearchForm";
import {Frame} from "./sections/Frame";
import {Footer} from "./sections/Footer";

export const Appointment = () => {
  const [activeNavItem, setActiveNavItem] = useState("About Us");
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

  return (
    <div className="wrapper" ref={wrapperRef}>
      <header className="header">
        <span 
          className={`logo-home ${activeNavItem==="Home"?"active":""}`} 
          onClick={()=>setActiveNavItem("Home")}
        >
          Home
        </span>

        <nav className="nav-menu">
          {["About Us", "Location", "Health News", "Careers"].map(item => (
            <span
              key={item}
              className={`nav-item ${activeNavItem===item?"active":""}`}
              onClick={()=>setActiveNavItem(item)}
            >
              {item}
            </span>
          ))}
        </nav>

        <div 
          className="notification" 
          onClick={()=>{ setShowNotifications(!showNotifications); setShowUserMenu(false); }}
        >
          <SevenBell1 />
          {showNotifications && (
            <div className="notification-dropdown">
              <h4>Notifications</h4>
              <ul>
                <li><strong>Your appointment is confirmed</strong><br/><small>Today at 3:00 PM</small></li>
                <li><strong>Reminder: Upcoming appointment</strong><br/><small>Tomorrow at 10:00 AM</small></li>
                <li><strong>New health tips available</strong><br/><small>2 days ago</small></li>
              </ul>
            </div>
          )}
        </div>

        <div 
          className="user-menu-toggle" 
          onClick={()=>{ setShowUserMenu(!showUserMenu); setShowNotifications(false); }}
        >
          <div className="avatar" />
          <span className="name">Ali</span>
          <DownArrow1 className={showUserMenu?"rotated":""} />
          {showUserMenu && (
            <div className="user-dropdown">
              <div>Profile</div>
              <div>My Appointments</div>
              <div>Settings</div>
              <div className="logout">Logout</div>
            </div>
          )}
        </div>
      </header>
      <section className="page-title">
        <h1 className="title">Appointment Search</h1>
        <p className="subtitle">Search for available appointments!</p>
      </section>
      <SearchForm />
      <section className="frame-section">
        <Frame />
         <img
       className="extra-image"
       src="https://c.animaapp.com/mbnr5pdsVsuJRZ/img/rectangle-31.png"
       alt="Doctor"
    />
      </section>
      <Footer />
    </div>
  );
};


