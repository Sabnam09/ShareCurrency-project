import React from 'react'
import "./Footer.css"
import { HiChevronDoubleRight } from "react-icons/hi2";
import { FaFacebookF, FaDribbble, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoRocketOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {

    return (

        <>
            <div class="footermainsec rocket_section position-relative d-flex justify-content-center align-items-center">
                <div>
                    <footer class="footer-mainn text-white text-lg-start">

                        <div class=" container">

                            <div class="row">

                                <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                                    <h5 class="text-uppercase mb-4">About company</h5>

                                    <p>

                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis maxime mollitia quos laudantium! Officia adipisci debitis amet impedit delectus accusamus tempore et cumque. Illum placeat magni voluptate exercitationem dolor.
                                        markets,
                                        supported by regular events and training courses.
                                    </p>

                                    <div class="mt-4 footriconss">

                                        <a href="#" className="btn btn-floating btn-primary btn-lg"><FaFacebookF /></a>
                                        <a href="#" className="btn btn-floating btn-primary btn-lg"><FaDribbble /></a>
                                        <a href="#" className="btn btn-floating btn-primary btn-lg"><FaTwitter /></a>
                                        <a href="#" className="btn btn-floating btn-primary btn-lg"><FaGooglePlusG /></a>
                                    </div>
                                    <div className='footergooglicon'>
                                        <img src='images/googleplay-logo.png' className='img-fluid'></img>
                                    </div>
                                </div>


                                <div class="col-lg-5 col-md-6 footfrtextcol">
                                    <h5 class="text-uppercase  mb-4 pb-1 ms-lg-4 ps-lg-2">Courses </h5>

                                    <ul class="fa-ul footer-listss">
                                        <li class="mb-3">
                                            <span class="fa-li"><HiChevronDoubleRight /></span>
                                            <Link class="ms-2" to="/blog">Blog</Link>
                                        </li>
                                        <li class="mb-3">
                                            <span class="fa-li"><HiChevronDoubleRight /></span>
                                            <Link class="ms-2" to="/news">News</Link>
                                        </li>
                                        <li class="mb-3">
                                            <span class="fa-li"><HiChevronDoubleRight /></span>
                                            <Link class="ms-2" to="/">Disclaimer</Link>
                                        </li>
                                        <li class="mb-3">
                                            <span class="fa-li"><HiChevronDoubleRight /></span>
                                            <Link class="ms-2" to="/privacyPolicy">Privacy Policy</Link>

                                        </li>
                                        <li class="mb-3">
                                            <span class="fa-li"><HiChevronDoubleRight /></span>
                                            <Link class="ms-2" to="/termAndCondition">Terms & Condition</Link>

                                        </li>



                                    </ul>
                                </div>



                                <div class="col-lg-3 col-md-6 footfrtextcol">
                                    <h5 class="text-uppercase mb-4">Contact Info</h5>
                                    <div>
                                        <div className='mb-3'>
                                            <FaMapMarkerAlt size={18} /> 101, Sai Niketan, Opposite Sai Baba Mandir, Sai Baba Nagar, Borivali West, Mumbai - 400092
                                        </div>
                                        <div className='mb-3'>
                                            <FaClock size={18} /> Mon – Sat 10:00am - 8:00pm
                                        </div>
                                        <div className='mb-3'>
                                            <FaPhoneAlt size={18} />  +91 84510 35255
                                        </div>
                                        <div className='mb-3'>
                                            <FaEnvelope size={18} /> sharewolves1@gmail.com
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </footer>



                </div>
                <section className='roket_wraper'>
                    <div className='row'>
                        <div className="col-md-6 text-white  d-flex justify-content-center gap-4 alin-items-center">
                            <div>
                                <IoRocketOutline className='text-white' size={70} />
                            </div>
                            <div>
                                <h5>  To Know More</h5>
                                <p>  Grow Your Finance with Our Trading Institute</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class='rounded bg-white p-2 position-relative'>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <input class=' border-0' type="text" style={{ "outline": "none" }} />
                                    </div>
                                    <div class="col-auto">
                                        <button class='btn px-4 py-2 btn-primary'>Click Now</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section >

            </div>

            <div class="container-fluid footer-copyright" >
                © 2024 Copyright:
                <Link to="/">SRN Infotech.com</Link>
            </div>
        </>

    )
}

export default Footer