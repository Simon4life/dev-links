import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Phone from "../components/Phone"
import ProfileForm from '../components/ProfileForm';
import customFetch from "../utils/customFetch";
import { useUserContext } from '../context/user_context';

const ProfilePage = () => {
  const { user } = useUserContext();
  const { userId } = user;
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const fetchUserData = async() => {
    try {
      const response = await customFetch().get(`/api/v1/profile/${userId}`);
      const {user}= response.data
      setData(user);
      setIsLoading(false)
      return user;
    } catch (error) {
      console.log(error)
    }
    
  }
  useEffect(() =>{
    fetchUserData();
  }, [])

  if(isLoading) {
    return <h2>Loading</h2>
  }

  return (
    <Wrapper className="">
      <div className="main-content">
        <Phone />
        <div className="section-center">
          <div className="form-header">
            <h3>Profile Details</h3>
            <p>Add your details to add a personal touch to your profile.</p>
          </div>
          <ProfileForm formValues={data}/>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 95vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 930px) {
    .main-content {
      gap: 0;
    }
  }
  .section-center {
    background: white;
    padding: 1.8rem;
    .form-header {
      h3 {
        margin-bottom: 0.2rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export default ProfilePage