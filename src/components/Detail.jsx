import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommentEditModal from "./modal/CommentEditModal";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <StDetail>
      <button onClick={navigate(-1)}>이전으로</button>
      <Post>
        <Title>
          <p>제목</p>
          <p>작성시간</p>
        </Title>
        {/* <img/> */}
        <Img />
        <p>내용</p>
        <Buttom>
          <p>좋아요 수</p>
          <p>댓글 수</p>
        </Buttom>
      </Post>

      <Comment>
        <form>
          <input />
          <button>작성</button>
        </form>

        <Comments>
          <p>ID</p>
          <p>댓글 내용</p>
          <p>작성시간</p>
          <button>수정</button>
          <button>삭제</button>
        </Comments>
      </Comment>

      {/* <CommentEditModal/> */}
    </StDetail>
  );
};

export default Detail;

const StDetail = styled.div`
  margin: auto 400px;
  padding: 30px 0 30px 0;
  margin-top: 140px;
`;

const Post = styled.div`
  border: 1px solid black;
  margin: 50px;
  padding: 20px 50px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttom = styled.div`
  display: flex;
  gap: 30px;
`;

const Comment = styled.div`
  border: 1px solid black;
  margin: 50px;
  padding: 20px 50px;
  & form {
    display: flex;
    gap: 15px;
  }
  & input {
    width: 500px;
  }
`;

const Img = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
`;

const Comments = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
