import React from "react";
import "./Values.css";
import { CheckCircle2 } from "lucide-react";

const Values = () => {
  return (
    <div className="values-container">
      <div className="values-content">
        <h2 className="values-title">
          Work with L.A.'s Best Kitchen and Bath Remodelers
        </h2>
        <div className="values-list">
          <div className="value-item">
            {/* <CheckCircle2 className="check-icon" /> */}
            <div className="value-content">
              <h3>Family Values</h3>
              <p>
                It's a fact that our services are quick, convenient, and
                competitively priced. However, what makes us a trusted kitchen
                and bath remodeling company in L.A. is how we run the company
                like the family that we are. We value integrity, transparency,
                reliability, and our customers' absolute satisfaction.
              </p>
            </div>
          </div>
          <div className="value-item">
            {/* <CheckCircle2 className="check-icon" /> */}
            <div className="value-content">
              <h3>More than the Warranty</h3>
              <p>
                Get absolute assurance that your new space is built to the
                highest standards. Our clients enjoy peace of mind knowing that
                they are protected by our{" "}
                <span className="highlight">Triple Guarantee</span> on top of
                our manufacturers' product warranties.
              </p>
            </div>
          </div>
          <div className="value-item">
            {/* <CheckCircle2 className="check-icon" /> */}
            <div className="value-content">
              <h3>All Your Remodeling Needs</h3>
              <p>
                You don't have to worry about a single thing. Once you approve
                of the design, we'll source the materials, expertly install
                everything, and complete the project within the time we agreed
                upon. We also offer flexible financing options.
              </p>
            </div>
          </div>
        </div>
        {/* <button className="contact-button">Contact Us Now</button> */}
      </div>
    </div>
  );
};

export default Values;
