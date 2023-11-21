import React from 'react'
import styled from "styled-components";
import Alert from '../components/Alert';
const LandingPage = () => {
  return (
    <Wrapper className='landing'>
      <h2>Hello world!</h2>
      <button className="btn">click me</button>
      <Alert message={"Your changes have been saved successfully"}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #f5f5f5;
  .btn {
    color: #2ecc71;
  }
`;

export default LandingPage