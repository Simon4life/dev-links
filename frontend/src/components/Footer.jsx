import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
      </div>
      <p>© {new Date().getFullYear()} Devlinks. All rights reserved.</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;

  div {
    margin-bottom: 1rem;

    a {
      color: #aaa;
      margin: 0 1rem;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }
  }
    p {
      margin: 0;
      color: #888;
    }
`

export default Footer