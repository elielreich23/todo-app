import React, { useState } from "react";
import "./style.scss";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  const [username, setUsername] = useState("Vincent");
  return (
    <div style={{width:'100%'}}>
      <div className="header-container">
        <div className="header-content">
          <div className="text">
            Welcome back, {username} <span> 👋</span>
            {/* create a function to collect user name upon signup */}
          </div>
          <div className="HeaderRight">
            <div className="header-icons">
              <IoSearch />
              <FaRegBell />
              <AiOutlineCalendar />
              <span>
                {/* this will be change to a dynamic date picked from  */}
                {new Date().toDateString()}
              </span>
            </div>
            <div className="profile">
              <Link
                to="/profile"
                className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl"
              >
                <img src="/assets/Image.png" alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="subHeader">
        <div className="leftSide">
          <img src="/assets/rec.svg" alt="" />
          <h3>Board view</h3>
        </div>
        <div className="rightSi">
          <h3>Filter</h3>
          <h3>Sort</h3>
          <img src="/assets/More.svg" alt="" />
          <h1></h1>
        </div>
      </div>
    </div>
  );
};
