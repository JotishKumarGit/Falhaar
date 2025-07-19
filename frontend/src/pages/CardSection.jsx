import React, { useContext } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';


function CardSection() {

    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const data = [
        {
            title: 'Powerful Features',
            description: ' Discover solutions designed to help your business grow faster.',
        },
        {
            title: 'Powerful Features',
            description: ' Discover solutions designed to help your business grow faster.',
        },
        {
            title: 'Powerful Features',
            description: ' Discover solutions designed to help your business grow faster.',
        },

    ]

    return (
        <div className="card-section-wrapper bg-light" style={{ marginTop: '-20px' }} >
            <Container>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <Row className="justify-content-center mt-n5"> {/* Negative top margin for overlap */}
                            {data.map((item, index) => (
                                <Col md={4} className="mb-4" key={index}>
                                    <Card className={`overlap-card shadow-lg p-4 text-center ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                        <Card.Body>
                                            <Card.Title className="h4">{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
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
