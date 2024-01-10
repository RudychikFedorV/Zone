import React from "react";
import arrow from "../assets/OurService/arrow.svg";


const LearnMore = () => {
  return (
    <div className="OurService-sections__block">
      <div className="OurService-sections__learn">Learn more</div>
      <div className="OurService-sections__arrow">
        <img src={arrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default LearnMore;
