import React from "react";
import arrow from "../assets/OurService/arrow.svg";
import { Link } from "react-router-dom";


const LearnMore = () => {
  return (
    <Link to={"/"}>
      <div className="OurService__sections-block">
        <div className="OurService__sections-learn">Learn more</div>
        <div className="OurService__sections-arrow">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
    </Link>
  );
};

export default LearnMore;
