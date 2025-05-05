import React from 'react'
import styled from 'styled-components';
import { FaPen, FaShare } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { RiBrush4Line } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
const Features = () => {
  return (
    <Wrapper className="feature-section section-center">
      <h2>
        Our <span>all feature</span> for your content
      </h2>
      <p>share multiple links into one link.</p>
      <div className="features">
        <div className="feature">
          <span className='span-1'>
            <FaLink />
          </span>
          <h4>Centralized link hub</h4>
          <p>
            All your links in one place for easy access and preview.
          </p>
        </div>
        <div className="feature">
          <span className='span-2'>
            <RiBrush4Line />
          </span>
          <h4>Customizable profiles</h4>
          <p>
            Personalize your page with themes, colors, and custom branding.
          </p>
        </div>
        <div className="feature">
          <span className='span-3'>
            <FaWrench />
          </span>
          <h4>Lunch in minutes</h4>
          <p>
            No coding needed—just pick a username and start sharing your links.
          </p>
        </div>
        <div className="feature">
          <span className='span-4'>
            <IoMdLock />
          </span>
          <h4>Safe and Secure</h4>
          <p>
            Your data is protected, and you control what's publicly available.
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;

      .feature {
        gap: 1rem;
        background: var(--clr-white);
        h5 {
          margin: 1rem 0;
          font-size: 1.3rem;
        }
        p {
          margin-bottom: 0;
        }
        span {
          display: inline-block;
          width: fit-content;
          border-radius: 0.3rem;
          font-size: 2.3rem;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          
        }
        .span-1 {
          background: rgb(225, 252, 225);
            svg {
              color: rgb(7, 192, 7);
            }
        }
        .span-2 {
          background: rgb(235, 231, 252);
            svg {
              color: rgb(39, 5, 233);
            }
        }
        .span-3 {
          background: rgb(246, 202, 255);
            svg {
              color: rgb(198, 8, 236);
            }
        }
        .span-4 {
          background: rgb(255, 221, 247);
            svg {
              color: rgb(255, 64, 207);
            }
        }
        padding: 2rem;
        border-radius: 0.3rem;
        p {
          text-align: unset;
          font-weight: unset;
        }
      }
      .feature:hover {
        transition: 0.5s ease-in;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      }     
      // @media screen and (min-width: )
    }
  
`;

export default Features