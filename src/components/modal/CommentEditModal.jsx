import React from "react";
import styled from "styled-components";

const CommentEditModal = () => {
  return (
    <StModal>
      <Card>
        <div>
          <label>제목</label>
          <input />
        </div>
        <div>
          <label>내용</label>
          <textarea />
        </div>
        <div>
          <button>취소</button>
          <button>수정</button>
        </div>
      </Card>
    </StModal>
  );
};

export default CommentEditModal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Card = styled.div`
  padding: 30px;
  position: absolute;
  top: calc(50vh - 250px);
  left: calc(50vw - 320px);
  background-color: white;
  display: block;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  & input {
    width: 400px;
  }
  & textarea {
    width: 400px;
    height: 280px;
  }
  & div {
    margin-top: 15px;
  }
  & label {
    margin-right: 20px;
  }

  & button {
    margin: 0 10px;
  }
`;
