import React from 'react'
import { Link } from "react-router-dom";
import LearnMore from './LearnMore'
import module from "../assets/OurService/module.svg";

const ModuleNotification = () => {
  return (
    <div className="OurService-sections__module background texts">
      <Link to={"/"}>
        <div className="OurService-sections__svg SVG">
          <img src={module} alt="Module of Price Notification" />
        </div>
      </Link>
      <div className="OurService-sections__title">Module of Price Notification</div>
      <div className="OurService-sections__info">
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <LearnMore />
    </div>
  )
}

export default ModuleNotification