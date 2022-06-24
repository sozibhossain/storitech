import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import banner from '../../Images/Banner.jpg';
import './Banner.css';
import ShearButton from '../Shears/Button/ShearButton';

const bannerbg ={
    background: `url(${banner})`,
    backgroundSize: 'cover'
}


const Banner = () => {

    
    return (
        <div style={bannerbg}>
            <Container>
                <Row style={{paddingTop: '30px', paddingBottom: '30px'}}>
                    <Col xs={12} md={6}>
                        <h4 style={{color:'#ffffff',marginBottom:'20px',fontSize: '18px'}}>Regain control of your finances now</h4>
                        <h2 style={{color:'#ffffff',marginBottom:'20px',fontSize: '40px'}}>Write off up to 85% of <br/>debts</h2>
                        <h4 style={{color:'#ffffff',marginBottom:'20px',fontSize: '18px'}}>*with selected plans, check if you qualify</h4>
                        <ShearButton></ShearButton>
                    </Col>
                    <Col xs={12} md={6}>2 of 2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;