import React from "react";
import { Link } from "react-router-dom";
import order from "../../assets/OurService/order.svg";
import social from "../../assets/OurService/social.svg";
import crypto from "../../assets/OurService/crypto.svg";
import smart from "../../assets/OurService/smart.svg";
import analyzer from "../../assets/OurService/analyzer.svg";
import module from "../../assets/OurService/module.svg";
import LearnMore from "../../ui/LearnMore";

const OurService = () => {
  return (
    <div className="OurService">
      <div className="OurService__title">Our Service </div>
      <div className="OurService__informations">
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </div>
      <div className="OurService__sections">

        <div className="OurService__sections-order background">
          <Link to={"/"}>
            <div className="OurService__sections-svg1 svg">
              <img src={order} alt="Order Management" />
            </div>
          </Link>
          <div className="OurService__sections-title">Order Management</div>
          <div className="OurService__sections-info">
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </div>
          <LearnMore />
        </div>

        <div className="OurService__sections-social background">
          <Link to={"/"}>
            <div className="OurService__sections-svg2 svg">
              <img src={social} alt="Social Assistant" />
            </div>
          </Link>
          <div className="OurService__sections-title">Social Assistant</div>
          <div className="OurService__sections-info">
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </div>
          <LearnMore />
        </div>

        <div className="OurService__sections-crypto background">
          <Link to={"/"}>
            <div className="OurService__sections-svg3 svg">
              <img src={crypto} alt="Crypto Platform" />
            </div>
          </Link>
          <div className="OurService__sections-title">Crypto Platform</div>
          <div className="OurService__sections-info">
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </div>
          <LearnMore />
        </div>

        <div className="OurService__sections-smart background texts">
          <Link to={"/"}>
            <div className="OurService__sections-svg4 svg">
              <img src={smart} alt="Smart Trading Modules" />
            </div>
          </Link>
          <div className="OurService__sections-title">
            Smart Trading Modules
          </div>
          <div className="OurService__sections-info">
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </div>
          <LearnMore />
        </div>

        <div className="OurService__sections-analyzer background texts">
          <Link to={"/"}>
            <div className="OurService__sections-svg5 svg">
              <img src={analyzer} alt="Analyzer of the News" />
            </div>
          </Link>
          <div className="OurService__sections-title">Analyzer of the News</div>
          <div className="OurService__sections-info">
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </div>
          <LearnMore />
        </div>

        <div className="OurService__sections-module background">
          <Link to={"/"}>
            <div className="OurService__sections-svg6 svg">
              <img src={module} alt="Module of Price Notification" />
            </div>
          </Link>
          <div className="OurService__sections-title">
            Module of Price Notification
          </div>
          <div className="OurService__sections-info">
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </div>
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default OurService;
