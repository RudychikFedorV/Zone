import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/header/logo.svg";

const HeaderLogo = () => {
  return (
    <Link to={"/"}>
      <div className="zone-header__logo">
        <div className="zone-header__img">
          <img src={img} alt="Logo" />
        </div>
        <div className="zone-header__zone">Zone.</div>
      </div>
    </Link>
  );
};

export default HeaderLogo;
