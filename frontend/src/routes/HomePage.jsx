import React from 'react'
import styled from "styled-components";
import Hero from "../components/Hero"
import LandingNav from "../components/LandingNav"
import Features from "../components/Feature"
import Testimonies from '../components/Testimonies';
import NewsletterSignup from '../components/NewsLetter';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <Wrapper className="landing">

      <LandingNav />
      <Hero />
      <Features />
      <Testimonies />
      <NewsletterSignup />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #f5f5f5;
 
`;

export default LandingPage