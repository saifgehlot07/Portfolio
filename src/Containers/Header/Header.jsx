import React from "react";
import CurrentProject from "../../Components/CurrentProject/CurrentProject";
import Navbar from "../../Components/Navbar/Navbar";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__main">
      <Navbar />
      <div className="header__content container">
        <h2>A Passionate</h2>
        <h1>
          Web <span className="text__underline">Developer</span> &{" "}
          <span className="text__bold">Designer</span>
        </h1>
        <p>
          Hello, I’m SaifGehlot a Passionate frontend developer from india. My
          hobbies are to play football, programming, and playing games. want to
          know more about me go to about page.
        </p>
      </div>
      <CurrentProject />
      <div className="header__buttons">
        <button>Hire Me</button>
        <span></span>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Header;
