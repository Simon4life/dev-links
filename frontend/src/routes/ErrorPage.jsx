import React from 'react'
import {useRouteError} from "react-router-dom";
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Wrapper className='section section-center'>
      <div>
        <h2>Opps Eroor Page</h2>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`

export default ErrorPage