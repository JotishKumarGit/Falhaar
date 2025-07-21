import React from 'react';
import back_img from '../../assets/back-image.jpg';
import About from '../About';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About_Us() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="position-relative text-white">
                    <img src={back_img} className="img-fluid  w-100" style={{ height: '35vh', objectFit: 'cover', opacity: 'rgba(0, 0, 0, 0.5)' }} alt="Background" />
                    {/* Centered content */}
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <h1 className="display-4 fw-bold">Welcome to Our Site</h1>
                        <p className="lead fw-bold">We offer amazing services for you</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                {/* THis is about us */}
                <About />
                <Container className="my-5">
                    <Row className="justify-content-center">
                        <Col md={6} className="mb-4 fade-in">
                            <Card className="shadow p-4 h-100">
                                <Card.Body>
                                    <Card.Title className="text-center text-primary fs-3">Our Mission</Card.Title>
                                    <Card.Text className="text-muted mt-3">
                                        At FALHAAR, our mission is to streamline and elevate the leggings industry by providing end-to-end solutions—connecting suppliers, buyers, and manufacturers with premium quality products and reliable service. We aim to empower businesses through innovation, ethical sourcing.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4 fade-in">
                            <Card className="shadow p-4">
                                <Card.Body>
                                    <Card.Title className="text-center text-success fs-3">Our Vision</Card.Title>
                                    <Card.Text className="text-muted mt-3">
                                        Our vision is to be the leading global hub for leggings solutions, recognized for integrity, quality, and efficiency. We envision a future where fashion meets functionality, and FALHAAR stands at the forefront of connecting ideas to reality across the supply chain.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default About_Us;



