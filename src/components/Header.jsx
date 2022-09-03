import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <div>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          지금V
        </h1>

        <NavList onClick={() => navigate("/write")}>Write</NavList>
        <NavList onClick={() => navigate("/mypage")}>My page</NavList>
        <NavList onClick={() => navigate("/login")}>Login</NavList>
      </div>
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
  & div {
    display: flex;
    gap: 20px;
    float: right;
    margin-right: 300px;
  }

  background-color: #d490e0;
`;

const NavList = styled.p`
  color: black;
`;
