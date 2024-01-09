import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../ui/HeaderLogo";

const Header = () => {
  return (
    <div className="zone-header">
      <HeaderLogo />
      <div className="zone-header__navigation">
        <Link to={"/"} className="color">Home</Link>
        <Link to={"/"} className="color">About Us</Link>
        <Link to={"/"} className="color">Service</Link>
        <Link to={"/"} className="color">Pricing</Link>
        <Link to={"/"} className="color">Blog</Link>
        <Link to={"/"} className="btn color">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
