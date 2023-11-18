import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import Links from './Link';
import defaultImg from "../assets/default.jpg"
const PreviewCard = ({user}) => {
  const {profilePicture, firstName, lastName, email} = user;
  return (
    <Wrapper>
      <img src={defaultImg} alt="profile-picture" />
      <h4>{`${firstName} ${lastName}`}</h4>
      <p>{email}</p>
      <div>
        <Links/>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: white;
  padding: 0.2rem;
  margin-top: -90px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: var(--light-shadow);
  border-radius: 8px;
  p {
    margin-bottom: 0;
  }
  img {
    display: block;
    border-radius: 50%;
    width: 150px;
  }
  div {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 0.5rem;
  }
`
export default PreviewCard