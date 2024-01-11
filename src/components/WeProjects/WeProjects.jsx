import React from "react";
import WeCompleteBlock from "../../ui/WeCompleteBlock";
import foto from "../../assets/WeProjects/foto.png";

const WeProjects = () => {
  return (
    <div className="WeComplete">
      <div className="WeComplete__sections">
        <WeCompleteBlock />
        <div className="WeComplete__img">
          <img src={foto} alt="foto" />
        </div>
      </div>
    </div>
  );
};

export default WeProjects;
