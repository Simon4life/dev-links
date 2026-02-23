import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import customerTestimonies from "../utils/customerTestimonies";
import defaultImg from "../assets/default.jpg";

const Testimonies = () => {
  const [peoples, setPeoples] = useState(customerTestimonies);
  console.log(
    peoples
  )
  return (
    <Wrapper className="section-center">
      <div>
        <h2>Loved by 5M+ Creators</h2>
        <p>Join a global community who have simplified their online presence with devlinks</p>
        <div>
          <div className='testimony-container'>
          {
            peoples.map((person) => {
             return <div className='testimony' key={person.name}>
              <p>
                {
                  person.rating.map((star) => {
                    return <span>{star}</span>
                  })
                }
              </p>
              <p className='testimony-text'>{person.text}</p>
              <div>
                <img src={person.imgUrl || defaultImg} alt={person.name} />
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
  padding: 2rem 0;
  h2
   {
    text-transform: unset;
    text-align: center;
    span {
      color: rgba(238, 41, 127, 0.941);
    }
  }
  p {
    font-size: 1.5rem;
  }
  .testimony {
    background: white;
    padding: 1rem;
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