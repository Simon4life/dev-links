import React from 'react'
import styled from 'styled-components';
import customerTestimonies from "../utils/customerTestimonies";
import defaultImg from "../assets/default.jpg";

const Testimonies = () => {
  return (
    <Wrapper className="section-center">
      <h2>Testimonies</h2>
      <h4>
        Join 20K+ members of devlinks to access its features for <span>free</span>
      </h4>
      <article>
        {
          customerTestimonies.map((testimony, index) => {
            
           return (
             <div key={index}>
               <img
                 src={defaultImg}
                 className='user-img'
                 alt="user picture"
               />
               <h5>{testimony.name}</h5>
               <p>{testimony.text}</p>
             </div>
           );
          })
        }
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2rem 0;
  h2, h4 {
    text-transform: unset;
    text-align: center;
    span {
      color: rgba(238, 41, 127, 0.941);
    }
  }
  article {
    color: var(--clr-white);
    background: rgb(55, 55, 151);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    .user-img {
      width: 100px;
      display: inline-block;
      border-radius: 50%;
    }
  }
`;

export default Testimonies