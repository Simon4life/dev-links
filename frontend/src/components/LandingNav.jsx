import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="dev-links logo" className="logo" />
        </Link>
        <div>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="btn" to="/auth">
            Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: var(--clr-white);
  .nav-center {
    .logo {
    width: 70px;
  }
  padding 1rem 1.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div ul {
    display: flex;
    li {
      margin-left: 1.5rem;
    }
    a {
      display: inline-block;
      color: var(--clr-black);
      font-weight: bold;
    }
    }
  }
  .btn {
    background: rgba(238, 41, 127, 0.941);
    color: var(--clr-white);
    text-transform: unset;
  }
`;

export default LandingNav
