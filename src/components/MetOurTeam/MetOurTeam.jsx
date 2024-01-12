import React from "react";
import { Link } from "react-router-dom";
import sunny from "../../assets/MetOurTeam/sunny.png";
import alina from "../../assets/MetOurTeam/alina.png";
import alex from "../../assets/MetOurTeam/alex.png";
import afroza from "../../assets/MetOurTeam/afroza.png";
import MetOurTeamAcons from "../../ui/MetOurTeamAcons";

const MetOurTeam = () => {
  return (
    <div className="MetOurTeam">
      <div className="MetOurTeam__title">Met Our Team</div>
      <div className="MetOurTeam__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>
      <div className="MetOurTeam__sections">
        <div className="MetOurTeam__sunny background">
          <div className="MetOurTeam__sunny-img">
            <Link to={"/"}>
              <img src={sunny} alt="Sunny Khan" />
            </Link>
          </div>
          <div className="MetOurTeam__sunny-title">Sunny Khan</div>
          <div className="MetOurTeam__sunny-text">Executive officer</div>
          <MetOurTeamAcons />
        </div>

        <div className="MetOurTeam__alina background">
          <div className="MetOurTeam__alina-img">
            <Link to={"/"}>
              <img src={alina} alt="Alina Jesia" />
            </Link>
          </div>
          <div className="MetOurTeam__alina-title">Alina Jesia</div>
          <div className="MetOurTeam__alina-text">UX/UI DESIGNER</div>
          <MetOurTeamAcons />
        </div>

        <div className="MetOurTeam__alex background">
          <div className="MetOurTeam__alex-img">
            <Link to={"/"}>
              <img src={alex} alt="Alex Sohag" />
            </Link>
          </div>
          <div className="MetOurTeam__alex-title">Alex Sohag</div>
          <div className="MetOurTeam__alex-text">BUSINESS DEVELOPMENT</div>
          <MetOurTeamAcons />
        </div>

        <div className="MetOurTeam__afroza background">
          <div className="MetOurTeam__afroza-img">
            <Link to={"/"}>
              <img src={afroza} alt="Afroza Mou" />
            </Link>
          </div>
          <div className="MetOurTeam__afroza-title">Afroza Mou</div>
          <div className="MetOurTeam__afroza-text">Head of marketing</div>
          <MetOurTeamAcons />
        </div>
      </div>
    </div>
  );
};

export default MetOurTeam;
