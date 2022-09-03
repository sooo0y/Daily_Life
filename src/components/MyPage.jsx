import React from "react";
import styled from "styled-components";

const MyPage = () => {
  return (
    <StMyPage>
      <h3>내가 작성한 글</h3>
      <List>
        <Card>
          <Buttons>
            <button>수정</button>
            <button>삭제</button>
          </Buttons>
          <Contents>
            <p>작성자</p>
            <Img />
            <p>제목</p>
          </Contents>
        </Card>
      </List>
    </StMyPage>
  );
};

export default MyPage;

const StMyPage = styled.div`
  margin: auto 400px;
  padding: 30px 0 30px 0;
  margin-top: 140px;
  flex-wrap: wrap;
`;

const List = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 30px;
`;

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 200px;
  height: 300px;
  text-align: center;
`;

const Buttons = styled.div`
  float: right;
  & button {
    margin: 0 5px;
  }
`;

const Contents = styled.div`
  padding: 20px 10px;
  margin: 20px auto;
`;

const Img = styled.div`
  border: 1px solid black;
  width: 180px;
  height: 150px;
`;
