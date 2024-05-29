import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>

            <div className="home-sec-bg" >
                <div className="row">
                    <div className="col-6">
                        <div>
                            <button>WELCOME TO SHARECURRENCY</button>
                            <h1>Consulting is a long-term investment in your goal’s future.</h1>
                            <p>Penatibus mi tempor volutpat taciti orci non dolor magnis dignissim facilisis. Vivamus vitae ultricies sagittis suspendisse montes tristique. Ligula tortor vulputate arcu mollis mus facilisi nisi habitant.</p>
                            <Link to="/">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className='home-sec-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 home-sec-1col1">
                            <img src='https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/working-with-investments-.jpg' className='img-fluid'></img>
                        </div>
                        <div className="col-6 home-sec-1col2">
                            <h2>We are the magic behind the company’s best days.</h2>
                            <p>Elementum ac ornare torquent sagittis nam ligula dictum vehicula facilisi fames placerat. Orci nisl facilisi ac nulla vehicula. Hendrerit lobortis litora nunc per commodo potenti.</p>
                            <Link to="/">Discover More</Link>
                        </div>
                    </div>
                </div>
            </section>


            <section>
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

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="container">
                                        <div className="img-fluid card mb-5 service-card-radius">
                                            <img className="card-img-top" src="https://skycommodity.in/static/media/acess.0ac5e6e30766ac427224.webp" alt="Card image" />
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
                                            <img className="card-img-top" src="https://skycommodity.in/static/media/day.13848a8db7a50bff9889.jpg" alt="Card image" />
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
                    <div className="row">
                        <div className="col-3 recentProjectssecolc">
                            <img className="card-img-top" src="https://www.bankrate.com/2020/08/24165602/what-is-bitcoin.jpeg?auto=webp&optimize=high" alt="Card image" />
                        </div>
                        <div className="col-3 recentProjectssecolc">
                            <img className="card-img-top" src="https://skycommodity.in/static/media/day.13848a8db7a50bff9889.jpg" alt="Card image" />
                        </div>
                        <div className="col-3 recentProjectssecolc">
                            <img className="card-img-top" src="https://www.usatoday.com/money/blueprint/images/uploads/2023/02/08004747/how-to-buy-bitcoin-e1691470121926.jpg" alt="Card image" />
                        </div>
                        <div className="col-3 recentProjectssecolc">
                            <img className="card-img-top" src="https://imageio.forbes.com/specials-images/dam/imageserve/908633080/960x0.jpg?height=474&width=711&fit=bounds" alt="Card image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec-progressbar'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 home-sec-1col1">
                            <img src='https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/working-with-investments-.jpg' className='img-fluid'></img>
                        </div>
                        <div className="col-6 sec-progressbarcoltext ">
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
                    </div>
                </div>
            </section>

            {/* <section className='meetOurteam'>
                <h2>Meet Our Team</h2>
            </section> */}

            <section className='meetOurTeamsec'>
                <div className="container">
                    <div className="service-head">
                        <p> <span>Meet Our</span> Teams </p>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-5">
                            <div className="card blog-card">
                                <img src="https://max-themes.net/demos/oregon/upload/personnel-1.jpg" class="imggg img-fluid attachment-digibit-blog-ii-column size-digibit-blog-ii-column" alt=""></img>
                                <div className="card-body blog-card-body">
                                    <h4 className='namess'>Paul Fisher</h4>
                                    <p className='meet_teamhed'>Financial Advisor</p>
                                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit laborum quo doloremque nemo at eligendi nam perspiciatis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <div className="card blog-card">
                                <img src="https://max-themes.net/demos/oregon/upload/personnel-6.jpg" class="img-fluid attachment-digibit-blog-ii-column size-digibit-blog-ii-column" alt=""></img>
                                <div className="card-body blog-card-body">
                                    <h4 className='namess'>John Smith</h4>
                                    <p className='meet_teamhed'>Business Planner</p>
                                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit laborum quo doloremque nemo at eligendi nam perspiciatis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <div className="card blog-card">
                                <img src="https://max-themes.net/demos/oregon/upload/personnel-5.jpg" class="img-fluid attachment-digibit-blog-ii-column size-digibit-blog-ii-column" alt=""></img>
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