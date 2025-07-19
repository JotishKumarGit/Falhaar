import React, { useState, useEffect, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const slides = [
  {
    title: "Provide Best IT Solutions for Your Business",
    subtitle:
      "We provide a wide range of high quality IT services and best practices solutions to our customers making their business better.",
    buttonText: "Start your project",
  },
  {
    title: "Innovative Software Development Services",
    subtitle:
      "Building scalable and robust software tailored to your business needs with cutting-edge technologies.",
    buttonText: "Learn More",
  },
  {
    title: "Reliable IT Consulting & Support",
    subtitle:
      "Expert advice and ongoing support to optimize your IT infrastructure and performance.",
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
      className={`hero-section d-flex align-items-center position-relative ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
        }`}
    >
      <Container
        className="text-center position-relative overflow-hidden"
        style={{ height: '300px' }}
      >
        <div className="slides-wrapper d-flex" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(100 / slides.length) * currentSlide}%)`, transition: 'transform 0.8s ease-in-out', height: '100%', }}>{slides.map((slide, idx) => (
          <div key={idx} className="slide" style={{ flex: `0 0 ${100 / slides.length}%`, padding: '20px', }}>
            <h1
              className="fw-bold"
              style={{
                fontSize: '2rem',
                lineHeight: '2.2rem',
              }}
            >
              {slide.title}
            </h1>
            <p
              className="lead mt-3"
              style={{
                fontSize: '1rem',
                lineHeight: '1.4rem',
              }}
            >
              {slide.subtitle}
            </p>
            <div>
              <Button
                variant={darkMode ? 'light' : 'primary'}
                size="lg"
                className="btn-gradient mt-4 text-center align-items-center justify-content-center"
                style={{
                  padding: '10px',
                  fontSize: '1rem',
                  height: '50px',
                  minWidth: '200px',
                }}
              >
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
