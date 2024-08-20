// import React from "react";
// import "./Footer.css";
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FiPhone, FiMail } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">
//           <h1>
//             Payless <span>Kitchen Cabinets</span>
//           </h1>
//         </div>
//         <div className="footer-contact">
//           <a href="tel:+18664820919">
//             <FiPhone /> (866) 482-0919
//           </a>
//           <a href="mailto:info@paylesskitchencabinets.com">
//             <FiMail /> info@paylesskitchencabinets.com
//           </a>
//         </div>
//         <nav className="footer-nav">
//           <a href="/kitchen-remodeling">Kitchen Remodeling</a>
//           <a href="/bathroom-remodeling">Bathroom Remodeling</a>
//           <a href="/cabinet-installation">Cabinet Installation</a>
//           <a href="/safety-accessibility">Safety & Accessibility</a>
//           <a href="/resources">Resources</a>
//           <a href="/about-us">About Us</a>
//           <a href="/support">Support / Help</a>
//         </nav>
//         <div className="footer-social">
//           <a href="https://facebook.com">
//             <FaFacebook />
//           </a>
//           <a href="https://twitter.com">
//             <FaTwitter />
//           </a>
//           <a href="https://instagram.com">
//             <FaInstagram />
//           </a>
//           <a href="https://youtube.com">
//             <FaYoutube />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>
            Payless <span>Kitchen Cabinets</span>
          </h1>
        </div>
        <div className="footer-info">
          <div className="footer-contact">
            <a href="tel:+18664820919">
              <FiPhone /> <span>(866) 482-0919</span>
            </a>
            <a href="mailto:info@paylesskitchencabinets.com">
              <FiMail /> <span>info@paylesskitchencabinets.com</span>
            </a>
          </div>
          <nav className="footer-nav">
            {/* <a href="/kitchen-remodeling">Kitchen Remodeling</a>
            <a href="/bathroom-remodeling">Bathroom Remodeling</a>
            <a href="/cabinet-installation">Cabinet Installation</a>
            <a href="/safety-accessibility">Safety & Accessibility</a>
            <a href="/resources">Resources</a>
            <a href="/about-us">About Us</a>
            <a href="/support">Support / Help</a> */}
          </nav>
          <div className="footer-social">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://youtube.com">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
