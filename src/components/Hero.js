// // // // // // import React from "react";
// // // // // // import "./Hero.css";
// // // // // // import HeroKitchen from "../assets/HeroKitchen.png";
// // // // // // import badges from "../assets/badges.png";

// // // // // // export const Hero = () => {
// // // // // //   return (
// // // // // //     <div className="hero-wrapper">
// // // // // //       <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
// // // // // //         <div className="container">
// // // // // //           <div className="content">
// // // // // //             <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
// // // // // //             <p>
// // // // // //               Get the kitchen and bathroom of your dreams from LA's trusted
// // // // // //               kitchen remodeling contractor. Backed by more than 35 years of
// // // // // //               experience, we will make sure your space features style, function,
// // // // // //               and flair.
// // // // // //             </p>
// // // // // //             <ul className="features">
// // // // // //               <li>Family Owned & Operated Since 1985</li>
// // // // // //               <li>Zero Payments/Zero Interest until 2025</li>
// // // // // //               <li>Licensed and Insured</li>
// // // // // //               <li>Same-Day Savings</li>
// // // // // //               <li>More Choices. More Care. More Value.</li>
// // // // // //             </ul>
// // // // // //             {/* <div className="rating">
// // // // // //               <span className="stars">★★★★★</span>
// // // // // //               <span className="score">4.7</span>
// // // // // //             </div> */}
// // // // // //             <div className="badges">
// // // // // //               <img src={badges} alt="100% Guaranteed" />
// // // // // //               {/* <img src="/path-to-zero-interest-badge.png" alt="Zero Interest" />
// // // // // //               <img src="/path-to-zero-payments-badge.png" alt="Zero Payments" /> */}
// // // // // //               {/* <div>100% Guaranteed</div>
// // // // // //               <div>Zero Interest</div>
// // // // // //               <div>Zero Payments</div> */}
// // // // // //               {/* <img src="/" alt="100% Guaranteed" />
// // // // // //               <img src="/" alt="Zero Interest" />
// // // // // //               <img src="/" alt="Zero Payments" /> */}
// // // // // //             </div>
// // // // // //             <div className="">
// // // // // //               Schedule Your Complimentary Consultation Today
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div className="hero-angle"></div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // ************ With form below ************************************************************************
// // // // // import React from "react";
// // // // // import "./Hero.css";
// // // // // import HeroKitchen from "../assets/HeroKitchen.png";
// // // // // import badges from "../assets/badges.png";

// // // // // export const Hero = () => {
// // // // //   return (
// // // // //     <div className="hero-wrapper">
// // // // //       <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
// // // // //         <div className="container">
// // // // //           <div className="content">
// // // // //             <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
// // // // //             <p>
// // // // //               Get the kitchen and bathroom of your dreams from LA's trusted
// // // // //               kitchen remodeling contractor. Backed by more than 35 years of
// // // // //               experience, we will make sure your space features style, function,
// // // // //               and flair.
// // // // //             </p>
// // // // //             <ul className="features">
// // // // //               <li>Family Owned & Operated Since 1985</li>
// // // // //               <li>Zero Payments/Zero Interest until 2025</li>
// // // // //               <li>Licensed and Insured</li>
// // // // //               <li>Same-Day Savings</li>
// // // // //               <li>More Choices. More Care. More Value.</li>
// // // // //             </ul>
// // // // //             <div className="rating">
// // // // //               <span className="stars">★★★★★</span>
// // // // //               <span className="score">4.7</span>
// // // // //             </div>
// // // // //             <div className="badges">
// // // // //               <img src={badges} alt="Zero Interest" />
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="form-container">
// // // // //             <h2>Schedule Your Complimentary Consultation</h2>
// // // // //             <p>
// // // // //               Fill out the form so we can start planning your remodel. One of
// // // // //               our friendly coordinators will be in touch to book your
// // // // //               consultation.
// // // // //             </p>
// // // // //             <p>Our estimates are complimentary and obligation-free.</p>
// // // // //             <form>
// // // // //               <div className="form-row">
// // // // //                 <input type="text" placeholder="First Name*" required />
// // // // //                 <input type="text" placeholder="Last Name*" required />
// // // // //               </div>
// // // // //               <div className="form-row">
// // // // //                 <input type="tel" placeholder="Mobile*" required />
// // // // //                 <input type="tel" placeholder="Alternate Phone Number" />
// // // // //               </div>
// // // // //               <input type="email" placeholder="Email*" required />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Project Street Address *"
// // // // //                 required
// // // // //               />
// // // // //               <div className="form-row">
// // // // //                 <input type="text" placeholder="City*" required />
// // // // //                 <select required>
// // // // //                   <option value="">State*</option>
// // // // //                   {/* Add state options here */}
// // // // //                 </select>
// // // // //               </div>
// // // // //               <input type="text" placeholder="Zip Code*" required />
// // // // //               <textarea
// // // // //                 placeholder="Please Briefly Describe Your Project *"
// // // // //                 required
// // // // //               ></textarea>
// // // // //               <div className="form-checkbox">
// // // // //                 <input type="checkbox" id="consent" required />
// // // // //                 <label htmlFor="consent">
// // // // //                   By submitting this form, I authorize Payless Kitchen Cabinets
// // // // //                   & Bath Makeover to contact me by phone at the number provided
// // // // //                   above, including mobile phone, email or mail data using
// // // // //                   automatic dialing equipment to give me information about
// // // // //                   remodeling. Consent is not required as a condition of making a
// // // // //                   purchase.
// // // // //                 </label>
// // // // //               </div>
// // // // //               <button type="submit" className="submit-btn">
// // // // //                 SUBMIT
// // // // //               </button>
// // // // //             </form>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // import React, { useState } from "react";
// // // // import axios from "axios";
// // // // import "./Hero.css";
// // // // import HeroKitchen from "../assets/HeroKitchen.png";
// // // // import badges from "../assets/badges.png";

// // // // export const Hero = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     firstname: "",
// // // //     lastname: "",
// // // //     address1: "",
// // // //     city: "",
// // // //     state: "",
// // // //     zip: "",
// // // //     phone1: "",
// // // //     phone2: "",
// // // //     email: "",
// // // //     productid: "Kit", // Default to Kitchen, can be changed to "Bath" if needed
// // // //     notes: "",
// // // //   });

// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [submitError, setSubmitError] = useState(null);
// // // //   const [submitSuccess, setSubmitSuccess] = useState(false);

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitting(true);
// // // //     setSubmitError(null);
// // // //     setSubmitSuccess(false);

// // // //     try {
// // // //       // LeadPerfection submission
// // // //       const leadPerfectionParams = new URLSearchParams({
// // // //         ...formData,
// // // //         sender: "Payless Kitchen Cabinets", // Replace with your actual sender name
// // // //         srs_id: "123", // Replace with your actual SRS_ID
// // // //         "source-sub": "Hibu", // Replace with your actual source-sub
// // // //       });

// // // //       const response = await axios.post(
// // // //         "/batch/addleads.asp",
// // // //         leadPerfectionParams,
// // // //         {
// // // //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
// // // //         }
// // // //       );

// // // //       if (response.data !== "[OK]") {
// // // //         throw new Error("Unexpected response from LeadPerfection API");
// // // //       }

// // // //       // Hatch submission would go here, but it needs to be handled by a backend service
// // // //       // to avoid CORS issues. For now, we'll just log a message.
// // // //       console.log("Would submit to Hatch here in production environment");

