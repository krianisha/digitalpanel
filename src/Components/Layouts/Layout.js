import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import { BiSearch } from "react-icons/bi";
import css from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const [profileImage, setProfileImage] = useState("./profile.jpg");
  const [showDate, setShowDate] = useState(true); // State to control the visibility of date

  useEffect(() => {
    // Check screen width on component mount
    const handleResize = () => {
      setShowDate(window.innerWidth > 768); // Set showDate based on screen width
    };
    handleResize(); // Call the function on component mount

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    // Trigger file input click
    fileInputRef.current.click();
  };

  return (
    <div className={css.container}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <div className={css.profile}>
            <img src={profileImage} alt="" />
            {/* Button to trigger profile image change */}
            
            <div className={css.details}>
              <span>Kumari Anisha</span>
              <span id="name">anisha@gmail.com</span>
            </div>
          </div>
          {showDate && <span id="date">{moment().format("dddd, MMMM Do YYYY")}</span>}
        </div>
       
          <button className={css.changeImageButton} onClick={handleButtonClick}>
            Upload
          </button>
          {/* Hidden file input triggered by button click */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
       <br />
       <br />
      
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
