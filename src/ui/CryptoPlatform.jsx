import React from "react";
import { Link } from "react-router-dom";
import crypto from "../assets/OurService/crypto.svg";
import LearnMore from "./LearnMore";

const CryptoPlatform = () => {
  return (
    <div className="OurService-sections__crypto background texts">
      <Link to={"/"}>
        <div className="OurService-sections__svg SVG">
          <img src={crypto} alt="Crypto Platform" />
        </div>
      </Link>
      <div className="OurService-sections__title">Crypto Platform</div>
      <div className="OurService-sections__info">
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <LearnMore />
    </div>
  );
};

export default CryptoPlatform;
