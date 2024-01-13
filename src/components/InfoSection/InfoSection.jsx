import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../ui/HeaderLogo";
import location from "../../assets/InfoSection/location.svg";
import calling from "../../assets/InfoSection/calling.svg";
import message from "../../assets/InfoSection/message.svg";

const InfoSection = () => {
  return (
    <div className="InfoSection">
      <div className="InfoSection__contacts">
        <HeaderLogo />
        <div className="InfoSection__contacts-location">
          <div className="InfoSection__contacts-img">
            <img src={location} alt="Location" />
          </div>
          <div className="InfoSection__contacts-info">Dhaka, Bangladesh</div>
        </div>

        <div className="InfoSection__contacts-calling">
          <div className="InfoSection__contacts-img">
            <img src={calling} alt="Calling" />
          </div>
          <div className="InfoSection__contacts-info">
            <Link to={"tel:0943833399"}>0943833399</Link>
          </div>
        </div>

        <div className="InfoSection__contacts-message">
          <div className="InfoSection__contacts-img">
            <img src={message} alt="Message" />
          </div>
          <div className="InfoSection__contacts-info">
            <Link to={"mailto:support@zone.com"}>support@zone.com</Link>
          </div>
        </div>
      </div>
      <div className="InfoSection__service"></div>
      <div className="InfoSection__company"></div>
      <div className="InfoSection__supports"></div>
      <div className="InfoSection__resources"></div>
    </div>
  );
};

export default InfoSection;
