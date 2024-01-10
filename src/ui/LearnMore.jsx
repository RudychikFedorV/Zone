import React from "react";
import arrow from "../assets/OurService/arrow.svg";
import { Link } from "react-router-dom";


const LearnMore = () => {
  return (
    <Link to={"/"}>
      <div className="OurService-sections__block">
        <div className="OurService-sections__learn">Learn more</div>
        <div className="OurService-sections__arrow">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
    </Link>
  );
};

export default LearnMore;
