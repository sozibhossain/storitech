import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BGimage from '../../Images/Layer.png';
import ShearButton from '../Shears/Button/ShearButton';



const Situation = () => {
    return (
        <div style={{paddingTop: '80px', paddingBottom: '80px'}}>
            <Container>
                <h2 style={{textAlign: 'center'}}>Whatever situation you’re in, we’re there for you</h2>
                <Row style={{paddingTop: '30px', paddingBottom: '30px'}}>
                    <Col xs={12} md={8}>
                        <h3>You are not alone in this</h3>
                        <p>Debt can lead to a lot of mental pressure. However, you need not to worry because every debt issue can be resolved.</p>
                        <h3>Go for our simple solution finder </h3>
                        <p>Our 60-second debt test is there to help you in your financial affairs. Answer some simple questions and you’d be notified on the best debt solutions to tailor for you.</p>
                        <h3>Debt counselling </h3>
                        <p>We help with debt advice related to immediate debt issues such as council tax, bailiff’s, bills and loans to relieve you of some of your stress. We’d help in reducing your debt so as to making you free of debt in no time</p>
                        <h3>We will be watchful towards everything </h3>
                        <p>Be it getting your paperwork done, speaking with your lenders, or getting started- we’re there for you. All time long.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img style={{with: '10px', height: '400px'}} src={BGimage} alt=""/>
                    </Col>
                </Row>
                <div style={{textAlign: 'center'}}>
                <ShearButton></ShearButton>
                </div>
            </Container>
        </div>
    );
};

export default Situation;