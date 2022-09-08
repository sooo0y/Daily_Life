import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/";
import { __updatePost } from "../../../redux/modules/post";
import { getCookie } from "../../../shared/Cookie";
import { updatePost } from "../../../redux/modules/post";

const Modal = (props) => {
  const dispatch = useDispatch();

  // const token = getCookie("ACCESS_TOKEN");
  // const refresh = getCookie("REFRESH_TOKEN");
  // const username = window.localStorage.getItem("username")

  const [editPost, setEditPost] = useState({
    id: props.eachPost.id,
    // author: username,
    title: props.eachPost.title,
    content: props.eachPost.content,
    imageUrl: props.eachPost.imageUrl,
    // token: token,
    // refresh: refresh
  });

  return (
    <StModal>
      <Card>
        <div>
          <label>제목</label>
          <input
            type="text"
            name="title"
            defaultValue={props.eachPost.title}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>내용</label>
          <input
            type="text"
            name="desc"
            value={props.eachPost.content}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                content: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>이미지</label>
          <input
            type="file"
            name="image"
            value={props.eachPost.imageUrl}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                imageUrl: e.target.value,
              });
            }}
          />
        </div>
        <Buttons>
          <button
            type="button"
            onClick={() => {
              // dispatch(__updatePost(editPost));
              dispatch(updatePost(editPost))
              props.setModal(!props.modal);
            }}
          >
            수정
          </button>
          <button
            type="button"
            onClick={() => {
              props.setModal(!props.modal);
            }}
          >
            취소
          </button>
        </Buttons>
      </Card>
    </StModal>
  );
};
export default Modal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  & button {
    background-color: #da8181ac;
    border: none;
    width: 80px;
    height: 30px;
    margin: auto 10px;
    margin-top: 5px;
  }
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
    height: 130px;
  }
  & div {
    margin-top: 15px;
  }
`;

const Buttons = styled.div`
  & button {
    margin: 10px;
  }
`;
