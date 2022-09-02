import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <h1 onClick={navigate('/')}>지금V</h1>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  padding: 0 50px;
  color: white;
  & h1 {
    font-size: 40px;
    cursor: pointer;
    width: 350px;
  }

  background-color: #d490e0;
`;
