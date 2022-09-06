import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/";
import { updatePost } from "../../../redux/modules/post";

const Modal = (props) => {
  const dispatch = useDispatch();

  const [editPost, setEditPost] = useState({
    id: props.eachPost.id,
    author: props.eachPost.author,
    title: props.eachPost.title,
    desc: props.eachPost.desc,
    image: props.eachPost.image,
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
            value={props.eachPost.desc}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                desc: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>이미지</label>
          <input
            type="file"
            name="image"
            value={props.eachPost.image}
            onChange={(e) => {
              setEditPost({
                ...editPost,
                image: e.target.value,
              });
            }}
          />
        </div>
        <Buttons>
          <button
            type="button"
            onClick={() => {
              dispatch(updatePost(editPost));
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
