import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../assert/bg.png";
import { deleteCookie } from "../shared/Cookie";

const Header = () => {
  const navigate = useNavigate();
  const username = window.localStorage.getItem("username");

  const Logout = () => {
    window.localStorage.removeItem("username");
    deleteCookie("ACCESS_TOKEN");
    deleteCookie("REFRESH_TOKEN");
    deleteCookie("isLogin");
    navigate("/");
    alert("로그아웃 되었습니다.");
  };

  return (
    <StHeader>
      <div>
        <ToMain onClick={() => navigate("/")} />
        <NavDiv>
          {/* <NavList onClick={() => navigate("/")}>Home</NavList> */}

          {username == null ? null : (
            <NavList onClick={() => navigate("/wirte")}>Write</NavList>
          )}

          {username == null ? null : (
            <NavList onClick={() => navigate("/mypage")}>MyPage</NavList>
          )}

          {/* <NavList onClick={() => navigate("/login")}>Login</NavList> */}
          {username == null ? (
            <NavList onClick={() => navigate("/login")}>Login</NavList>
          ) : (
            <NavList onClick={Logout}>Logout</NavList>
          )}
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
`;

const ToMain = styled.div`
  border-radius: 200px;
  width: 250px;
  height: 230px;

  margin-top: 20px;
  margin-left: 590px;
  cursor: pointer;
  /* background-color:red;  */
`;

const NavDiv = styled.div`
  display: flex;
  gap: 40px;
  /* background-color: red; */
  width: 450px;
  margin-left: 1050px;
  margin-top: -40px;
`;

const NavList = styled.h2`
  color: white;
  cursor: pointer;
  text-shadow: 3px 3px 6px black;
  /* background-color: beige; */
  /* background: rgba(197, 179, 133, 0.764); */
  padding: 5px;
  border-radius: 20px;
`;
