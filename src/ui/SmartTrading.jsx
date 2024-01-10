import React from "react";
import { Link } from "react-router-dom";
import smart from "../assets/OurService/smart.svg";
import LearnMore from "./LearnMore";

const SmartTrading = () => {
  return (
    <div className="OurService-sections__smart background texts">
      <Link to={"/"}>
        <div className="OurService-sections__svg SVG">
          <img src={smart} alt="Smart Trading Modules" />
        </div>
      </Link>
      <div className="OurService-sections__title">Smart Trading Modules</div>
      <div className="OurService-sections__info">
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <LearnMore />
    </div>
  );
};

export default SmartTrading;
