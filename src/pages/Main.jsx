import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import List from "../components/List";

const Main = () => {

  return (
    <StMain>
    <Header/>
    <List/>
    </StMain>
  );


}

export default Main;

const StMain = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
`;