import React from 'react'
import styled from "styled-components";
import defaultImg from "../assets/confirm-email-pic.jpg"
const VerifyEmail = () => {
  return (
    <Wrapper className="section-center">
      <div>
        <img src={defaultImg} alt="confirm email photo" />

        <article>
          <h3>Confirm your email</h3>
          <p>
            A verification email has been successfully sent to the email address
            associated with your account. To complete the verification process,
            please check your inbox and follow the instructions provided in the
            email.
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
      width: 400px;
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
      margin-bottom: 0.5rem;
    }
  }
`;

export default VerifyEmail