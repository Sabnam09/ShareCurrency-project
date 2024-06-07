import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdVerified } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
// import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    AOS.init();

    return (
        <>

            <section className='home-sec-bg'>
                <Carousel id="carouselExampleControlsNoTouching" indicators={false} interval={2300}> {/* Adjust interval here */}
                    <Carousel.Item className="homesec-slider-item">
                        <div className="homesec-slider-bg"></div>
                        <div className="container homesec-carousel-img-text">
                            <div className="row homesec-carousel-text">
                                <div className="col-8 c-text slide-1-h1">
                                    <div className='home-slider-texts aos-init' data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-out">
                                        <button>WELCOME TO SHARECURRENCY</button>
                                        <h1>Consulting is a long-term investment in your goal’s future.</h1>
                                        <p>Penatibus mi tempor volutpat taciti orci non dolor magnis dignissim facilisis. Vivamus vitae ultricies sagittis suspendisse montes tristique. Ligula tortor vulputate arcu mollis mus facilisi nisi habitant.</p>
                                        <Link to="/">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src="https://html.yogsthemes.com/demo/fico/images/main-slider/image-1.jpg"
                            className="d-block w-100"
                            alt="..."
                        />

                    </Carousel.Item>

                    <Carousel.Item className="homesec-slider-item">
                        <div className="homesec-slider-bg"></div>
                        <div className="container homesec-carousel-img-text">
                            <div className="row homesec-carousel-text">
                                <div className="col-8 c-text">
                                    <div className='home-slider-texts aos-init' data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-out">
                                        <button>WELCOME TO SHARECURRENCY</button>
                                        <h1>Consulting is a long-term investment in your goal’s future.</h1>
                                        <p>Penatibus mi tempor volutpat taciti orci non dolor magnis dignissim facilisis. Vivamus vitae ultricies sagittis suspendisse montes tristique. Ligula tortor vulputate arcu mollis mus facilisi nisi habitant.</p>
                                        <Link to="/">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src="https://max-themes.net/demos/oregon/upload/shutterstock_158522279.jpg"
                            className="d-block w-100"
                            alt="..."
                        />

                    </Carousel.Item>

                    <Carousel.Item className="homesec-slider-item">
                        <div className="homesec-slider-bg"></div>
                        <div className="container homesec-carousel-img-text">
                            <div className="row homesec-carousel-text">
                                <div className="col-8 c-text">
                                    <div className='home-slider-texts aos-init' data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-out">
                                        <button>WELCOME TO SHARECURRENCY</button>
                                        <h1>Consulting is a long-term investment in your goal’s future.</h1>
                                        <p>Penatibus mi tempor volutpat taciti orci non dolor magnis dignissim facilisis. Vivamus vitae ultricies sagittis suspendisse montes tristique. Ligula tortor vulputate arcu mollis mus facilisi nisi habitant.</p>
                                        <Link to="/">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src="images/banner-bg-img1.jpg"
                            className="d-block w-100"
                            alt="..."
                        />

                    </Carousel.Item>
                </Carousel>
            </section>

            <section className='home-sec-1'>
                <div className="circle" style={{ top: '10%', left: '20%' }}></div>
                <div className="circle" style={{ top: '40%', left: '70%' }}></div>
                <div className="dot" style={{ top: '70%', left: '30%' }}></div>
                <div className="dot" style={{ top: '50%', left: '50%' }}></div>
                <div className="dot" style={{ top: '20%', left: '80%' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 home-sec-1col1 aos-init" data-aos="fade-left" data-aos-delay="70" data-aos-duration="4000" data-aos-easing="ease-in-out">
                            <img src='https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/working-with-investments-.jpg' className='img-fluid' alt="working with investments"></img>
                        </div>
                        <div className="col-md-6 home-sec-1col2 aos-init" data-aos="fade-down" data-aos-delay="70">
                            <h2>We are the magic behind the company’s best days.</h2>
                            <p>Elementum ac ornare torquent sagittis nam ligula dictum vehicula facilisi fames placerat. Orci nisl facilisi ac nulla vehicula. Hendrerit lobortis litora nunc per commodo potenti.</p>
                            <Link to="/">Discover More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-sec-servics'>
                <div className="service-sec">
                    <div className="container">
                        <div className="row service-ro">
                            <div className="col-sm-8 col-md-6">
                                <div className="service-head">
                                    <p> <span>Our</span> Services </p>
                                </div>
                                <p className="service-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>

                        <div className="row aos-init" data-aos="fade-up">
                            <div className="col-md-4">
                                <div className="container service-hovrmain">
                                    <div className="img-fluid card mb-5 service-card-radius">
                                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94ILLOOZTggwXbro1UH9PgAnbgwSHuwkULw&s" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title service-card-title">Bitcoin Transaction</h5>
                                            <p className="service-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
                                                accusamus, odio suscipit modi eligendi reprehenderit?</p>
                                            <div className="service-card-btn">
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container">
                                    <div className="img-fluid card mb-5 service-card-radius">
                                        <img className="card-img-top" src="https://skycommodity.in/static/media/Trade.9c6811b57597c2899f3a.webp" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title service-card-title">Bitcoin Mining</h5>
                                            <p className="service-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
                                                accusamus, odio suscipit modi eligendi reprehenderit?</p>
                                            <div className="service-card-btn">
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container">
                                    <div className="img-fluid card mb-5 service-card-radius">
                                        <img className="card-img-top" src="https://academy-public.coinmarketcap.com/srd-optimized-uploads/6b971d4a6ba1435a853e3fea842d662d.webp" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title service-card-title">Bitcoin Service</h5>
                                            <p className="service-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
                                                accusamus, odio suscipit modi eligendi reprehenderit?</p>
                                            <div className="service-card-btn">
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row aos-init" data-aos="fade-up">
                            <div className="col-md-4">
                                <div className="container">
                                    <div className="img-fluid card mb-5 service-card-radius">
                                        <img className="card-img-top" src="https://media.istockphoto.com/id/1304093999/photo/bitcoin-e-commerce-concept-on-digital-screen.jpg?s=612x612&w=0&k=20&c=H_aL2IvK90193-D8LEsuQGpgKYio0-Ls1-DMylZ41bY=" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title service-card-title">Bitcoin Service</h5>
                                            <p className="service-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
                                                accusamus, odio suscipit modi eligendi reprehenderit?</p>
                                            <div className="service-card-btn">
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container">
                                    <div className="img-fluid card mb-5 service-card-radius">
                                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRielfOHVewQ9yYXJCY7VjidSW-mVEB00sq_w&s" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title service-card-title">Bitcoin Tranjaction</h5>
                                            <p className="service-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
                                                accusamus, odio suscipit modi eligendi reprehenderit?</p>
                                            <div className="service-card-btn">
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container">
                                    <div className="img-fluid card mb-5 service-card-radius">
                                        <img className="card-img-top" src="https://skycommodity.in/static/media/day.13848a8db7a50bff9889.jpg" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title service-card-title">Bitcoin Mining</h5>
                                            <p className="service-card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
                                                accusamus, odio suscipit modi eligendi reprehenderit?</p>
                                            <div className="service-card-btn">
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='counter-secmainn'>
                <div className="counter-sec">
                    <div className="counter-sec-bg">
                        <div className="container counter-sec-con">
                            <div className="row counter-sec-ro">
                                <div className="col-lg-6">
                                    <div className="counter-sec-text">
                                        <h2>We are served since <strong>20 years</strong> to our customer with trust and we are happy</h2>
                                        <div className="count-btn">
                                            <div className="counter-sec-btn"><a>BE A PART OF US</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="counter-sec-symbol">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="counter-up">
                                                        {/* <i className="fa fa-trophy"></i> */}
                                                        <p> <span className="count" data-count="125">155</span> </p>
                                                        <p className="operator">OPERATORS</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="counter-up">
                                                        {/* <i className="fa fa-users"></i> */}
                                                        <p> <span className="count" data-count="125">250</span> </p>
                                                        <p className="atm">ATMS</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="counter-up">
                                                        {/* <i className="fa fa-smile"></i> */}
                                                        <p> <span className="count" data-count="125">550</span> </p>
                                                        <p className="producer">PRODUCERS</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='recentProjectssec'>
                <div className="service-head">
                    <p> <span>Recent</span> Projects </p>
                </div>
                <p className="service-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <div className="container-fluid">
                    <div className="row aos-init" data-aos="zoom-in-up">
                        <div className="col-md-6 col-lg-3 recentProjectssecolc">
                            <div className='image-container'>
                                <div className='recentimghoverbg'>
                                    <Link to="/" className="recentprojcthome-overlay-text">View More </Link>
                                </div>
                                <img className="card-img-top" src="https://www.bankrate.com/2020/08/24165602/what-is-bitcoin.jpeg?auto=webp&optimize=high" alt="Card image" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 recentProjectssecolc">
                            <div className='image-container'>
                                <div className='recentimghoverbg'>
                                    <Link to="/" className="recentprojcthome-overlay-text">View More </Link>
                                </div>
                                <img className="card-img-top" src="https://skycommodity.in/static/media/day.13848a8db7a50bff9889.jpg" alt="Card image" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 recentProjectssecolc">
                            <div className='image-container'>
                                <div className='recentimghoverbg'>
                                    <Link to="/" className="recentprojcthome-overlay-text">View More </Link>
                                </div>
                                <img className="card-img-top" src="https://www.usatoday.com/money/blueprint/images/uploads/2023/02/08004747/how-to-buy-bitcoin-e1691470121926.jpg" alt="Card image" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 recentProjectssecolc">
                            <div className='image-container'>
                                <div className='recentimghoverbg'>
                                    <Link to="/" className="recentprojcthome-overlay-text">View More </Link>
                                </div>
                                <img className="card-img-top" src="https://imageio.forbes.com/specials-images/dam/imageserve/908633080/960x0.jpg?height=474&width=711&fit=bounds" alt="Card image" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* </section> */}

                {/* <section className='sec-progressbar'> */}
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 sec-progressbarcoltext ">
                            <h2>Think fresh, work faster, grow smarter, save money.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                            <div className="App">
                                <h6>Business Strategy</h6>
                                <div className="progress-container">
                                    <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar" style={{ width: '50%' }}>50%</div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar" style={{ width: '30%' }}>30%</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 home-sec-1col1 aos-init" data-aos="fade-up">
                            <img src='https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/working-with-investments-.jpg' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='homnewssection'>
                <div className="container">
                    <div className="service-head">
                        <p className='mb-5'> <span>Latest</span> News </p>
                    </div>
                    <div className="row  aos-init" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="container">
                                <div className="img-fluid card mb-5 homenews-card-radius">
                                    <img className="card-img-top" src="https://avitex.vn/html/finatex/assets/images/blog/item11.png" alt="Card image" />
                                    <div className="card-body homnewscardbody">
                                        <Link to="/">Ci Financial Sells RIA Stake In New Expansion Strategy</Link>
                                        <div className='homenewsiconsdiv'>
                                            <p>by <span className='homenewsiconsspan1'>Avitex</span></p>
                                            <MdDateRange className='mt-1 me-2' /> <span className='homenewsiconsspan2'>2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                <div className="img-fluid card mb-5 homenews-card-radius">
                                    <img className="card-img-top" src="https://avitex.vn/html/finatex/assets/images/blog/item13.png" alt="Card image" />
                                    <div className="card-body homnewscardbody">
                                        <Link to="/">Barred Financial Advisors Charged In Millions</Link>
                                        <div className='homenewsiconsdiv'>
                                            <p>by <span className='homenewsiconsspan1'>Avitex</span></p>
                                            <MdDateRange className='mt-1 me-2' /> <span className='homenewsiconsspan2'>1 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                <div className="img-fluid card mb-5 homenews-card-radius">
                                    <img className="card-img-top" src="https://avitex.vn/html/finatex/assets/images/blog/item12.png" alt="Card image" />
                                    <div className="card-body homnewscardbody">
                                        <Link to="/">Retirement Planning Strategy</Link>
                                        <div className='homenewsiconsdiv'>
                                            <p>by <span className='homenewsiconsspan1'>Avitex</span></p>
                                            <MdDateRange className='mt-1 me-2' /> <span className='homenewsiconsspan2'>2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homeaboutsec">
                <div className="container-fluid">
                    <div className="service-head">
                        <p className='mb-5'><span>About</span> Us</p>
                    </div>
                    <div className="row homeaboutsec-row">
                        <div className="col-lg-5 homeaboutsec-coltxt aos-init" data-aos="flip-left" data-aos-delay="150" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <div>
                                <h2>Know About Share Currency</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, obcaecati esse ratione corrupti quae similique error sequi debitis sint inventore, odit, accusamus molestias magni a neque perspiciatis molestiae praesentium.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 homeaboutsec-colbox aos-init" data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000" data-aos-easing="ease-in-out">
                            <div className="row homeaboutsec-roww homeaboutsec-roww-1">
                                <div className="hombox-animation col-sm-6">
                                    <div className='homboxxDown'>
                                        <MdVerified />
                                        <h5>QUALITY</h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti dicta velit, modi nemo inventore, facilis necessitatibus ipsa, error dignissimos nobis unde.</p>
                                    </div>
                                </div>
                                <div className="hombox-animation col-sm-6">
                                    <div className='homboxxUp'>
                                        <FaPeopleGroup />
                                        <h5>CLIENT</h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti dicta velit, modi nemo inventore, facilis necessitatibus ipsa, error dignissimos nobis unde.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row homeaboutsec-roww">
                                <div className="hombox-animation col-sm-6">
                                    <div className='homboxxDown'>
                                        <FaPeopleGroup />
                                        <h5>CUSTOMER</h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti dicta velit, modi nemo inventore, facilis necessitatibus ipsa, error dignissimos nobis unde.</p>
                                    </div>
                                </div>
                                <div className="hombox-animation col-sm-6">
                                    <div className='homboxxUp'>
                                        <FaBusinessTime />
                                        <h5>INTEGRITY</h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti dicta velit, modi nemo inventore, facilis necessitatibus ipsa, error dignissimos nobis unde.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Adding stars and moon --> */}
                <div className="homeabbbbb">
                    <div className="star" style={{ top: '10%', left: '20%'}}></div>
                    <div className="star" style={{top: '30%' , left: '50%' }}></div>
                    <div className="star" style={{top: '70%' , left: '80%'}}></div>
                    <div className="moon" style={{top: '40%' , left: '60%'}}></div>
                </div>
            </section>




            <section className='meetOurTeamsec'>
                <div className="container">
                    <div className="service-head">
                        <p> <span>Meet Our</span> Teams </p>
                    </div>
                    <div className="row meetOurTeamsecroww aos-init" data-aos="zoom-out-up">
                        <div className="col-md-4 meetOurTeamseccol">
                            <div className="card blog-card">
                                <img src="https://max-themes.net/demos/oregon/upload/personnel-1.jpg" class="imggg img-fluid attachment-digibit-blog-ii-column size-digibit-blog-ii-column" alt=""></img>
                                <div className="card-body blog-card-body">
                                    <h4 className='namess'>Paul Fisher</h4>
                                    <p className='meet_teamhed'>Financial Advisor</p>
                                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit laborum quo doloremque nemo at eligendi nam perspiciatis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 meetOurTeamseccol">
                            <div className="card blog-card">
                                <img src="https://max-themes.net/demos/oregon/upload/personnel-6.jpg" class="imggg img-fluid attachment-digibit-blog-ii-column size-digibit-blog-ii-column" alt=""></img>
                                <div className="card-body blog-card-body">
                                    <h4 className='namess'>John Smith</h4>
                                    <p className='meet_teamhed'>Business Planner</p>
                                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit laborum quo doloremque nemo at eligendi nam perspiciatis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 meetOurTeamseccol">
                            <div className="card blog-card">
                                <img src="https://max-themes.net/demos/oregon/upload/personnel-5.jpg" class="imggg img-fluid attachment-digibit-blog-ii-column size-digibit-blog-ii-column" alt=""></img>
                                <div className="card-body blog-card-body">
                                    <h4 className='namess'>Simon Cruise</h4>
                                    <p className='meet_teamhed'>Wealth Manager</p>
                                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit laborum quo doloremque nemo at eligendi nam perspiciatis </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home