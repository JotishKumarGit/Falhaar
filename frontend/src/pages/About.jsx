// AboutSection.js
import React from 'react';
import about_img from '../assets/about-img.avif';
import { TiChevronRight } from "react-icons/ti";
import { Col } from 'react-bootstrap';
import fruits from '../assets/fruits.jpg';


const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="text-center">
            <h2 className="about-title mb-4">Who We Are</h2>
            <p className="about-description mx-auto mb-4">
              Welcome to Falhaar, your trusted destination for fresh vegetables, nutritious makhana, and handpicked fruits – all delivered straight from farms to your doorstep.
            </p>
          </div>
          {/* Text Content */}
          <div className="col-lg-6 text-center text-lg-start py-2 animate__animated animate__fadeInLeft">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="lead">
              At the heart of our mission is a simple belief: freshness is the foundation of health. We work closely with local farmers and organic growers to ensure that every product we offer is pure, clean, and packed with natural goodness.
            </p>
            <ul className=' text-start'>
              <li className='list-unstyled' ><TiChevronRight />We Are Supplier</li>
              <li className='list-unstyled'><TiChevronRight />We Are Supplier</li>
            </ul>
            <div>
              <button className="btn custom-attractive-btn">
                Get Started
              </button>
            </div>
          </div>

          {/* Image or Illustration */}
          <div className="col-lg-6 text-center animate__animated animate__fadeInRight">
            <img src={fruits} alt="Unique Illustration" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
