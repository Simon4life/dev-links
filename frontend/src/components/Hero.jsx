import React from 'react'
import styled from "styled-components"
import mainImg from "../assets/Share-link.svg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper className="hero-section">
      <div className="hero-texts">
        <h2>
          Simple link for <br /> <span>Everything.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Eligendi officiis non quo repudiandae atque voluptatem necessitatibus.
        </p>
        <Link className="btn">Get started</Link>
      </div>
      <div className="phone-container">
        <img src={mainImg} alt="phone picture" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #251174;
  min-height: calc(100vh - 8rem);
  color: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
  .phone-container {
    display: none;
  }
  @media screen and (min-width: 789px) {
    .phone-container img {
      width: 600px;
    }
  }
  .hero-texts {
    h2 {
      font-size: 1.8rem;
      span {
        color: rgba(238, 41, 127, 0.941);
      }
    }
    p {
      margin: 1.6rem 0;
      letter-spacing: var(--letterSpacing);
    }
  }

  .btn {
    background: rgba(238, 41, 127, 0.941);
    color: var(--clr-white);
    text-transform: unset;
  }
`;
export default Hero