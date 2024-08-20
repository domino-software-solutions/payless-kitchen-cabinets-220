// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import './Featured.css'
// import {FiArrowDown, FiArrowUpRight} from 'react-icons/fi'

// const Featured = () => {

//   const [data, setData] = useState(null)

//   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'

//   useEffect(() => {
//     axios.get(url).then((response) => {
//         setData(response.data)
//     }).catch((error) => {
//         console.log(error)

//     })
//   },[])

//   console.log(data)

//   if (!data) return null

//   return (
//     <div className='featured'>
//         <div className='container'>
//             <div className='left'>
//                 <h2>Explore top crypto like Bitcoin, Ethereum</h2>
//                 <p>See all available assets: Cryptocurrencies and NFT's</p>
//                 <button className='btn'> See More Coins</button>
//             </div>
//             <div className='right'>
//                 <div className='card'>
//                 <div className='top'>
//                     {/* <img src={} alt='/' /> */}
//                     <img src={data[0].image} alt= ''/>
//                 </div>
//                 <div>
//                     <h5>{data[0].name}</h5>
//                     <p>${data[0].current_price.toLocaleString()}</p>

//                 </div>

//                 {data[0].price_change_percentage_24h < 0 ? (
//                     <span className='red'>
//                         <FiArrowDown  className='icon'/>
//                         {data[0].price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                 ) : (
//                     <span className='green'>
//                     <FiArrowUpRight className='icon'/>
//                     {data[0].price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 )}

//             </div>
//             <div className='card'>
//                 <div className='top'>
//                     {/* <img src={} alt='/' /> */}
//                     <img src={data[1].image} alt= ''/>
//                 </div>
//                 <div>
//                     <h5>{data[1].name}</h5>
//                     <p>${data[1].current_price.toLocaleString()}</p>

//                 </div>

//                 {data[1].price_change_percentage_24h < 0 ? (
//                     <span className='red'>
//                         <FiArrowDown className='icon'/>
//                         {data[1].price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                 ) : (
//                     <span className='green'>
//                     <FiArrowUpRight className='icon'/>
//                     {data[1].price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 )}

//             </div>
//             <div className='card'>
//                 <div className='top'>
//                     {/* <img src={} alt='/' /> */}
//                     <img src={data[2].image} alt= ''/>
//                 </div>
//                 <div>
//                     <h5>{data[2].name}</h5>
//                     <p>${data[2].current_price.toLocaleString()}</p>

//                 </div>

//                 {data[2].price_change_percentage_24h < 0 ? (
//                     <span className='red'>
//                         <FiArrowDown className='icon'/>
//                         {data[2].price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                 ) : (
//                     <span className='green'>
//                     <FiArrowUpRight className='icon'/>
//                     {data[2].price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 )}

//             </div>
//             <div className='card'>
//                 <div className='top'>
//                     {/* <img src={} alt='/' /> */}
//                     <img src={data[3].image} alt= ''/>
//                 </div>
//                 <div>
//                     <h5>{data[3].name}</h5>
//                     <p>${data[3].current_price.toLocaleString()}</p>

//                 </div>

//                 {data[3].price_change_percentage_24h < 0 ? (
//                     <span className='red'>
//                         <FiArrowDown className='icon'/>
//                         {data[3].price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                 ) : (
//                     <span className='green'>
//                     <FiArrowUpRight className='icon'/>
//                     {data[3].price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 )}

//             </div>
//             <div className='card'>
//                 <div className='top'>
//                     {/* <img src={} alt='/' /> */}
//                     <img src={data[4].image} alt= ''/>
//                 </div>
//                 <div>
//                     <h5>{data[4].name}</h5>
//                     <p>${data[4].current_price.toLocaleString()}</p>

//                 </div>

//                 {data[4].price_change_percentage_24h < 0 ? (
//                     <span className='red'>
//                         <FiArrowDown className='icon'/>
//                         {data[4].price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                 ) : (
//                     <span className='green'>
//                     <FiArrowUpRight className='icon'/>
//                     {data[4].price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 )}

//             </div>
//             <div className='card'>
//                 <div className='top'>
//                     {/* <img src={} alt='/' /> */}
//                     <img src={data[5].image} alt= ''/>
//                 </div>
//                 <div>
//                     <h5>{data[5].name}</h5>
//                     <p>${data[5].current_price.toLocaleString()}</p>

//                 </div>

//                 {data[5].price_change_percentage_24h < 0 ? (
//                     <span className='red'>
//                         <FiArrowDown className='icon'/>
//                         {data[5].price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                 ) : (
//                     <span className='green'>
//                     <FiArrowUpRight className='icon'/>
//                     {data[5 ].price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 )}

//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Featured
import React from "react";
import "./Featured.css";
import featuredKitchen from "../assets/featuredKitchen.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>Your Dream Kitchen and Bathroom is within Reach</h2>
          <p>
            At Payless Kitchen Cabinets, we understand what makes a space
            beautiful and functional. Our first priority is to provide your
            family with the kitchen and bathroom you'll absolutely love—we're a
            local family-owned business, after all.
          </p>
          <p>
            We have an A+ rating because our kitchen and bath remodeling
            specialists always deliver on our promise of well-planned and
            flawlessly executed designs. You can also expect your remodeling
            project to stay on schedule and on budget.
          </p>
          <p>
            You can treat us as your one-stop shop because we offer the best
            cabinets, countertops, and vanities at pre-manufactured prices,
            making sure that we never compromise on quality.
          </p>
          <p>
            We are delighted to be your kitchen and bath remodeling company of
            choice in Los Angeles, CA.
          </p>
          <div className="">Book Your Free Consultation Today</div>
        </div>
        <div className="right">
          {/* <img
            src="./pkcLogo.png"
            alt="Payless Kitchen Cabinets Logo"
            className="logo"
          /> */}
          <img
            src={featuredKitchen}
            alt="Kitchen Example"
            className="kitchen-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
