import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
    const location = useLocation();
    let otherLocation = "";
    let otherName = "";

    if (location.pathname === "/projects") {
        otherLocation = "/contact";
        otherName = "contact";
    }
    else {
        otherLocation  = "/projects";
        otherName = "projects";
    }


  return (
    <header className="site-header">
      <div className="header-left">
        <h1 className="header-name">Evan <br></br>Haines</h1>
      </div>
      <div className="header-right">
        <nav>
          <Link to="/">home</Link>
          <Link to={otherLocation}>{otherName}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;