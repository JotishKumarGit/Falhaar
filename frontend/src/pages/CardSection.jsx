import React, { useContext } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { IoIosArrowForward } from "react-icons/io";

function CardSection() {

    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const data = [
        {
            title: 'Classic Salted Makhana',
            description1: ' Lightly roast 1 cup of makhana in a bit of ghee.',
            description2: ' Add a pinch of rock salt or regular salt.',
            description3: ' Sprinkle some chaat masala for an extra zing!',
        },
        {
            title: ' Peri-Peri Spiced Makhana',
            description1: 'Roast the makhana in olive oil or ghee.',
            description2: 'Add peri-peri seasoning (easily available in the market).',
            description3: 'Mix well until the makhanas are evenly coated – a spicy and tangy snack is ready!',
        },
        {
            title: 'Minty Pudina Makhana',
            description1: 'Roast the makhana as usual.',
            description2: 'Add dry mint powder, black salt, and a pinch of sugar.   ',
            description3: 'Mix and enjoy the refreshing minty flavor!',
        },

    ]

    return (
        <div className="card-section-wrapper bg-light position-relative" style={{ zIndex: '1', marginTop: '-20px' }} >
            <Container>
                <Row className="justify-content-center ">
                    <Col md={12}>
                        <Row className="justify-content-center mt-n5"> {/* Negative top margin for overlap */}
                            {data.map((item, index) => (
                                <Col md={4} className="mb-4 fade-in-up" key={index}>
                                    <Card className={`overlap-card shadow-lg p-4 text-center ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                        <Card.Body className='h-100'>
                                            <Card.Title className="h4">{item.title}</Card.Title>

                                            <div className="d-flex align-items-start mb-2 text-start">
                                                <IoIosArrowForward className="me-2 mt-1" />
                                                <span>{item.description1}</span>
                                            </div>

                                            <div className="d-flex align-items-start mb-2 text-start">
                                                <IoIosArrowForward className="me-2 mt-1" />
                                                <span>{item.description2}</span>
                                            </div>

                                            <div className="d-flex align-items-start text-start">
                                                <IoIosArrowForward className="me-2 mt-1" />
                                                <span>{item.description3}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </ div>
    );
}

export default CardSection;



