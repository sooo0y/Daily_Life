import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate()
return(
    
    <div>
         <HeaderWrap>
         <h1 onClick={()=>navigate("/")}>지금V</h1>
         <NavBar>
          <NavList onClick={()=>navigate("/write")}>Write</NavList>
          <NavList onClick={()=>navigate("/mypage")}>My page</NavList>
          <NavList onClick={()=>navigate("/login")}>Login</NavList>
        </NavBar>
        </HeaderWrap>
        </div>
        )
    }

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

const NavList = styled.p`
  margin-right: 10px;
  font-weight: 700;
`;
