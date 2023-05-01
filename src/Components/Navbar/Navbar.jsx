import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__logo">
        <h1>Saif G.</h1>
      </div>
      <div className="navbar__list">
        <ul>
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__switch-theme">
        <BsFillMoonStarsFill className="icon__moon" />
      </div>
    </div>
  );
};

export default Navbar;
