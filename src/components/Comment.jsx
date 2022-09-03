import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { deleteComment, __getComments } from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import nextId from "react-id-generator";
import axios from "axios";
import { addComment } from "../redux/modules/comment";
import Modal from "./modal/Modal";
import ModalPortal from "./modal/Portal";

const Comment = () => {
  const dispatch = useDispatch();

  const { isLoading, error, comments } = useSelector((state) => state.comment);

  // comment의 id값
  const number = nextId();

  // comment.parentId와 비교해서 같은 id의 post를 찾음 = filteredComment
  const { id } = useParams();
  const filteredComment = comments.filter((comment) => comment.parentId == id);

  // modal이 true이면 열고, false이면 닫혀있는 상태이기때문에 initialstate는 false임
  const [modal, setModal] = useState(false);

  const onModalHandler = () => {
    setModal(!modal);
  };

  // 새로 작성하는 comment를 담아주기 위한 state
  const initialState = {
    parentId: id,
    commentId: 0,
    author: "김소연", // 나중에 loginId로 바꿀 것
    desc: "",
    modal:false
  };

  const [comment, setComment] = useState(initialState);

  // input에 들어오는 값으로 comment를 추가
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value, commentId: number });
  };

  // 추가된 comment를 서버에 보내줌
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addComment({ ...comment, commentId: number }));
    setComment(initialState);
  };

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StComment>
      <form onSubmit={onSubmitHandler}>
        <label>Comment</label>
        <input
          type="text"
          name="desc"
          value={comment.desc}
          onChange={onChangeHandler}
          required
        />
        <button>작성</button>
      </form>

      <Comments>
        {filteredComment.map((comment) => {
          return (
            <Content key={comment.commentId}>
              <p>{comment.author}</p>
              <p>{comment.desc}</p>
              <p>{comment.modifiedAt}</p>
              <ModalPortal>
                {modal && (
                  <Modal
                    onModalHandler={onModalHandler}
                    comment={comment}
                    comments={comments}
                    modal={modal}
                    setModal={setModal}
                  />
                )}
              </ModalPortal>

              <div>
                <button onClick={onModalHandler}>수정</button>
                <button
                  onClick={() => {
                    dispatch(deleteComment(comment));
                  }}
                >
                  삭제
                </button>
              </div>
            </Content>
          );
        })}
      </Comments>
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  border: 1px solid black;
  margin: auto 400px;
  padding: 30px;

  & form {
    display: flex;
    gap: 15px;
  }
  & input {
    width: 580px;
  }
`;

const Comments = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
