import React from 'react';
import './Homecss.css';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import About from './About';
import Product from './Product';
import Services from './Services';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Counter from './Counter';
import Newsletter from './NewsLetter';
import Faq from './Faq';
import Blog from './Blog';

const Home = () => {


  return (
    <>
      <HeroSection />
      <CardSection />
      <About />
      <Product />
      <Counter />
      <Services />
      <Testimonial />
      <Faq />
      <Blog />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;
