import React from 'react';
import {  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt,FaPhoneAlt, FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-4 mt-auto " style={{backgroundColor:'#1f1e1aff'}}>
      <div className="container">
        <div className="row">

          {/* Brand & Description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-primary">Falhaar</h4>
            <p className="text-white  ">
              We are dedicated to providing the best service with quality and trust.
              Stay connected with us for updates and promotions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className='text-white'><a href="#" className="footer-link">Home</a></li>
              <li className='text-white'><a href="#" className="footer-link">About</a></li>
              <li className='text-white'><a href="#" className="footer-link">Services</a></li>
              <li className='text-white'><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Contact</h5>
            <ul className="list-unstyled text-muted">
              <li className='text-white'><FaMapMarkerAlt className="me-2" /> I-164, Ground Floor, Alpha 2, Greater Noida, Uttar Pradesh.</li>
              <li className='text-white'><FaPhoneAlt className="me-2" /> +91 8467917533</li>
              <li className='text-white'><FaEnvelope className="me-2" /> info@example.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex justify-content-md-start justify-content-center">
              <a href="#" className="footer-icon"><FaFacebookF /></a>
              <a href="#" className="footer-icon"><FaTwitter /></a>
              <a href="#" className="footer-icon"><FaInstagram /></a>
              <a href="#" className="footer-icon"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center text-white">
          <p> &copy; {new Date().getFullYear()} BrandName. All rights reserved .</p>
          <p><a href="https://trade4export.com/">Designed By Trade4Export</a></p>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .footer-link {
          color: #bbb;
          text-decoration: none;
          display: block;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #0d6efd;
        }

        .footer-icon {
          color: #bbb;
          margin-right: 15px;
          font-size: 1.2rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-icon:hover {
          color: #0d6efd;
          transform: scale(1.2);
        }

        .footer {
          transition: background-color 0.5s ease;
        }

        .footer:hover {
          background-color: #1a1a1a;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
