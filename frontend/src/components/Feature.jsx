import React from 'react'
import styled from 'styled-components';
import { FaPen, FaShare } from "react-icons/fa";

const Features = () => {
  return (
    <Wrapper className="feature-section section-center">
      <h2>
        Our <span>all feature</span> for your content
      </h2>
      <p>share multiple links into one link.</p>
      <div className="features">
        <div className="feature">
          <span>
            <FaPen />
          </span>
          <h4>with devlinks you can customize your links</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            perferendis cupiditate at quis
          </p>
        </div>
        <div className="feature">
          <span>
            <FaShare />
          </span>
          <h4>share links with the worlld!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            perferendis cupiditate
          </p>
        </div>
        <div className="feature">
          <span>
            <FaPen />
          </span>
          <h4>customize your links</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            perferendis cupiditate !
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  
    padding: 2rem 0;
    p {
      text-align: center;
      font-weight: bold;
    }
    h2 {
      text-align: center;
      text-transform: unset;
      span {
        color: rgba(238, 41, 127, 0.941);
      }
    }
    .features {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      .feature {
        h4 {
          margin: 1rem 0;
          font-size: 1.3rem;
        }
        span {
          display: inline-block;
          width: 80px;
          background: var(--clr-purple);
          border-radius: 0.5rem;
          font-size: 2rem;
          padding: 0.5rem 0;
          svg {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0.4rem;
            color: white;
          }
        }
        border: 3px solid rgb(199, 199, 209);
        padding: 2rem;
        border-radius: 0.6rem;
        p {
          text-align: unset;
          font-weight: unset;
        }
      }
      // @media screen and (min-width: )
    }
  
`;

export default Features