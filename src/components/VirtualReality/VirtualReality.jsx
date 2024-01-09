import React from "react";
import { Link } from "react-router-dom";
import play from "../../assets/VirtualReality/play.svg";
import img from "../../assets/VirtualReality/virtualReality.png";

const VirtualReality = () => {
  return (
    <div className="VirtualReality">
      <div className="VirtualReality__blocks">
        <div className="VirtualReality__title">
          Virtual Reality Business Solutions
        </div>
        <div className="VirtualReality__info">
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
          <div className="VirtualReality__block">
            <Link to={"/"}>
              <div className="VirtualReality__button btn">Join Us</div>
            </Link>
            <Link to={"/"}>
              <div className="VirtualReality__play">
                <img src={play} alt="Watch video" />
              </div>
            </Link>
            <div className="VirtualReality__video">Watch video</div>
          </div>
        </div>
      </div>
      <div className="VirtualReality__img">
        <img src={img} alt="Virtual Reality" />
      </div>
    </div>
  );
};

export default VirtualReality;
