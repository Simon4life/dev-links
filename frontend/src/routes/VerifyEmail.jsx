import React from 'react'
import styled from "styled-components";
import defaultImg from "../assets/default.jpg"
const VerifyEmail = () => {
  return (
    <Wrapper>
      <div>
        <img src={defaultImg} alt="confirm email photo" />

        <article>
          <h3>Confirm your email</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            doloremque sunt doloribus temporibus corporis.
          </p>
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      display: block;
      width: 200px;
      margin-top: 5rem;
      margin-bottom: 1rem;
    }
    p {
      text-align: center;
      max-width: 500px;
      color: var(--clr-grey-light);
    }
    h3 {
      text-align: center;
      color: var(--clr-purple);
    }
  }
`;

export default VerifyEmail