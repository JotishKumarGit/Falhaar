import React from 'react';
import back_img from '../../assets/back-image.jpg';
import Product from '../Product';
import Services from '../Services';


function Contact_us() {
    return (
        <div className="container-fluid p-0">
            <div className="position-relative text-white">
                <img src={back_img} className="img-fluid w-100" style={{ height: '35vh', objectFit: 'cover', opacity: 'rgba(0, 0, 0, 0.5)' }} alt="Background" />
                {/* Centered content */}
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className="display-4 fw-bold">Our Product</h1>
                    <p className="lead fw-bold">We offer amazing services for you</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            {/* THis is about us */}
            <div className="container-fluid py-5 p-0">
                <Services />
                <Product />
            </div>
        </div>
    )
}

export default Contact_us;