// // // //       setSubmitSuccess(true);
// // // //       setFormData({
// // // //         firstname: "",
// // // //         lastname: "",
// // // //         address1: "",
// // // //         city: "",
// // // //         state: "",
// // // //         zip: "",
// // // //         phone1: "",
// // // //         phone2: "",
// // // //         email: "",
// // // //         productid: "Kit",
// // // //         notes: "",
// // // //       });
// // // //     } catch (error) {
// // // //       setSubmitError(
// // // //         "An error occurred while submitting the form. Please try again."
// // // //       );
// // // //       console.error("Form submission error:", error);
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="hero-wrapper">
// // // //       <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
// // // //         <div className="container">
// // // //           <div className="content">
// // // //             <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
// // // //             <p>
// // // //               Get the kitchen and bathroom of your dreams from LA's trusted
// // // //               kitchen remodeling contractor. Backed by more than 35 years of
// // // //               experience, we will make sure your space features style, function,
// // // //               and flair.
// // // //             </p>
// // // //             <ul className="features">
// // // //               <li>Family Owned & Operated Since 1985</li>
// // // //               <li>Zero Payments/Zero Interest until 2025</li>
// // // //               <li>Licensed and Insured</li>
// // // //               <li>Same-Day Savings</li>
// // // //               <li>More Choices. More Care. More Value.</li>
// // // //             </ul>
// // // //             <div className="rating">
// // // //               <span className="stars">★★★★★</span>
// // // //               <span className="score">4.7</span>
// // // //             </div>
// // // //             <div className="badges">
// // // //               <img src={badges} alt="Zero Interest" />
// // // //             </div>
// // // //           </div>
// // // //           <div className="form-container">
// // // //             <h2>Schedule Your Complimentary Consultation</h2>
// // // //             <p>
// // // //               Fill out the form so we can start planning your remodel. One of
// // // //               our friendly coordinators will be in touch to book your
// // // //               consultation.
// // // //             </p>
// // // //             <p>Our estimates are complimentary and obligation-free.</p>
// // // //             <form onSubmit={handleSubmit}>
// // // //               <div className="form-row">
// // // //                 <input
// // // //                   type="text"
// // // //                   name="firstname"
// // // //                   placeholder="First Name*"
// // // //                   required
// // // //                   value={formData.firstname}
// // // //                   onChange={handleInputChange}
// // // //                 />
// // // //                 <input
// // // //                   type="text"
// // // //                   name="lastname"
// // // //                   placeholder="Last Name*"
// // // //                   required
// // // //                   value={formData.lastname}
// // // //                   onChange={handleInputChange}
// // // //                 />
// // // //               </div>
// // // //               <div className="form-row">
// // // //                 <input
// // // //                   type="tel"
// // // //                   name="phone1"
// // // //                   placeholder="Mobile*"
// // // //                   required
// // // //                   value={formData.phone1}
// // // //                   onChange={handleInputChange}
// // // //                 />
// // // //                 <input
// // // //                   type="tel"
// // // //                   name="phone2"
// // // //                   placeholder="Alternate Phone Number"
// // // //                   value={formData.phone2}
// // // //                   onChange={handleInputChange}
// // // //                 />
// // // //               </div>
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email*"
// // // //                 required
// // // //                 value={formData.email}
// // // //                 onChange={handleInputChange}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 name="address1"
// // // //                 placeholder="Project Street Address *"
// // // //                 required
// // // //                 value={formData.address1}
// // // //                 onChange={handleInputChange}
// // // //               />
// // // //               <div className="form-row">
// // // //                 <input
// // // //                   type="text"
// // // //                   name="city"
// // // //                   placeholder="City*"
// // // //                   required
// // // //                   value={formData.city}
// // // //                   onChange={handleInputChange}
// // // //                 />
// // // //                 {/* <select
// // // //                   name="state"
// // // //                   required
// // // //                   value={formData.state}
// // // //                   onChange={handleInputChange}
// // // //                 >
// // // //                   <option value="">State*</option>

// // // //                 </select> */}
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="zip"
// // // //                 placeholder="Zip Code*"
// // // //                 required
// // // //                 value={formData.zip}
// // // //                 onChange={handleInputChange}
// // // //               />
// // // //               <textarea
// // // //                 name="notes"
// // // //                 placeholder="Please Briefly Describe Your Project *"
// // // //                 required
// // // //                 value={formData.notes}
// // // //                 onChange={handleInputChange}
// // // //               ></textarea>
// // // //               <div className="form-checkbox">
// // // //                 <input type="checkbox" id="consent" required />
// // // //                 <label htmlFor="consent">
// // // //                   By submitting this form, I authorize Payless Kitchen Cabinets
// // // //                   & Bath Makeover to contact me by phone at the number provided
// // // //                   above, including mobile phone, email or mail data using
// // // //                   automatic dialing equipment to give me information about
// // // //                   remodeling. Consent is not required as a condition of making a
// // // //                   purchase.
// // // //                 </label>
// // // //               </div>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="submit-btn"
// // // //                 disabled={isSubmitting}
// // // //               >
// // // //                 {isSubmitting ? "Submitting..." : "SUBMIT"}
// // // //               </button>
// // // //               {submitError && <p className="error-message">{submitError}</p>}
// // // //               {submitSuccess && (
// // // //                 <p className="success-message">
// // // //                   Thank you for your submission!
// // // //                 </p>
// // // //               )}
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import "./Hero.css";
// // // import HeroKitchen from "../assets/HeroKitchen.png";
// // // import badges from "../assets/badges.png";

