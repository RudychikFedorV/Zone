import React from "react";
import { Link } from "react-router-dom";
import s from "../assets/MetOurTeam/s.svg";
import i from "../assets/MetOurTeam/i.svg";
import t from "../assets/MetOurTeam/t.svg";
import f from "../assets/MetOurTeam/f.svg";

const MetOurTeamAcons = () => {
  return (
    <div className="MetOurTeam__acons">
      <Link to={"/"}>
        <img src={s} alt="Skype" title="Skype" />
      </Link>
      <Link to={"/"}>
        <img src={i} alt="Linkedin" title="Linkedin" />
      </Link>
      <Link to={"/"}>
        <img src={t} alt="Twitter" title="Twitter" />
      </Link>
      <Link to={"/"}>
        <img src={f} alt="Facebook" title="Facebook" />
      </Link>
    </div>
  );
};

export default MetOurTeamAcons;
