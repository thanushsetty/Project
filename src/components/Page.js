import React from "react";
import "../styles/Page.css"
import logo from "../assets/logo.png"
import award from "../assets/1.png"
import main from "../assets/2.png"
import products from "../assets/3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook } from '@fortawesome/free-brands-svg-icons'
const Page = () => {
    return(
        <div className="page-container">
            <div className="logo">
                <img src={logo} alt ="image"/>
            </div>
            <div className="main-container">
                <div className="award"> <img src={award} alt ="image"/></div>
                <div className="details">
                    <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>
                    <div className="main-image"><img src={main} alt ="image"/></div>
                    <p className="image-read">Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
            <div className="sub-main">
                <p className="sub-head">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <img src={products} alt ="image"/>
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <hr className="break"/>
            <div className="other-details">
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <p>CHEMICALS & PROCESS <span className="bar">|</span> POWER <span className="bar">| </span> WATER & WASTE WATER <span className="bar">|</span> OILS & GAS <span className="bar">|</span> PHARMA <span className="bar">|</span> SUGARS & DISTILLERIES <span className="bar">|</span> PAPER & PULP <span className="bar">|</span> MARINE & DEFENCE <span className="bar">|</span> METAL & MINING <span className="bar">|</span> FOOD & BEVERAGE <span className="bar">|</span>  PETROCHEMICAL & REFINERIES <span className="bar">|</span> SOLAR <span className="bar">|</span> BUILDING<span className="bar">|</span> HVAC <span className="bar">|</span> FIRE FIGHTING <span className="bar">|</span> AGRICULTURE & RESIDENTIAL</p>
            </div>
            <div className="footer">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faPhone} className='ficon' />
                    <p>Toll free <b>1800 200 1234</b></p>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faFacebook} className='ficon' />
                    <p>www.facebook.com/cripumps</p>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faGlobe} className='ficon' />
                    <p>www.crigroups.com</p>
                </div>
            </div>
        </div>
    )
}

export default Page;