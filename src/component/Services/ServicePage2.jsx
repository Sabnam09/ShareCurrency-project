import React from 'react'
import "./ServicePage2.css"
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsRocketFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";


function ServicePage2() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Our Services 2</h1>
            </div>

            <section className='servicepage2sec1'>
                <div className='container'>
                    <div className="row servicepage2sec1Row aos-init" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div className="col-7 servicepage2sec1Coltxt">
                            <div>
                                <h1>Who We Are !</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia omnis at obcaecati laudantium</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim inventore numquam ipsam unde adipisci corporis accusamus minus, officiis animi iste sed ab, iure earum rem at eaque sunt ducimus repellendus.</p>

                                <div className="service-circle-container">
                                    <div className="service-circle">
                                        <div className="service-circle-inner">50%</div>
                                        {/* <p>Business Strategy Growth</p> */}
                                    </div>
                                    <div className="service-circle">
                                        <div className="service-circle-inner">75%</div>
                                        {/* <p>Finance Valuable Ideas</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 servicepage2sec1Colimg">
                            <img className='img-fluid' src='images/whoweare.jpg' alt='Who We Are' />
                        </div>
                        <div className="red-box">
                            <h3>10<sup>+</sup></h3>
                            <p>YEARS OF EXPERIENCES</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='servicepage2sec2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 servicepage2sec2colvision">
                            <div className='d-flex'>
                            <BsRocketFill />
                            <h2>Our Vision</h2>
                                </div>                    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos natus ipsam a quia enim nulla maiores, ex adipisci, debitis error optio voluptatum aliquam, molestias explicabo voluptas laboriosam quasi eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis odit inventore alias sunt eos veniam autem sit repellendus pariatur. Vero mollitia, quae magnam molestiae a delectus voluptas illum cumque.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 servicepage2sec2colmission">
                            <div className='d-flex'> 
                            <BsEyeFill />

                            <h2>Our Mission</h2>
                            </div>                                
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos natus ipsam a quia enim nulla maiores, ex adipisci, debitis error optio voluptatum aliquam, molestias explicabo voluptas laboriosam quasi eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis odit inventore alias sunt eos veniam autem sit repellendus pariatur. Vero mollitia, quae magnam molestiae a delectus voluptas illum cumque.</p>
                        </div>
                    </div>
                </div>
            </section>
           

        </>
    )
}

export default ServicePage2