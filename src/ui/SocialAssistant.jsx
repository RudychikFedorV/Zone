import React from "react";
import { Link } from "react-router-dom";
import social from "../assets/OurService/social.svg";
import LearnMore from "./LearnMore";

const SocialAssistant = () => {
  return (
    <div className="OurService-sections__social background texts">
      <Link to={"/"}>
        <div className="OurService-sections__svg SVG">
          <img src={social} alt="Social Assistant" />
        </div>
      </Link>
      <div className="OurService-sections__title">Social Assistant</div>
      <div className="OurService-sections__info">
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <LearnMore />
    </div>
  );
};

export default SocialAssistant;
