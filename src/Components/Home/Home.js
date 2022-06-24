import React from 'react';
import Banner from '../Banner/Banner';
import DebtSolutions from '../DebtSolutions/DebtSolutions';
import SimpleSteps from '../SimpleSteps/SimpleSteps';
import Situation from '../Situation/Situation';
import TypesOfDebt from '../TypesOfDebt/TypesOfDebt';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Situation></Situation>
            <DebtSolutions></DebtSolutions>
            <SimpleSteps></SimpleSteps>
            <TypesOfDebt></TypesOfDebt>
        </div>
    );
};

export default Home;