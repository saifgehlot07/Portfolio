import React from "react";
import CurrentProjectLogo from "../../assets/logo_portfolio.png";
import { TiArrowRightOutline } from "react-icons/ti";

import "./CurrentProject.scss";

const CurrentProject = () => {
  return (
    <div className="current__project">
      <p>The project on which i'm currently working on</p>
      <div className="current__details">
        <div className="project__logo">
          <img src={CurrentProjectLogo} alt="Current Project Logo" />
        </div>
        <div className="project__content">
          <h2>Saif G. - Portfolio</h2>
        </div>
        <div className="project__preview">
          <TiArrowRightOutline className="preview__icon" />
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;
