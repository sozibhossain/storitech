import React from 'react';
import { Container } from 'react-bootstrap';
import ShearButton from '../Shears/Button/ShearButton';

const SimpleSteps = () => {
    return (
        <Container>
            <div style={{paddingTop: '40px', paddingBottom: '40px'}}>

            </div>
            <div style={{textAlign: 'center', paddingTop: '40px', paddingBottom: '40px'}}>
                <p>We present a whole range of debt relief options for you. Our Expert Advisors help people like you <br/>everyday with various types of debt issues. We offer free, totally confidential and zero obligatory advice for anyone <br/> trying to settle their present finances.</p>
                <div>
                <ShearButton></ShearButton>
                </div>
            </div>
        </Container>
    );
};

export default SimpleSteps;