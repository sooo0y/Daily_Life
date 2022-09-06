import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../assert/bg.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <div>
      <ToMain onClick={() => navigate('/')}/>
      <NavDiv>
        <NavList onClick={() => navigate("/post")}>Write</NavList>
        <NavList onClick={() => navigate("/myPage")}>My page</NavList>
        <NavList onClick={() => navigate("/login")}>Login</NavList>
      </NavDiv>
      </div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 300px;
  width: 1440px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  margin-left: 50px;

  & div {
    display: flex
  }
`;

const ToMain = styled.div`
  border-radius: 200px;
  width: 300px;
  height: 250px;

  margin: 30px 0;
  margin-left: 570px;
  cursor: pointer;
`;

const NavDiv = styled.div`
  display: flex;
  height: 80px;
  gap: 40px;
  background-color: red;
`;

const NavList = styled.h2`
  color: white;
  cursor: pointer;
  text-shadow: 3px 3px 6px black;
  /* background-color: beige; */
  padding: 5px;
  border-radius: 20px;
`;

