import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import './Button.css';

const ShearButton = () => {
    return (
        <Button className='bannerBotton'>Get Debt Help Today <ArrowRight style={{marginLeft: '10px'}}/></Button>
    );
};

export default ShearButton;