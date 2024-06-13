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
                    <div className="row servicepage2sec2row">
                        <div className="col-4 aos-init" data-aos="fade-left" data-aos-delay="70" data-aos-duration="4000" data-aos-easing="ease-in-out">
                            <div className="servicepage2sec2card card">
                            <div className="mission-corner-design"></div> {/* New corner design div */}
                                <div className="servicepage2sec2card-body card-body">
                                    <img src='/images/mission-removebg-preview.png' className='img-fluid' alt="working with investments" />
                                    <h2 className='missionhed'>Our Vsion</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolorum blanditiis assumenda rem laudantium est illum repellendus expedita doloremque tempore, maxime debitis perferendis ipsam rerum ducimus explicabo, sapiente nemo aperiam!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 aos-init" data-aos="fade-right" data-aos-delay="70" data-aos-duration="4000" data-aos-easing="ease-in-out">
                            <div className="servicepage2sec2card card">
                                <div className="vision-corner-design"></div> {/* New corner design div */}
                                <div className="servicepage2sec2card-body card-body">
                                    <img src='images/visionbbulb-removebg-preview.png' className='img-fluid' alt="working with investments"></img>
                                    <h2 className='visionhed'>Our Vsion</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolorum blanditiis assumenda rem laudantium est illum repellendus expedita doloremque tempore, maxime debitis perferendis ipsam rerum ducimus explicabo, sapiente nemo aperiam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ServicePage2