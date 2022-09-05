import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { deleteComment, __getComments } from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import nextId from "react-id-generator";
import { addComment } from "../redux/modules/comment";
import Modal from "./modal/commentEdit/Modal";
import ModalPortal from "./modal/commentEdit/Portal";

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

  const onModalHandler = (it) => {
    setEachComment(it);
    setModal(!modal);
  };

  // 새로 작성하는 comment를 담아주기 위한 state
  const initialState = {
    id: number,
    parentId: id,
    author: "김소연", // 나중에 loginId로 바꿀 것
    desc: "",
    modifiedAt: "",
    modal: false,
  };

  const [comment, setComment] = useState(initialState);

  const [eachComment, setEachComment] = useState();

  // input에 들어오는 값으로 comment를 추가
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  // 추가된 comment를 서버에 보내주고, comment 초기화
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addComment(comment));
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
        {filteredComment.map((it) => {
          return (
            <Content key={it.id}>
              <p>{it.author}</p>
              <p>{it.desc}</p>
              <p>{it.modifiedAt}</p>
              <div>
                <button onClick={() => onModalHandler(it)}>수정</button>
                <button
                  onClick={() => {
                    dispatch(deleteComment(it.id));
                  }}
                >
                  삭제
                </button>
              </div>
            </Content>
          );
        })}
        <ModalPortal>
          {modal && (
            <Modal
              onModalHandler={onModalHandler}
              modal={modal}
              setModal={setModal}
              eachComment={eachComment}
            />
          )}
        </ModalPortal>
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
