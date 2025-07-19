import React, { useEffect, useState, useContext } from 'react';
import './Headcss.css';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <nav
                className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} custom-navbar ${isVisible ? 'slide-down' : 'hidden-top'}`}
                style={{ position: 'sticky', top: 0, zIndex: 1030 }}
            >
                <div className="container">
                    <a className="navbar-brand navbar-brand-custom" href="/">FALHAAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className=" nav-link custom-nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link custom-nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link custom-nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link custom-nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link custom-nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary ms-3" onClick={toggleTheme}>
                            Toggle {darkMode ? 'Light' : 'Dark'} Mode
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
