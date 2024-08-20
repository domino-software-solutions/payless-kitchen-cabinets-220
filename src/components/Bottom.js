// import React from "react";
// import "./Bottom.css";
// import bottomImg from "../assets/bottomImg.png";
// import { CheckCircle } from "lucide-react";

// const Bottom = () => {
//   return (
//     <div className="bottom-container">
//       <div className="bottom-content">
//         <h1>
//           Your Los Angeles Kitchen and Bath
//           <br />
//           Remodeling Company of Choice
//         </h1>
//         <p>
//           Since 1985, we've helped over 33,000 homeowners across Los Angeles and
//           Southern California with their remodeling needs, building beautiful
//           spaces and lasting relationships.
//         </p>
//         <ul className="feature-list">
//           <li>
//             <CheckCircle size={12} /> Local Family Business
//           </li>
//           <li>
//             <CheckCircle size={12} /> Convenient One-stop Shop
//           </li>
//           <li>
//             <CheckCircle size={12} /> Stress-free Remodeling Experience
//           </li>
//           <li>
//             <CheckCircle size={12} /> Expert Designers and Installers
//           </li>
//           <li>
//             <CheckCircle size={12} /> Licensed CA Contractor
//           </li>
//           <li>
//             <CheckCircle size={12} /> BBB-Accredited (A+ Rating)
//           </li>
//           <li>
//             <CheckCircle size={12} /> $2,000,000 Liability Insurance
//           </li>
//           <li>
//             <CheckCircle size={12} /> Satisfaction Triple-Guaranteed
//           </li>
//         </ul>
//       </div>
//       <div className="bottom-image">
//         <img src={bottomImg} alt="Kitchen remodel example" />
//       </div>
//     </div>
//   );
// };

// export default Bottom;
import React from "react";
import "./Bottom.css";
import bottomImg from "../assets/bottomImg.png";
import { CheckCircle } from "lucide-react";

const Bottom = () => {
  return (
    <div className="bottom-container">
      <div className="bottom-content">
        <h1>Your Los Angeles Kitchen and Bath Remodeling Company of Choice</h1>
        <p>
          Since 1985, we've helped over 33,000 homeowners across Los Angeles and
          Southern California with their remodeling needs, building beautiful
          spaces and lasting relationships.
        </p>
        <ul className="feature-list">
          <li>
            <CheckCircle size={12} /> <span>Local Family Business</span>
          </li>
          <li>
            <CheckCircle size={12} /> <span>Convenient One-stop Shop</span>
          </li>
          <li>
            <CheckCircle size={12} />{" "}
            <span>Stress-free Remodeling Experience</span>
          </li>
          <li>
            <CheckCircle size={12} />{" "}
            <span>Expert Designers and Installers</span>
          </li>
          <li>
            <CheckCircle size={12} /> <span>Licensed CA Contractor</span>
          </li>
          <li>
            <CheckCircle size={12} /> <span>BBB-Accredited (A+ Rating)</span>
          </li>
          <li>
            <CheckCircle size={12} />{" "}
            <span>$2,000,000 Liability Insurance</span>
          </li>
          <li>
            <CheckCircle size={12} />{" "}
            <span>Satisfaction Triple-Guaranteed</span>
          </li>
        </ul>
      </div>
      <div className="bottom-image">
        <img src={bottomImg} alt="Kitchen remodel example" />
      </div>
    </div>
  );
};

export default Bottom;
