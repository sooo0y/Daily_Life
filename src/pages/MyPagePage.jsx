import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MyPage from "../components/MyPage";

const MyPagePage = () => {
  return (
    <StMyPage>
      <Header />
      <MyPage />
    </StMyPage>
  );
};

export default MyPagePage;

const StMyPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
`;