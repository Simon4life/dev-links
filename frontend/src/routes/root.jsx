import React from "react"
import Navbar from "../components/Navbar";
import styled from "styled-components"
import { Outlet} from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

const Wrapper = styled.main`

`

export default Root;