// // // // List of U.S. states
// // // const states = [
// // //   { code: "AL", name: "Alabama" },
// // //   { code: "AK", name: "Alaska" },
// // //   { code: "AZ", name: "Arizona" },
// // //   { code: "AR", name: "Arkansas" },
// // //   { code: "CA", name: "California" },
// // //   { code: "CO", name: "Colorado" },
// // //   { code: "CT", name: "Connecticut" },
// // //   { code: "DE", name: "Delaware" },
// // //   { code: "DC", name: "District of Columbia" },
// // //   { code: "FL", name: "Florida" },
// // //   { code: "GA", name: "Georgia" },
// // //   { code: "HI", name: "Hawaii" },
// // //   { code: "ID", name: "Idaho" },
// // //   { code: "IL", name: "Illinois" },
// // //   { code: "IN", name: "Indiana" },
// // //   { code: "IA", name: "Iowa" },
// // //   { code: "KS", name: "Kansas" },
// // //   { code: "KY", name: "Kentucky" },
// // //   { code: "LA", name: "Louisiana" },
// // //   { code: "ME", name: "Maine" },
// // //   { code: "MD", name: "Maryland" },
// // //   { code: "MA", name: "Massachusetts" },
// // //   { code: "MI", name: "Michigan" },
// // //   { code: "MN", name: "Minnesota" },
// // //   { code: "MS", name: "Mississippi" },
// // //   { code: "MO", name: "Missouri" },
// // //   { code: "MT", name: "Montana" },
// // //   { code: "NE", name: "Nebraska" },
// // //   { code: "NV", name: "Nevada" },
// // //   { code: "NH", name: "New Hampshire" },
// // //   { code: "NJ", name: "New Jersey" },
// // //   { code: "NM", name: "New Mexico" },
// // //   { code: "NY", name: "New York" },
// // //   { code: "NC", name: "North Carolina" },
// // //   { code: "ND", name: "North Dakota" },
// // //   { code: "OH", name: "Ohio" },
// // //   { code: "OK", name: "Oklahoma" },
// // //   { code: "OR", name: "Oregon" },
// // //   { code: "PA", name: "Pennsylvania" },
// // //   { code: "RI", name: "Rhode Island" },
// // //   { code: "SC", name: "South Carolina" },
// // //   { code: "SD", name: "South Dakota" },
// // //   { code: "TN", name: "Tennessee" },
// // //   { code: "TX", name: "Texas" },
// // //   { code: "UT", name: "Utah" },
// // //   { code: "VT", name: "Vermont" },
// // //   { code: "VA", name: "Virginia" },
// // //   { code: "WA", name: "Washington" },
// // //   { code: "WV", name: "West Virginia" },
// // //   { code: "WI", name: "Wisconsin" },
// // //   { code: "WY", name: "Wyoming" },
// // // ];

// // // export const Hero = () => {
// // //   const [formData, setFormData] = useState({
// // //     firstname: "",
// // //     lastname: "",
// // //     address1: "",
// // //     city: "",
// // //     state: "",
// // //     zip: "",
// // //     phone1: "",
// // //     phone2: "",
// // //     email: "",
// // //     productid: "Kit", // Default to Kitchen, can be changed to "Bath" if needed
// // //     notes: "",
// // //   });

// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [submitError, setSubmitError] = useState(null);
// // //   const [submitSuccess, setSubmitSuccess] = useState(false);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     setSubmitError(null);
// // //     setSubmitSuccess(false);

// // //     try {
// // //       // LeadPerfection submission
// // //       const leadPerfectionParams = new URLSearchParams({
// // //         ...formData,
// // //         sender: "Payless Kitchen Cabinets", // Replace with your actual sender name
// // //         srs_id: "123", // Replace with your actual SRS_ID
// // //         "source-sub": "Hibu", // Replace with your actual source-sub
// // //       });

// // //       console.log(
// // //         "Submitting data to LeadPerfection:",
// // //         leadPerfectionParams.toString()
// // //       );

// // //       const response = await axios.post(
// // //         "/batch/addleads.asp",
// // //         leadPerfectionParams,
// // //         {
// // //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
// // //         }
// // //       );

// // //       console.log("Full LeadPerfection API response:", response);
// // //       console.log("LeadPerfection API response data:", response.data);
// // //       console.log("LeadPerfection API response status:", response.status);
// // //       console.log("LeadPerfection API response headers:", response.headers);

// // //       if (response.data !== "[OK]") {
// // //         console.warn(
// // //           "Unexpected response from LeadPerfection API:",
// // //           response.data
// // //         );
// // //       }

