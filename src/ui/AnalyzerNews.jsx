import React from "react";
import { Link } from "react-router-dom";
import analyzer from "../assets/OurService/analyzer.svg";
import LearnMore from "./LearnMore";

const AnalyzerNews = () => {
  return (
    <div className="OurService-sections__analyzer background texts">
      <Link to={"/"}>
        <div className="OurService-sections__svg SVG">
          <img src={analyzer} alt="Analyzer of the News" />
        </div>
      </Link>
      <div className="OurService-sections__title">Analyzer of the News</div>
      <div className="OurService-sections__info">
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <LearnMore />
    </div>
  );
};

export default AnalyzerNews;
