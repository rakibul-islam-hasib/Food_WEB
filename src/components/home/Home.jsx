import React from 'react';
import Hero from '../headers/Hero';
import ChefAbout from './ChefAbout';
import Chef from './cooking/Chef';
import bgImg from '../../assets/img2.jpg'
const Home = () => {
    document.title = 'Home - Amber Chefs';
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImg})` }} className="h-screen   bg-cover">
                <div className="h-screen bg-black bg-opacity-75">
                    <Hero />
                </div>
            </div>
            <div className="my-14">
                <ChefAbout />
            </div>
            <Chef />
        </>
    );
};

export default Home;