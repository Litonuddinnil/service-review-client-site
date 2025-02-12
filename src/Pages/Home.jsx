import React from 'react';
import Banner from '../Components/Banner';
import FeaturedServices from '../Components/FeaturedServices ';
import MeetOurPartners from './MeetOurPartners ';
import CountupSection from './CountupSection'; 
import HowItWorks from './HowItWorks';
import FeaturedProducts from '../Components/HomePages/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <FeaturedProducts></FeaturedProducts>
            <MeetOurPartners></MeetOurPartners>  
             <HowItWorks></HowItWorks>
            <CountupSection></CountupSection>
        </div>
    );
};

export default Home;