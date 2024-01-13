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

      <div className="InfoSection__service"></div>

      <div className="InfoSection__company"></div>

      <div className="InfoSection__supports"></div>

      <div className="InfoSection__resources"></div>
    </div>
  );
};

export default InfoSection;
