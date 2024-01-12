import React from "react";
import { Link } from "react-router-dom";
import s from "../assets/MetOurTeam/s.svg";
import i from "../assets/MetOurTeam/i.svg";
import t from "../assets/MetOurTeam/t.svg";
import f from "../assets/MetOurTeam/f.svg";

const MetOurTeamAcons = () => {
  return (
    <div className="MetOurTeam__acons">
      <Link to={"/"}><img src={s} alt="Skype" /></Link>
      <Link to={"/"}><img src={i} alt="Linkedin" /></Link>
      <Link to={"/"}><img src={t} alt="twitter" /></Link>
      <Link to={"/"}><img src={f} alt="Facebook" /></Link>
    </div>
  );
};

export default MetOurTeamAcons;
