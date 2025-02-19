import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="home-page1">
      <div className="navbar">
        <div className="nav-item active" title="Home">
          <a href="/">
          <i className="fa fa-home"></i> <br />
          <span>Home</span></a>
        </div>
        <div className="nav-item" title="Searching page">
          <a href="/search"><i className="fa fa-search"></i> <br />
          <span>Search</span></a>
        </div>
        <div className="nav-item" title="My Messages">
          <a href="/inbox"><i className="fa fa-inbox"></i> <br />
          <span>Inbox</span></a>
        </div>
        <div className="nav-item" title="My Messages">
          <a href="/profile"><i className="fa fa-user"></i> <br />
          <span>Inbox</span></a>
        </div>
      </div>
   </div>
  );
};

export default Navbar;
