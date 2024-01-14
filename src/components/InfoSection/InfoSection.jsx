import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../ui/HeaderLogo";
import location from "../../assets/InfoSection/location.svg";
import calling from "../../assets/InfoSection/calling.svg";
import message from "../../assets/InfoSection/message.svg";
import icons from "../../assets/InfoSection/icons.svg";

const InfoSection = () => {
  return (
    <div className="InfoSection">
      <div className="InfoSection-contacts">
        <div className="InfoSection-contacts__logo">
          <HeaderLogo />
        </div>
        <div className="InfoSection-contacts__location">
          <div className="InfoSection-contacts__img">
            <img src={location} alt="Location" />
          </div>
          <div className="InfoSection-contacts__info">Dhaka, Bangladesh</div>
        </div>

        <div className="InfoSection-contacts__location">
          <div className="InfoSection-contacts__img">
            <img src={calling} alt="Calling" />
          </div>
          <Link to={"tel:0943833399"}>
            <div className="InfoSection-contacts__info">0943833399</div>
          </Link>
        </div>

        <div className="InfoSection-contacts__location">
          <div className="InfoSection-contacts__img">
            <img src={message} alt="Message" />
          </div>
          <Link to={"mailto:support@zone.com"}>
            <div className="InfoSection-contacts__info">support@zone.com</div>
          </Link>
        </div>

        <div className="InfoSection-contacts__block">
          <Link to={"/"}>
            <img src={icons} alt="Icons" />
          </Link>
        </div>
      </div>

      <div className="InfoSection-sections">
        <Link to={"/"}><div className="InfoSection-sections__texts">Service</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Order Management</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Social Assistant</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Crypto Platform</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Analyzer of the News</div></Link>
      </div>

      <div className="InfoSection-sections">
        <Link to={"/"}><div className="InfoSection-sections__texts">Company</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">About Us</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">News</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Our trusted partner</div></Link>
        <Link to={"/"}> <div className="InfoSection-sections__text">New users FAQ</div></Link>
      </div>

      <div className="InfoSection-sections">
        <Link to={"/"}><div className="InfoSection-sections__texts">Supports</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Help center</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Feedbcak</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Contact us</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Terms conditins</div></Link>
      </div>

      <div className="InfoSection-sections">
        <Link to={"/"}><div className="InfoSection-sections__texts">Resources</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Download app</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Blog</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">What’s new</div></Link>
        <Link to={"/"}><div className="InfoSection-sections__text">Sitemap</div></Link>
      </div>
    </div>
  );
};

export default InfoSection;
