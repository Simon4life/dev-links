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
          <div className="sidebar-header">
            <Link to="/" className="logo-container">
              <img src={logo} alt="dev-links logo" className="logo" />
              <h3>Devlinks</h3>
            </Link>
          </div>
          <ul className='links'>
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
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  img {
    width: 60px;
  }

  .nav-header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .logo-container {
      display: flex;
      align-items: center;

      h3 {
        margin-left: 1rem;
        margin-bottom: 0;
        color: var(--clr-black);
      }
    }

    .nav-toggle {
      border: none;
      background: transparent;
      font-size: 2rem;
      cursor: pointer;
      display: block;
    }
  }

  .links-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 80%;
    background: var(--clr-white);
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    z-index: 999;

    ul {
      margin-left: 1.5rem;

      li a {
        color: var(--clr-black);
        font-weight: bold;
        display: inline-block;
        margin-bottom: 0.8rem;
      }
    }

    .btn {
      display: inline-block;
      margin-left: 1.5rem;
      background: var(--clr-purple);
      color: var(--clr-white);
      text-transform: unset;
    }
  }

  .show-sidebar {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .nav-header {
      .nav-toggle {
        display: none;
      }
    }

    .links-container {
      position: static;
      height: auto;
      transform: translateX(0);
      flex-direction: row;
      align-items: center;
      background: transparent;
      padding: 0;
      width: auto;
      .sidebar-header {
        display: none;
      }
      ul {
        display: flex;
        margin: 0;

        li {
          margin-right: 1.5rem;

          a {
            margin-bottom: 0;
          }
        }
      }

      .btn {
        margin-left: 2rem;
      }
    }
  }
}

`;

export default LandingNav
