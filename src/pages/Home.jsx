import React from 'react';
import WhyGoGreen from '../components/WhyGoGreen';
import HowItWorks from '../components/HowItWorks';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <WhyGoGreen></WhyGoGreen>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;