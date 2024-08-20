import React from "react";
import "./RemodelServices.css";
import remodelingBG from "../assets/remodelingBG.png";
import imageLeft from "../assets/remodelingLeft.png";
import imageRight from "../assets/remodelingRight.png";

const RemodelServices = () => {
  return (
    <div
      className="RemodelServices"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(11, 63, 88, 0.9), rgba(11, 63, 88, 0.9)), url(${remodelingBG})`,
      }}
    >
      <h1>Our Remodeling Services in Los Angeles</h1>
      <div className="services-container">
        <div className="service">
          <img
            src={imageLeft}
            alt="Kitchen Remodeling"
            className="service-image"
          />
          <h2>Kitchen Remodeling</h2>
          <p>
            Unlike other kitchen and bath remodeling contractors in L.A., we
            have a wide selection of cabinets, countertops, and flooring systems
            in stock for you to choose from.
          </p>
          <p>
            If you find yourself needing a little help taking your pick, our
            design specialists will be more than happy to assist you. We'll help
            you find the best possible products to complement your space. From
            there, our team of professionals will step in and install what
            you've chosen.
          </p>
          {/* <button className="explore-btn">Explore Kitchen Remodel</button> */}
        </div>
        <div className="service">
          <img
            src={imageRight}
            alt="Bathroom Remodeling"
            className="service-image"
          />
          <h2>Bathroom Remodeling</h2>
          <p>
            Choose from a wide selection of beautiful and elegant bathtubs,
            shower systems, vanity tops, and more. Our design specialists will
            work with you to come up with a plan for the bathroom of your
            dreams. Our expert team of installers will then make it a reality.
          </p>
          {/* <button className="explore-btn">Explore Bathroom Remodel</button> */}
        </div>
      </div>
    </div>
  );
};

export default RemodelServices;
