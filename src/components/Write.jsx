import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Write = () => {
  const navigate = useNavigate();

  return (
    <StWrite>
      <div>
        <Title>
          <p>제목</p>
          <textarea />
        </Title>
        <Body>
          <p>내용</p>
          <textarea />
        </Body>
        <input type="file" />
        <Buttons>
          <button onClick={navigate("/")}>취소</button>
          <button onClick={navigate("/")}>작성완료</button>
        </Buttons>
      </div>
    </StWrite>
  );
};

export default Write;

const StWrite = styled.form`
  display: flex;
  justify-content: space-between;
  margin: auto 400px;
  border: 1px solid black;
  padding: 30px 100px;

  & textarea {
    margin: 10px 0;
    width: 500px;
  }
  margin-top: 140px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 20px;

  & textarea {
    height: 250px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 200px;
`;
