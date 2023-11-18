import React, {useState} from 'react'
import {useUserContext} from "../context/user_context";
import styled from 'styled-components';
import {BsCardImage} from "react-icons/bs";
import defaultImg from "../assets/default.jpg";

const ProfileForm = ({formValues}) => {
  const [userProfile, setUserProfile] = useState(formValues);
  const {updateUserProfile} =  useUserContext();
  const handleTextChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setUserProfile({...userProfile, [name]: value})
  }
  const handleFileChange = (e) => {
    setUserProfile({...userProfile, profilePicture: e.target.files[0]})
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    const userInfo = new FormData();
    userInfo.append("firstName", userProfile.firstName)
    userInfo.append("lastName", userProfile.lastName)
    userInfo.append("email", userProfile.email)
    userInfo.append("image", userProfile.profilePicture);
    updateUserProfile(userInfo);
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div>
        <label className="profile-picture" htmlFor="profile-picture">
          Profile Picture
          <input
            type="file"
            name="profile-picture"
            id="profile-picture"
            placeholder="change image"
            onChange={handleFileChange}
          />
          <div>
            <span>
              <BsCardImage />
            </span>
          </div>
          <p>
            image must be below 1024x1024px.
            <br />
            Use PNG JPG or BMP format.
          </p>
        </label>
      </div>
      <div className="profile-input">
        <div>
          <label htmlFor="firstName">First name*</label>
          <input
            type="text"
            className="form-input"
            value={userProfile.firstName}
            onChange={handleTextChange}
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name*</label>
          <input
            type="text"
            className="form-input"
            value={userProfile.lastName}
            onChange={handleTextChange}
            name="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-input"
            value={userProfile.email}
            onChange={handleTextChange}
            name="email"
          />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn" type="submit">
          Save
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  .form-input {
    width: 400px;
    padding: 0.5rem;
    display: block;
    margin-bottom: 0.3rem;
    border: 2px solid #bbbbbb;
    border-radius: 0.3rem;
    // outline: 2px solid var(--clr-purple);
  }
  .profile-picture {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 0.8rem;
    background: var(--clr-grey);
    cursor: pointer;
    margin-bottom: 1rem;
    color: var(--clr-grey-light);
    input[type="file"] {
      display: none;
    }
    @media screen and (max-width: 700px) {
      p {
        display: none;
      }
    }
    div {
      // background: blue;
      background-image: url(${defaultImg});
      background-position: center;
      background-size: cover;
      width: 8rem;
      height: 8rem;
      position: relative;
      border-radius: 1rem;
      span {
        border-radius: 0.5rem;
        position: absolute;
        background: var(--tranparent-background);
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
    p {
      font-size: 0.9rem;
    }
  }
  .profile-input {
    background: var(--clr-grey);
    color: grey;
    padding: 1rem;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .btn-container {
    float: right;
    .btn {
      display: inline-block;
    }
    @media screen and (max-width: 700px) {
      float: unset;
      .btn {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
`;

export default ProfileForm