import React from "react";
import AnalyzerNews from "../../ui/AnalyzerNews";
import CryptoPlatform from "../../ui/CryptoPlatform";
import ModuleNotification from "../../ui/ModuleNotification";

import OrderManagement from "../../ui/OrderManagement";
import SmartTrading from "../../ui/SmartTrading";
import SocialAssistant from "../../ui/SocialAssistant";

const OurService = () => {
  return (
    <div className="OurService">
      <div className="OurService__title">Our Service </div>
      <div className="OurService__informations">
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </div>
      <div className="OurService-sections">
        <OrderManagement />
        <SocialAssistant />
        <CryptoPlatform />
        <SmartTrading />
        <AnalyzerNews />
        <ModuleNotification />
      </div>
    </div>
  );
};

export default OurService;
