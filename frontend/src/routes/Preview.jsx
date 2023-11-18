import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard';
import {useParams} from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import CustomFetch from '../utils/customFetch';

const Preview = () => {
  const {userId} =  useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["preview"],
    queryFn: async() => {
      return await CustomFetch.get(`/api/v1/profile/${userId}`).then((res) => res.data);
    },
  });

  if(isLoading) {
    return <h2>Loading</h2>
  }

  if(error) {
    return <h2>Opps something went wrong</h2>
  }
  
  const {user} = data;
  return (
    <Wrapper>
      <div className="banner">
        <nav>
          <Link to="/">back to edit</Link>
          <Link to="/ ">share</Link>
        </nav>
      </div>
      <div className="preview-card">
        <PreviewCard user={user} />
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  .banner {
    background: var(--clr-purple);
    height: 40vh;
    border-radius: 0 0px 20px 20px;
    padding: 1rem;
    @media screen and (max-width: 700px) {
      height: 30vh;
    }
    nav {
      width: 90vw;
      padding: 1rem;
      display: flex;
      margin: 0 auto;
      background: white;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      a {
        display: block;
      }
    }
  }
  .preview-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Preview