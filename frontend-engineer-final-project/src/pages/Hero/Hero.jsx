import React from "react";
import { Image1 } from "../../assets/index";
import "./Hero.css";

const Hero = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="cta">
          <h1>Covid ID</h1>
          <p className="course-name">Monitoring Perkembangan Covid</p>
          <p className="course-name2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button href="#" className="vacin-btn">
            vaccine
          </button>
        </div>
        <img src={Image1} alt="" className="img-hero" />
      </div>
    </header>
  );
};

export default Hero;