// // //       setSubmitSuccess(true);
// // //       setFormData({
// // //         firstname: "",
// // //         lastname: "",
// // //         address1: "",
// // //         city: "",
// // //         state: "",
// // //         zip: "",
// // //         phone1: "",
// // //         phone2: "",
// // //         email: "",
// // //         productid: "Kit",
// // //         notes: "",
// // //       });
// // //     } catch (error) {
// // //       console.error("Form submission error:", error);
// // //       if (error.response) {
// // //         console.error("Error response data:", error.response.data);
// // //         console.error("Error response status:", error.response.status);
// // //         console.error("Error response headers:", error.response.headers);
// // //       } else if (error.request) {
// // //         console.error("Error request:", error.request);
// // //       } else {
// // //         console.error("Error message:", error.message);
// // //       }
// // //       setSubmitError(
// // //         "An error occurred while submitting the form. Please try again."
// // //       );
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="hero-wrapper">
// // //       <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
// // //         <div className="container">
// // //           <div className="content">
// // //             <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
// // //             <p>
// // //               Get the kitchen and bathroom of your dreams from LA's trusted
// // //               kitchen remodeling contractor. Backed by more than 35 years of
// // //               experience, we will make sure your space features style, function,
// // //               and flair.
// // //             </p>
// // //             <ul className="features">
// // //               <li>Family Owned & Operated Since 1985</li>
// // //               <li>Zero Payments/Zero Interest until 2025</li>
// // //               <li>Licensed and Insured</li>
// // //               <li>Same-Day Savings</li>
// // //               <li>More Choices. More Care. More Value.</li>
// // //             </ul>
// // //             <div className="rating">
// // //               <span className="stars">★★★★★</span>
// // //               <span className="score">4.7</span>
// // //             </div>
// // //             <div className="badges">
// // //               <img src={badges} alt="Zero Interest" />
// // //             </div>
// // //           </div>
// // //           <div className="form-container">
// // //             <h2>Schedule Your Complimentary Consultation</h2>
// // //             <p>
// // //               Fill out the form so we can start planning your remodel. One of
// // //               our friendly coordinators will be in touch to book your
// // //               consultation.
// // //             </p>
// // //             <p>Our estimates are complimentary and obligation-free.</p>
// // //             <form onSubmit={handleSubmit}>
// // //               <div className="form-row">
// // //                 <input
// // //                   type="text"
// // //                   name="firstname"
// // //                   placeholder="First Name*"
// // //                   required
// // //                   value={formData.firstname}
// // //                   onChange={handleInputChange}
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   name="lastname"
// // //                   placeholder="Last Name*"
// // //                   required
// // //                   value={formData.lastname}
// // //                   onChange={handleInputChange}
// // //                 />
// // //               </div>
// // //               <div className="form-row">
// // //                 <input
// // //                   type="tel"
// // //                   name="phone1"
// // //                   placeholder="Mobile*"
// // //                   required
// // //                   value={formData.phone1}
// // //                   onChange={handleInputChange}
// // //                 />
// // //                 <input
// // //                   type="tel"
// // //                   name="phone2"
// // //                   placeholder="Alternate Phone Number"
// // //                   value={formData.phone2}
// // //                   onChange={handleInputChange}
// // //                 />
// // //               </div>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email*"
// // //                 required
// // //                 value={formData.email}
// // //                 onChange={handleInputChange}
// // //               />
// // //               <input
// // //                 type="text"
// // //                 name="address1"
// // //                 placeholder="Project Street Address *"
// // //                 required
// // //                 value={formData.address1}
// // //                 onChange={handleInputChange}
// // //               />
// // //               <div className="form-row">
// // //                 <input
// // //                   type="text"
// // //                   name="city"
// // //                   placeholder="City*"
// // //                   required
// // //                   value={formData.city}
// // //                   onChange={handleInputChange}
// // //                 />
// // //                 <select
// // //                   name="state"
// // //                   required
// // //                   value={formData.state}
// // //                   onChange={handleInputChange}
// // //                 >
// // //                   <option value="">State*</option>
// // //                   {states.map((state) => (
// // //                     <option key={state.code} value={state.code}>
// // //                       {state.name}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //               <input
// // //                 type="text"
// // //                 name="zip"
// // //                 placeholder="Zip Code*"
// // //                 required
// // //                 value={formData.zip}
// // //                 onChange={handleInputChange}
// // //               />
// // //               <textarea
// // //                 name="notes"
// // //                 placeholder="Please Briefly Describe Your Project *"
// // //                 required
// // //                 value={formData.notes}
// // //                 onChange={handleInputChange}
// // //               ></textarea>
// // //               <div className="form-checkbox">
// // //                 <input type="checkbox" id="consent" required />
// // //                 <label htmlFor="consent">
// // //                   By submitting this form, I authorize Payless Kitchen Cabinets
// // //                   & Bath Makeover to contact me by phone at the number provided
// // //                   above, including mobile phone, email or mail data using
// // //                   automatic dialing equipment to give me information about
// // //                   remodeling. Consent is not required as a condition of making a
// // //                   purchase.
// // //                 </label>
// // //               </div>
// // //               <button
// // //                 type="submit"
// // //                 className="submit-btn"
// // //                 disabled={isSubmitting}
// // //               >
// // //                 {isSubmitting ? "Submitting..." : "SUBMIT"}
// // //               </button>
// // //               {submitError && <p className="error-message">{submitError}</p>}
// // //               {submitSuccess && (
// // //                 <p className="success-message">
// // //                   Thank you for your submission!
// // //                 </p>
// // //               )}
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // ***************200 request to addleads above***********************************

