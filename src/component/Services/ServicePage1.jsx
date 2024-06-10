import React from 'react'
import { Link } from 'react-router-dom';
import "./ServicePage1.css"
import { PiHandCoinsBold } from "react-icons/pi";
import { PiHandshakeDuotone } from "react-icons/pi";
import { FaHandPointDown } from "react-icons/fa";
import { GiHeavyThornyTriskelion } from "react-icons/gi";
import { SiRoamresearch } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";

function ServicePage1() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Our Services 1</h1>
            </div>

            <section className='servicepage1sec1'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Effective Risk Management Solutions For Financial Stability</h1>
                            <p>We offer reliable Risk Management services to safeguard your assets, ensure financial stability, and navigate rapidly changing business environments. We understand that managing risks is crucial for the sustainability and success of your enterprise</p>
                            <Link to="/">Discovery</Link>
                        </div>
                        <div className="col-6">
                            <img src='https://avitex.vn/html/finatex/assets/images/component/bottom-slider-three.png' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='servicepage1sec2'>
            <div className='service_background'>
                <div className="container-fluid">
                    <div className="row servicepage1sec2roww">
                        <div className="col-4">
                            <div className='servicepage1sec2box'>
                                <div className='servicepage1sec2boxheddr'>
                                <PiHandCoinsBold />
                                    <p>01</p>
                                </div>
                                <h4>Cryptocurrency Trading</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nam hic nisi voluptatibus aut rerum voluptate ut, totam quis aspernatur,</p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='servicepage1sec2box'>
                                <div className='servicepage1sec2boxheddr'>
                                <PiHandshakeDuotone />
                                    <p>02</p>
                                </div>
                                <h4>Portfolio Management</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nam hic nisi voluptatibus aut rerum voluptate ut, totam quis aspernatur,</p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='servicepage1sec2box'>
                                <div className='servicepage1sec2boxheddr'>
                                <FaHandPointDown />
                                    <p>03</p>
                                </div>
                                <h4>Investment Advice</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nam hic nisi voluptatibus aut rerum voluptate ut, totam quis aspernatur,</p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row servicepage1sec2roww">
                        <div className="col-4">
                            <div className='servicepage1sec2box'>
                                <div className='servicepage1sec2boxheddr'>
                                <GiHeavyThornyTriskelion />
                                    <p>04</p>
                                </div>
                                <h4>Risk Management</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nam hic nisi voluptatibus aut rerum voluptate ut, totam quis aspernatur,</p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='servicepage1sec2box'>
                                <div className='servicepage1sec2boxheddr'>
                                <SiRoamresearch />
                                    <p>05</p>
                                </div>
                                <h4>Cryptocurrency Trading</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nam hic nisi voluptatibus aut rerum voluptate ut, totam quis aspernatur,</p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='servicepage1sec2box'>
                                <div className='servicepage1sec2boxheddr'>
                                <MdCastForEducation />
                                    <p>06</p>
                                </div>
                                <h4>Investment Advice</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nam hic nisi voluptatibus aut rerum voluptate ut, totam quis aspernatur,</p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage1