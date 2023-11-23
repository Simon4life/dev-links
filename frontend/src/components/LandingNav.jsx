import React, {useState} from 'react'
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";

const LandingNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    console.log('hello')
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo-container">
            <img src={logo} alt="dev-links logo" className="logo" />
            <h3>Devlinks</h3>
          </Link>
          <button className="nav-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      
        <div className={`${isSidebarOpen ? "links-container show-sidebar": "links-container"}`} >
          <div className="nav-header">
            <Link to="/" className="logo-container">
              <img src={logo} alt="dev-links logo" className="logo" />
              <h3>Devlinks</h3>
            </Link>
          </div>
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
          <div>
            <Link className="btn" to="/auth">
              Register
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: var(--clr-white);
  .nav-center {
    img {
      width: 60px;
    }
    .nav-header {
      .nav-toggle {
        border: none;
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0.5rem 1rem;
      .logo-container {
        display: flex;
        align-items: center;
        h3 {
          margin-bottom: 0;
          margin-left: 1rem;
          color: var(--clr-black);
        }
      }
      @media screen and (min-width: 987px) {
        .nav-toggle {
          display: none;
        }
      }
    }
    .links-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      position: fixed;
      top: 0;
      height: 100vh;
      background: var(--clr-white);
      transition: 0.5s;
      transform: translate(-100%);
      ul {
        margin-left: 1.5rem;
      }
      ul li a {
        color: var(--clr-black);
        font-weight: bold;
        display: inline-block;
        margin-bottom: 0.8rem;
      }
      .btn {
        place-item: center;
        display: inline-block;
        margin-left: 1.5rem;
      }
    }
    .show-sidebar {
      transform: translate(0);
    }
    .btn {
      background: rgba(238, 41, 127, 0.941);
      color: var(--clr-white);
      text-transform: unset;
    }
  }
`;

export default LandingNav
