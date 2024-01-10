import React from "react";
import { Link } from "react-router-dom";
import order from "../assets/OurService/order.svg";
import LearnMore from "./LearnMore";

const OrderManagement = () => {
  return (
    <div className="OurService-sections__order background texts">
      <Link to={"/"}>
        <div className="OurService-sections__svg SVG">
          <img src={order} alt="Order Management" />
        </div>
      </Link>
      <div className="OurService-sections__title">Order Management</div>
      <div className="OurService-sections__info">
        Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <LearnMore />
    </div>
  );
};

export default OrderManagement;
