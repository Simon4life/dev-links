import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import customerTestimonies from "../utils/customerTestimonies";
import defaultImg from "../assets/default.jpg";

const Testimonies = () => {
  const [peoples, setPeoples] = useState(customerTestimonies);
  return (
    <Wrapper className="section-center">
      <div>
        <h2>Loved by 1M+ Developers</h2>
        <p className='section-text'>Join a global community who have simplified their online presence with devlinks</p>
        <div>
          <div className='testimony-container'>
          {
            peoples.map((person, index) => {
             return <div className='testimony' key={index}>
              <p className='ratings-container'>
                {
                  person.rating.map((star, ind) => {
                    return <span key={ind}>{star}</span>
                  })
                }
              </p>
              <p className='testimony-text'>{person.text}</p>
              <div className='img-container'>
                <img src={defaultImg} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.job}</p>  
                </div>
                
              </div>
              </div>
            })
          }
          </div>  
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 0;
  h2
   {
    text-transform: unset;
    text-align: center;
    span {
      color: rgba(238, 41, 127, 0.941);
    }
  }
  .section-text {
    text-align: center;
    font-size: 1.3rem;
  }
  .testimony {
    background: white;
    padding: 0.6rem;
    .ratings-container {
      margin-bottom: 0.3rem;
    }
    img {
      width: 5rem;
      border-radius: 50%;
    }
  }
  .testimony-container {
    display: grid;
    grid-template-columns: 1fr; /* Mobile default */
    gap: 20px;
    .testimony-text {
      font-size: 1.4rem;
    }
    .testimony {
      border: 2px solid #333;
      border-radius: 0.8rem;
      .img-container {
        display: flex;
        align-items: center;
        div {
          margin-left: 4rem;
        }
        h4 {
          margin-bottom: 0;
          margin-top: .8rem;
        }
      }
    }
    .testimony-text {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
  .testimony-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
}

/* Desktop */
@media (min-width: 1024px) {
  .testimony-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

export default Testimonies