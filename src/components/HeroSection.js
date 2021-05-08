import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./static/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>dhRuVa</h1>
      <p>The Astronomy and Astrophysics Club</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link="services"
        >
          Recuitment 2021
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
