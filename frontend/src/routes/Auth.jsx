import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { Form, useSubmit} from "react-router-dom";

const Auth = () => {
  const [formValues, setFormValues] = useState({firstName: "", lastName: "", email: "", password: "", isMember: false})

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const submit = useSubmit();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formValues.isMember) {
      const {email, password } = formValues;
      if (!email || !password) return;
      submit({email, password, intent: "login"}, {method: 'POST', action: "/verify",})
    } else {
      const { firstName, lastName, email, password } = formValues;
      if (!firstName || !lastName || !email || !password) return;
      submit(
        { firstName, lastName, email, password, intent: "register" },
        { method: "POST", action: "/verify" }
      );
    } 
  }

  const toggleMember = () => {
    setFormValues({email: "", firstName: "", lastName: "", password: "", isMember: !formValues.isMember, })
  }

  return (
    <Wrapper>
      <Form className="form"  onSubmit={handleSubmit}>
        <h2>{formValues.isMember ? "Login" : "Register"}</h2>

        {/* Name form input */}
        {!formValues.isMember && (
          <div>
            <label htmlFor="email">first name</label>
            <input
              type="text"
              name="firstName"
              className="form-input"
              onChange={handleChange}
              placeholder="Enter your name"
              value={formValues.firstName}
            />
          </div>
        )}

        {!formValues.isMember && (
          <div>
            <label htmlFor="email">Last name</label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              onChange={handleChange}
              placeholder="Enter your name"
              value={formValues.lastName}
            />
          </div>
        )}

        {/* email from input */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-input"
            value={formValues.email}
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
            onChange={handleChange}
            placeholder="Enter your password"
            value={formValues.password}
          />
        </div>
        <button type="submit" className="btn submit-btn" >
          Submit
        </button>
        <p>
          {formValues.isMember
            ? "Don't have an Account? "
            : "Already a Member? "}
          <button type="button" className="form-btn" onClick={toggleMember}>
            {formValues.isMember ? "Register" : "Login"}
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
 
  .form {
    width: 400px;
    background: white;
    padding: 1rem;
    margin: 3rem auto;
    position: relative;
    label {
      display: block;
    }
    input {
      display: inline-block;
      width: 100%;
      padding: .5rem;
      border: 2px solid var(--clr-grey-9);
      border-radius: 5px;
    }
    .submit-btn {
      display: block;
      width: 100%;
      margin: .6rem 0;
    }
    .form-btn {
      background: transparent;
      color: var(--clr-primary-5);
      border: 0;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }

  .form-alert {
    color: var(--red-dark);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }
`;

export default Auth