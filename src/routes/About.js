import React from 'react';
import Navbar from '../components/Navbar';
import Infopage from '../components/Body/Infopage';
import Footer from '../components/Footer';

const header = {
    title: "About",
    subtitle: "Learn about HealthyLovedOnes and the dream team behind it."
}

export default () => (
    <div>
        <Navbar/>
        <Infopage header={header}/>
        <Footer/>
    </div>
);