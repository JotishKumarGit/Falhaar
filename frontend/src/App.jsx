import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Headers/Header';
import Footer from './components/Headers/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';


function App() {


  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
