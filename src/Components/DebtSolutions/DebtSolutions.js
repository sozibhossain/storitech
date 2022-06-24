import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ShearButton from '../Shears/Button/ShearButton';
import Layer1 from '../../Images/Layer1.jpg';
import Layer2 from '../../Images/Layer2.jpg';
import Layer3 from '../../Images/Layer3.jpg';

const DebtSolutions = () => {
    return (
        <div style={{paddingTop: '40px', paddingBottom: '40px'}}>
            <Container>
                <h2 style={{textAlign: 'center'}}>Debt Solutions</h2>
                <Row style={{paddingTop: '30px', paddingBottom: '30px'}}>
                    <Col xs={12} md={4}>
                        <Card>
                                <Card.Img variant="top" src={Layer2} />
                            <Card.Body>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                                <Card.Img variant="top" src={Layer1} />
                            <Card.Body>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                                <Card.Img variant="top" src={Layer3} />
                            <Card.Body>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div style={{textAlign: 'center'}}>
                    <ShearButton></ShearButton>
                </div>
            </Container>
        </div>
    );
};

export default DebtSolutions;