// import React, {useState} from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'
// import './Navbar.css'

// const Navbar = () => {
// const [click, setClick] = useState(false)
// const handleClick = () => setClick(!click)

//     return (
//         <div className='header'>
//             <div className='container'>
//                 <h1>De<span className='primary'>Fi</span></h1>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li>
//                         <a href='/'>Home</a>
//                     </li>
//                     <li>
//                         <a href='/'>Featured</a>
//                     </li>
//                     <li>
//                         <a href='/earn'>Earn</a>
//                     </li>
//                     <li>
//                         <a href='/contact'>Contact</a>
//                     </li>
//                 </ul>
//                 <div className='btn-group'>
//                     <button className='btn'>Connect Wallet</button>
//                 </div>
//                 <div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import Logo from "../assets/pkcLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={Logo} alt="Payless Kitchen Cabinets Logo" className="logo" />
        <div>Call us today 866-482-0919</div>
      </div>
    </div>
  );
};

export default Navbar;
