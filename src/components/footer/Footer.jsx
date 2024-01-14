import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-span"></div>
      <div className="Footer-sections">
        <div className="Footer-sections__text">
          © 2024 Zone. - All rights reserved.
        </div>
        <div className="Footer-sections__nav">
          <Link to={"/"}>
            <div className="Footer-sections__info">Privacy</div>
          </Link>
          <Link to={"/"}>
            <div className="Footer-sections__info">Security</div>
          </Link>
          <Link to={"/"}>
            <div className="Footer-sections__info">Terms</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
