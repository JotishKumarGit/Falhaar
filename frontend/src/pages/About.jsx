// AboutSection.js
import React from 'react';
import about_img from '../assets/about-img.avif';
import { TiChevronRight } from "react-icons/ti";
import { Col } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="text-center">
            <h2 className="about-title mb-4">Who We Are</h2>
            <p className="about-description mx-auto mb-4">
              At <strong>Unique</strong>, we believe that being different isn’t just a choice — it’s a way of life.
              Founded on the principles of creativity, innovation, and authenticity, we strive to deliver products and
              solutions that stand out in a crowded world.
            </p>
          </div>
          {/* Text Content */}
          <div className="col-lg-6 text-center text-lg-start py-2 animate__animated animate__fadeInLeft">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="lead">
              I'm not just another developer or creator — I'm a storyteller, a problem solver, and an innovator.
              From ideas to execution, every step reflects my originality and vision.
              In a world full of templates, I build with purpose and passion.
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
            <img src={about_img} alt="Unique Illustration" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
