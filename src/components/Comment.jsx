import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  addComment,
  deleteComment,
  __deleteComment,
  __getComment,
} from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../redux/modules/comment";
import CommentModal from "./modal/commentEdit/CommentModal";
import ModalPortal from "./modal/commentEdit/Portal";
import nextId from "react-id-generator";
import { getCookie } from "../shared/Cookie.js";

const Comment = () => {
  const dispatch = useDispatch();

  const { isLoading, error, comments } = useSelector((state) => state.comment);
  // comment의 id값
  // const number = nextId();
  // console.log(comments)

  // comment.parentId와 비교해서 같은 id의 post를 찾음 = filteredComment
  const { id } = useParams();
  const filteredComment = comments.filter((comment) => comment.parentId == id);
  // console.log(filteredComment)
  const result = filteredComment.slice(0).reverse();

  // modal이 true이면 열고, false이면 닫혀있는 상태이기때문에 initialstate는 false임
  const [modal, setModal] = useState(false);

  const onModalHandler = (it) => {
    setEachComment(it);
    setModal(!modal);
  };

  // const token = getCookie("ACCESS_TOKEN");
  // const refresh = getCookie("REFRESH_TOKEN");
  const username = window.localStorage.getItem("username");

  // 새로 작성하는 comment를 담아주기 위한 state
  const initialState = {
    // commentId: nextId(),
    id: "",
    parentId: id,
    author: username,
    comment: "",
    // modifiedAt: "",
    // token: token,
    // refresh: refresh
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
    // dispatch(__addComment(comment));
    dispatch(addComment(comment));
    setComment({ ...initialState, id: +1 });
  };

  useEffect(() => {
    dispatch(__getComment());
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StComment>
      <Container>
        <form onSubmit={onSubmitHandler}>
          <p><b>Comment</b></p>
          <input
            type="text"
            name="comment"
            value={comment.comment}
            onChange={onChangeHandler}
            required
          />
          <button><b>작성</b></button>
        </form>

        <Comments>
          {result.map((it) => {
            return (
              <Content key={it.id}>
                <p><b>{it.author}</b></p>
                <p>{it.comment}</p>
                {/* <p>{it.modifiedAt[0]}. {it.modifiedAt[1]}. {it.modifiedAt[2]}. {it.modifiedAt[3]} : {it.modifiedAt[4]} : {it.modifiedAt[5]}</p> */}
                <div>
                  <button onClick={() => onModalHandler(it)}><b>수정</b></button>
                  <button
                    onClick={() => {
                      // dispatch(__deleteComment(it.id));
                      dispatch(deleteComment(it.id));
                    }}
                  >
                   <b> 삭제</b>
                  </button>
                </div>
              </Content>
            );
          })}
          <ModalPortal>
            {modal && (
              <CommentModal
                onModalHandler={onModalHandler}
                modal={modal}
                setModal={setModal}
                eachComment={eachComment}
              />
            )}
          </ModalPortal>
        </Comments>
      </Container>
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  margin: 0 150px;

  & form {
    display: flex;
    gap: 15px;
  }
  & input {
    width: 540px;
    border-radius: 20px;
  }
  & button {
    background-color: #da8181ac;
    border: none;
    width: 80px;
    height: 30px;
    margin: auto 10px;
    margin-top: 5px;
  }
`;


const Container = styled.div`
  border: 2px solid black;
  border-radius: 50px;
  margin: 30px;
  padding: 30px;
  text-align: center;
  width: 700px;
`;

const Comments = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;