// // import React from "react";
// // import "./Hero.css";
// // import HeroKitchen from "../assets/HeroKitchen.png";
// // import badges from "../assets/badges.png";

// // export const Hero = () => {
// //   return (
// //     <div className="hero-wrapper">
// //       <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
// //         <div className="container">
// //           <div className="content">
// //             <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
// //             <p>
// //               Get the kitchen and bathroom of your dreams from LA's trusted
// //               kitchen remodeling contractor. Backed by more than 35 years of
// //               experience, we will make sure your space features style, function,
// //               and flair.
// //             </p>
// //             <ul className="features">
// //               <li>Family Owned & Operated Since 1985</li>
// //               <li>Zero Payments/Zero Interest until 2025</li>
// //               <li>Licensed and Insured</li>
// //               <li>Same-Day Savings</li>
// //               <li>More Choices. More Care. More Value.</li>
// //             </ul>
// //             <div className="rating">
// //               <span className="stars">★★★★★</span>
// //               <span className="score">4.7</span>
// //             </div>
// //             <div className="badges">
// //               <img src={badges} alt="Zero Interest" />
// //             </div>
// //           </div>
// //           <div className="form-container">
// //             <iframe
// //               src="https://promo.paylesskitchencabinets.com/"
// //               title="Payless Kitchen Cabinets Promo Form"
// //               width="100%"
// //               height="600px"
// //               frameBorder="0"
// //               allowFullScreen
// //             ></iframe>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// import React from "react";
// import "./Hero.css";
// import HeroKitchen from "../assets/HeroKitchen.png";
// import badges from "../assets/badges.png";

// export const Hero = () => {
//   return (
//     <div className="hero-wrapper">
//       <div className="hero" style={{ backgroundImage: `url(${HeroKitchen})` }}>
//         <div className="container">
//           <div className="content">
//             <h1>Kitchen and Bathroom Remodeling Contractors in L.A.</h1>
//             <p>
//               Get the kitchen and bathroom of your dreams from LA's trusted
//               kitchen remodeling contractor. Backed by more than 35 years of
//               experience, we will make sure your space features style, function,
//               and flair.
//             </p>
//             <ul className="features">
//               <li>Family Owned & Operated Since 1985</li>
//               <li>Zero Payments/Zero Interest until 2025</li>
//               <li>Licensed and Insured</li>
//               <li>Same-Day Savings</li>
//               <li>More Choices. More Care. More Value.</li>
//             </ul>
//             {/* <div className="rating">
//               <span className="stars">★★★★★</span>
//               <span className="score">4.7</span>
//             </div> */}
//             <div className="badges">
//               <img src={badges} alt="Zero Interest" />
//             </div>
//           </div>
//           <div className="form-container">
//             <div className="iframe-wrapper">
//               <iframe
//                 src="https://promo.paylesskitchencabinets.com/"
//                 title="Payless Kitchen Cabinets Promo Form"
//                 frameBorder=""
//                 scrolling="no"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import "./Hero.css";
import HeroKitchen from "../assets/HeroKitchen.png";
import badges from "../assets/badges.png";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
            <div className="badges">
              <img src={badges} alt="Zero Interest" />
            </div>
          </div>
          <div className="form-container">
            <div
              className={`iframe-wrapper ${isMobile ? "mobile-scroll" : ""}`}
            >
              <iframe
                src="https://promo.paylesskitchencabinets.com/"
                title="Payless Kitchen Cabinets Promo Form"
                frameBorder="0"
                scrolling={isMobile ? "yes" : "no"}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
