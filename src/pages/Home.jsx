import React from 'react'
import Wash from "../components/Expertise";
import Header from "../components/Header";
import Service from "../components/Services";
import Qa from "../components/WhyChoose";
import Call from "../components/CallToAction";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection"; 
import AutoShowcaseCarousel from '../components/AutoShowcaseCarousel';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Qa />
            <Call />
            <Wash imageSrc="/wash.png" />
            <AutoShowcaseCarousel />
            <TestimonialSection />
            <ContactSection /> {/* Added here */}
        </div>
    )
}

export default Home
