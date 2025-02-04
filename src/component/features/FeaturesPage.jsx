import React from 'react'
import "./Features.css"
import { FaBriefcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineFeaturedPlayList } from "react-icons/md";


function FeaturesPage() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Features</h1>
            </div>
            <div className='background-featuresec'>
                <div className="row featuresec-row">
                    <div className="col-lg-5 featuresec-coltxt">
                        <div>
                            <h2>Know About Share Currency</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, obcaecati esse ratione corrupti quae similique error sequi debitis sint inventore, odit, accusamus molestias magni a neque perspiciatis molestiae praesentium.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 featuresec-boxes">
                        <section className="sec-1">
                            <div className="row zigzag-row">
                                <div className="col-6 col-sm-6 col-12 zigzag-box offset-up">
                                    <div className="sec-1Box  featurebox-animation">
                                        <div className="dd">
                                            <FaBriefcase />
                                        </div>
                                        <div className="sec-1text">
                                            <h1>Our Approach</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-12 zigzag-box offset-down">
                                    <div className="sec-1Box featurebox-animation">
                                        <div className="dd">
                                            <FaBriefcase />
                                        </div>
                                        <div className="sec-1text">
                                            <h1>Our Approach</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-12 zigzag-box offset-up">
                                    <div className="sec-1Box featurebox-animation">
                                        <div className="dd">
                                            <FaBriefcase />
                                        </div>
                                        <div className="sec-1text">
                                            <h1>Our Approach</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <div className="col-6 col-sm-6 col-12 zigzag-box offset-down">
                                    <div className="sec-1Box featurebox-animation">
                                        <div className="dd">
                                            <FaBriefcase />
                                        </div>
                                        <div className="sec-1text">
                                            <h1>Our Approach</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            
            <section className="sec-2">
                <h1>Awesome Style</h1>
                <p>Est At Euismod Ponderum Reformidans. Vivendo Imperdiet Usu Eu, Cum Ea Fabellas Adipisci, Suas Agam Ad Mei. Quo Mollis Euripidis Gloriatur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero tempora quis incidunt at, velit quaerat repudiandae earum praesentium expedita laborum fuga quia adipisci magnam numquam nostrum cumque, sunt quam excepturi!.</p>
                <div className="sec-2borderbtm">
                    <img className='img-fluid' src='https://www.sharewolves.com/images/icons/exchange-rate.png'></img>
                    <img className='img-fluid' src='https://www.sharewolves.com/images/icons/pro-traders.png'></img>
                </div>
            </section>

            <section className='sec-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 featuressec-3coltext">
                            <h1>Take Your Stock Market Trading Experience To The New Level</h1>
                            <h6>Live Trading Session</h6>
                            <Link to="/">Apply Now</Link>
                        </div>
                        <div className="col-6 featuressec-3colimmg">
                            <img src='https://www.sharewolves.com/images/resource/website.png'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="featuresbox">
              <MdOutlineFeaturedPlayList />
              <h4>Features Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sapiente iste at fugiat dicta eaque nemo architecto tempora laudantium.</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="featuresbox">
              <MdOutlineFeaturedPlayList />
              <h4>Features Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sapiente iste at fugiat dicta eaque nemo architecto tempora laudantium.</p>
            </div>
          </div>
        </div>
        <div className="row sec-4row2">
          <div className="col-12 col-md-6">
            <div className="featuresbox">
              <MdOutlineFeaturedPlayList />
              <h4>Features Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sapiente iste at fugiat dicta eaque nemo architecto tempora laudantium.</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="featuresbox">
              <MdOutlineFeaturedPlayList />
              <h4>Features Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sapiente iste at fugiat dicta eaque nemo architecto tempora laudantium.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}

export default FeaturesPage