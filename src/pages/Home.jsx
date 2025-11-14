import React from 'react';
import WhyGoGreen from '../components/WhyGoGreen';
import HowItWorks from '../components/HowItWorks';
import HeroBanner from '../components/HeroBanner';
import LiveStatistics from '../components/LiveStatistics';
import CommunityTips from '../components/CommunityTips';
import UpcomingEvent from "../components/UpcomingEvent";
import OngoingChallenges from "../components/OngoingChallenges";

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <LiveStatistics></LiveStatistics>
            <OngoingChallenges></OngoingChallenges>
            <WhyGoGreen></WhyGoGreen>
            <CommunityTips></CommunityTips>
            <UpcomingEvent></UpcomingEvent>
            <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default Home;