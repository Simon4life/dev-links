import React from 'react'
import styled from "styled-components"
import phone from "../assets/phone.jpg";
import Links from "./Link";

const Phone = () => {
  return (
    <Wrapper>
      <div className='preview-container'>
        <img src={phone} className='img' />
        <Links/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .preview-container {
    position: relative;
  }
  .img {
    width: 530px;
  }
  @media screen and (max-width: 930px) {
    .preview-container {
      display: none;
    }
  }
  
`;

export default Phone