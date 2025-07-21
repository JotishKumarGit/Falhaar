import React from 'react';
import back_img from '../../assets/back-image.jpg';
import Contact from '../Contact';


function Contact_us() {
    return (
        <div className="container-fluid p-0">
            <div className="position-relative text-white">
                <img src={back_img} className="img-fluid w-100" style={{ height: '35vh', objectFit: 'cover', opacity: 'rgba(0, 0, 0, 0.5)' }} alt="Background" />
                {/* Centered content */}
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead fw-bold">We offer amazing services for you</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            {/* THis is about us */}
            <Contact />
        </div>
    )
}

export default Contact_us;


