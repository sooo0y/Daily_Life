import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Write from "../components/Write";

const WritePage = () => {
  return (
    <StWrite>
      <Header />
      <Write />
    </StWrite>
  );
};

export default WritePage;

const StWrite = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
`;