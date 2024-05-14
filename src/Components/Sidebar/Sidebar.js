import React, { useState, useEffect } from "react";
import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi"; // Import toggle icons

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showExpand, setShowExpand] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowExpand(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${css.container} ${expanded ? css.expanded : ""}`}>
      <img src="./logo.png" alt="Logo" className={css.logo} />

      <div className={css.menu}>
        {showExpand && (
          <button className={css.expandButton} onClick={toggleExpand}>
            {expanded ? <HiMenuAlt1 /> : <HiMenuAlt3 />} {/* Toggle icon */}
          </button>
        )}

        {(!showExpand || expanded) && (
          <>
            <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
              <MdSpaceDashboard size={30} />
            </NavLink>

            <NavLink to="calender" className={css.item} title="Calendar">
              <AiFillCalendar size={30} />
            </NavLink>

            <NavLink to="board" className={css.item} title="Trello board">
              <FaTasks size={30} />
            </NavLink>
            <NavLink to="users" className={css.item} title="Users">
              <AiOutlineTable size={30} />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
