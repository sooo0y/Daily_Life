import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Detail from "../components/Detail";
import Comment from "../components/Comment";

const Post = () => {
  return (
    <StPost>
      <Header />
      <Detail />
      <Comment />
    </StPost>
  );
};

export default Post;

const StPost = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
`;