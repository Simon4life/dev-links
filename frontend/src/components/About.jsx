import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper className="section-center about-section">
        <div>
          <h4>About</h4>
          <h2>
            Why choose us to
            <br /> manage your content link?
          </h2>
          <p>
            share multiple link into one link and track
            <br /> performance of your content insight
          </p>
          <Link to="" className="btn">
            Learn More
          </Link>
        </div>
        <div className="numbers">
          <div className="first">
            <h3>130K+</h3>
            <p>Influencer used devlinks</p>
          </div>
          <div className="second">
            <h3>210K+</h3>
            <p>micro business used devlinks</p>
          </div>
          <div className="third">
            <h3>100+</h3>
            <p>devlinks template</p>
          </div>
          <div className="fourth">
            <h3>130K+</h3>
            <p>startup use devlinks</p>
          </div>
        </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .about-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    h2 {
      text-transform: unset;
    }
    .btn {
      background: rgba(238, 41, 127, 0.941);
      color: var(--clr-white);
      text-transform: unset;
    }
    .numbers {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      width: 500px;
      div {
        background: var(--clr-white);
        padding: 1rem 1.5rem;

        border-radius: 0.3rem;
        width: 180px;
        p {
          max-width: 150px;
          margin-bottom: 0;
        }
      }
      .first {
        border-left: 3px solid green;
      }
      .second {
        border-left: 3px solid aqua;
      }
      .third {
        border-left: 3px solid purple;
      }
      .fourth {
        border-left: 3px solid yellow;
      }
    }
  }
`;
export default About