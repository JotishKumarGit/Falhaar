import React, { useState, useEffect, useContext } from 'react';
import img_1 from '../assets/makhana-2.webp';
import img_2 from '../assets/makhana.jpg';
import img_3 from '../assets/makhana-3.jpg';
import img_4 from '../assets/vegitable-Image-1.jpg';
import img_5 from '../assets/fruits.jpg';


// const slides = [
//   {
//     title: "Premium Roasted Makhana (Fox Nuts) – 100% Natural & Crunchy",
//     subtitle:
//       "Enjoy a healthy, guilt-free snack with our premium quality roasted makhana. Sourced from trusted farms, these fox nuts are rich in protein, calcium, and antioxidants. Perfect for weight watchers, fitness enthusiasts, or as an evening snack.",
//     buttonText: "Start your project",
//   },
//   {
//     title: " Farm-Fresh Mixed Vegetables – Daily Harvested ",
//     subtitle:
//       "Our fresh vegetable pack includes seasonal greens handpicked from local farms every morning. From crunchy cucumbers to vibrant carrots and leafy spinach – get the best of nature’s bounty with zero preservatives.",
//     buttonText: "Learn More",
//   },
//   {
//     title: " Handpicked Fresh Fruits – Juicy & Naturally Sweet",
//     subtitle:
//       "Taste the freshness with our assorted fresh fruits box including apples, bananas, papayas, and seasonal specials. All fruits are hand-selected for ripeness and taste, ensuring premium quality delivered to your doorstep.",
//     buttonText: "Contact Us",
//   },
// ];

function HeroSection() {

  return (

    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img_1} className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover', backgroundPosition: 'center' }} />
            <div className="carousel-caption d-none d-md-block">
              {/* <h3 className='fw-bold'>Premium Roasted Makhana (Fox Nuts) – 100% Natural & Crunchy</h3>
              <p className='fw-bold'>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={img_2} className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover', backgroundPosition: 'center' }} />
            <div className="carousel-caption d-none d-md-block">
              {/* <h3 className='fw-bold'>Farm-Fresh Mixed Vegetables – Daily Harvested</h3>
              <p className='fw-bold'>Our fresh vegetable pack includes seasonal greens handpicked from local farms every morning. From crunchy cucumbers to vibrant carrots and leafy spinach – get the best of nature’s bounty with zero preservatives."</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={img_3} className="d-block w-100" alt="" style={{ height: '400px', objectFit: 'cover', backgroundPosition: 'center' }} />
            <div className="carousel-caption d-none d-md-block">
              {/* <h3 className='fw-bold'>Handpicked Fresh Fruits – Juicy & Naturally Sweet</h3>
              <p className='fw-bold'>Taste the freshness with our assorted fresh fruits box including apples, bananas, papayas, and seasonal specials. All fruits are hand-selected for ripeness and taste, ensuring premium quality delivered to your doorstep."</p> */}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HeroSection;

