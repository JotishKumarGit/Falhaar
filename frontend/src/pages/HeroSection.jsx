import React, { useState, useEffect, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const slides = [
  {
    title: "Premium Roasted Makhana (Fox Nuts) – 100% Natural & Crunchy",
    subtitle:
      "Enjoy a healthy, guilt-free snack with our premium quality roasted makhana. Sourced from trusted farms, these fox nuts are rich in protein, calcium, and antioxidants. Perfect for weight watchers, fitness enthusiasts, or as an evening snack.",
    buttonText: "Start your project",
  },
  {
    title: " Farm-Fresh Mixed Vegetables – Daily Harvested ",
    subtitle:
      "Our fresh vegetable pack includes seasonal greens handpicked from local farms every morning. From crunchy cucumbers to vibrant carrots and leafy spinach – get the best of nature’s bounty with zero preservatives.",
    buttonText: "Learn More",
  },
  {
    title: " Handpicked Fresh Fruits – Juicy & Naturally Sweet",
    subtitle:
      "Taste the freshness with our assorted fresh fruits box including apples, bananas, papayas, and seasonal specials. All fruits are hand-selected for ripeness and taste, ensuring premium quality delivered to your doorstep.",
    buttonText: "Contact Us",
  },
];

function HeroSection() {
  const { darkMode } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`hero-section d-flex align-items-center  ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    >
      <Container className="text-center overflow-hidden" style={{ height: '300px', }}
      >
        <div className="slides-wrapper d-flex" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(100 / slides.length) * currentSlide}%)`, transition: 'transform 0.8s ease-in-out', height: '100%', }}>{slides.map((slide, idx) => (
          <div key={idx} className="slide" style={{ flex: `0 0 ${100 / slides.length}%`, padding: '20px', }}>
            <h1 className="fw-bold" style={{ fontSize: '2rem', lineHeight: '2.2rem', }}>
              {slide.title}
            </h1>
            <p
              className="lead mt-3" style={{ fontSize: '1rem', lineHeight: '1.4rem', }}>
              {slide.subtitle}
            </p>
            <div>
              <Button
                variant={darkMode ? 'light' : 'primary'}
                size="lg"
                className="btn-gradient mt-4 text-center align-items-center justify-content-center"
                style={{ padding: '10px', fontSize: '1rem', height: '50px', minWidth: '200px', }}>
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
