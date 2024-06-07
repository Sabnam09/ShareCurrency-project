import React from 'react'
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./ServicePage2.css"

function ServicePage2() {
    return (
        <>
            <div className="about-sec-bg" >
                <h1>Our Services 2</h1>
            </div>

            <section className='servicePagesec1'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>fud</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatibus. Nulla facere officiis distinctio adipisci vero perferendis praesentium. Omnis voluptate quia minima deserunt et rem nesciunt officia facilis temporibus! Expedita.</p>
                        </div>
                        <div className="col-6">
                        <img className="card-img-top" src="https://www.bankrate.com/2020/08/24165602/what-is-bitcoin.jpeg?auto=webp&optimize=high" alt="Card image" />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServicePage2