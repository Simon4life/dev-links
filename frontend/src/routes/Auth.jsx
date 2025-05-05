import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { Form, useActionData} from "react-router-dom";

const Auth = () => {
  const [formValues, setFormValues] = useState({firstName: "", lastName: "", email: "", password: "", isMember: false})

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  
  const actionData = useActionData();


  // submit user data for authentication
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if(formValues.isMember) {
  //     const {email, password } = formValues;
  //     if (!email || !password) return;
  //     submit({email, password, intent: "login"}, {method: 'POST', action: "/verify",})
  //   } else {
  //     const { firstName, lastName, email, password } = formValues;
  //     if (!firstName || !lastName || !email || !password) return;
  //     submit(
  //       { firstName, lastName, email, password, intent: "register" },
  //       { method: "POST", action: "/verify" }
  //     );
  //   } 
  // }

  // toggle form input
  const toggleMember = () => {
    setFormValues({email: "", firstName: "", lastName: "", password: "", isMember: !formValues.isMember, })
  }

  return (
    <Wrapper>
      <Form method="POST" className="form" >
        <h2>{formValues.isMember ? "Login" : "Register"}</h2>

        {/* Name form input */}
        {!formValues.isMember && (
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

        {!formValues.isMember && (
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
        <button type="submit" onClick={console.log(actionData)} className="btn submit-btn" >
          Submit
        </button>
        <p>{actionData?.error}</p>
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