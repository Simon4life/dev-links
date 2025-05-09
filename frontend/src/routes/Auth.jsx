import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { Form, useActionData, useSearchParams } from "react-router-dom";

const Auth = () => {
  // const [formValues, setFormValues] = useState({ firstName: "", lastName: "", email: "", password: "", isMember: false })
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') === 'login')

  const actionData = useActionData();


  return (
    <Wrapper>
      <Form method="POST" className="form" >
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <input type="hidden" name="mode" value={isLogin ? 'login' : 'register'} />
        {/* Name form input */}
        {!isLogin && (
          <div>
            <label htmlFor="email">First name</label>
            <input
              type="text"
              name="firstName"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>
        )}

        {!isLogin && (
          <div>
            <label htmlFor="email">Last name</label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>
        )}

        {/* email from input */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        {/* Password form input */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn submit-btn" >
          Submit
        </button>
        <p>{actionData?.error}</p>
        <p>
          {isLogin
            ? "Don't have an Account? "
            : "Already a Member? "}
          <button type="button" className="form-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </Form>
    </Wrapper>
  );

}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
 
  .form {
    width: 400px;
    background: white;
    padding: 1rem;
    margin: 3rem auto;
    position: relative;
    font-size: 1rem;
    label {
      display: block;
    }
    input {
      display: inline-block;
      width: 100%;
      padding: .5rem;
      border-radius: 5px;
      font-size: .9rem;
      margin-bottom: .5rem;

    }
    .submit-btn {
      display: block;
      width: 100%;
      margin: .6rem 0;
    }
    .form-btn {
      background: transparent;
      color: var(--clr-purple-dark);
      border: 0;
      font-size: 1rem;
      cursor: pointer;
      display: inline-block;
      margin-left: 0.2rem;
    }
  }

  .form-alert {
    color: var(--red-dark);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }
`;

export default Auth