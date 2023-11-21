import React from 'react'
import styled from 'styled-components'
import {FaInbox} from "react-icons/fa"
const Alert = ({message}) => {
  return (
    <Wrapper>
      <p><FaInbox/>{message}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--clr-black);
  color: var(--clr-white);
  width: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
  position: absolute;
  bottom: 2rem;
  text-align: center;
  z-index: 999;
  p {
    margin: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right:  0.4rem;
    }
  }
`;

export default Alert