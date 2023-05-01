import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="about__main">
      <div className="about__detail">
        <div className="about__model">
          <div className="name__lable">
            <p>Hi 👋, I'm SaifGehlot </p>
          </div>
        </div>
        <div className="about__content">
          <h1>
            <span className="underline__text">About</span> Me
          </h1>
          <h2>I’m SaifGehlot | Frontend Dev</h2>
          <p>
            You can also call me Saif, I’m 15 yrs old, in 11th standard. At the
            age of 13 yrs I’ve been started learning programming and it’s
            probably 2 years i’m learning programming, I’ve a goal and that is
            to become an fullstack developer.
          </p>
          <p>
            I'm also trying to make an youtube channel where i will make videos
            on tutorials on how to make designs, and much more. So, subscribe to
            my youtube for helpfull videos. Be Healthy and Happy
          </p>
          <div className="about__buttons">
            <a href="">Get in touch</a>
            <a
              href="https://www.youtube.com/channel/UCxSn4WR2jSA5x52gUyOcAYQ"
              target="_blank"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
