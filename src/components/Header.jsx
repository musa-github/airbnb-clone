import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} alt="airbnb" />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
