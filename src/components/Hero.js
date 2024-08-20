import React from "react";
import "./Hero.css";
import HeroKitchen from "../assets/HeroKitchen.png";
import badges from "../assets/badges.png";

export const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
        <div className="container">
          <div className="content">
            <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
            <p>
              Get the kitchen and bathroom of your dreams from LA's trusted
              kitchen remodeling contractor. Backed by more than 35 years of
              experience, we will make sure your space features style, function,
              and flair.
            </p>
            <ul className="features">
              <li>Family Owned & Operated Since 1985</li>
              <li>Zero Payments/Zero Interest until 2025</li>
              <li>Licensed and Insured</li>
              <li>Same-Day Savings</li>
              <li>More Choices. More Care. More Value.</li>
            </ul>
            {/* <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="score">4.7</span>
            </div> */}
            <div className="badges">
              <img src={badges} alt="100% Guaranteed" />
              {/* <img src="/path-to-zero-interest-badge.png" alt="Zero Interest" />
              <img src="/path-to-zero-payments-badge.png" alt="Zero Payments" /> */}
              {/* <div>100% Guaranteed</div>
              <div>Zero Interest</div>
              <div>Zero Payments</div> */}
              {/* <img src="/" alt="100% Guaranteed" />
              <img src="/" alt="Zero Interest" />
              <img src="/" alt="Zero Payments" /> */}
            </div>
            <div className="">
              Schedule Your Complimentary Consultation Today
            </div>
          </div>
        </div>
      </div>
      <div className="hero-angle"></div>
    </div>
  );
};
