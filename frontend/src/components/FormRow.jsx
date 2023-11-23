import React from "react";
import styled from "styled-components";
import { useLinksContext } from "../context/links_context";

const FormRow = ({_id, values}) => {
  const {deleteLink, handleFormChange} = useLinksContext();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormObj = { _id, [name]: value}
    handleFormChange(newFormObj);
  }

  return (
    <Wrapper>
        <div>
          <p>Link #{_id}</p>
          <button type="button" onClick={() => deleteLink(_id)}>
            Remove
          </button>
        </div>

        <label htmlFor="platform">platform</label>
        <select name="platform" id="platform" value={values.platform} onChange={handleChange}>
          <option value="Github">Github</option>
          <option value="Youtube">Youtube</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
        <label htmlFor="link" className="form-label">
          Link
        </label>
        <input
          type="text"
          name="link"
          onChange={handleChange}
          id="link"
          className="form-input"
          placeholder="Enter your link here"
          value={values.link}
        />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey);
  margin: 0.6rem 0;
  border-radius: 5px;
  padding: 0.6rem;
  p {
    margin-bottom: 0.2rem;
    color: #e9e5e5;
    font-weight: bolder;
  }
  p,
  label {
    color: #3f3b3b;
  }
  #platform {
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: space-between;
    button {
      background: none;
      border: 0;
      color: #3f3b3b;
      cursor: pointer;
      font-size: 0.9rem;
    }
  }
  .form-input,
  select {
    width: 100%;
    padding: 0.5rem;
    display: block;
    margin-bottom: 0.3rem;
    border-radius: 0.3rem;
    background: var(--clr-white);
    font-size: 0.9rem;
    border: 2px solid #bbbbbb;
  }
`;

export default FormRow;
