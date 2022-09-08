import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/";
import { updateComment, __updateComment } from "../../../redux/modules/comment";
import { getCookie } from "../../../shared/Cookie";
import { __getComment } from "../../../redux/modules/comment";

const Modal = (props) => {
  const dispatch = useDispatch();

  const token = getCookie("ACCESS_TOKEN");
  const refresh = getCookie("REFRESH_TOKEN");
  const username = window.localStorage.getItem("username");

  const [editComment, setEditComment] = useState({
    id: props.eachComment.id,
    // parentId: props.eachComment.parentId,
    comment: props.eachComment.comment,
    // author: username,
    // token: token,
    // refresh: refresh
  });

  // useEffect(() => {
  //   dispatch(__getComment());
  // }, []);

  return (
    <StModal>
      <Card>
        <div>
          <textarea
            type="text"
            name="desc"
            value={editComment.comment}
            onChange={(e) => {
              setEditComment({
                ...editComment,
                comment: e.target.value,
              });
            }}
          />
        </div>
        <Buttons>
          <button
            type="button"
            onClick={() => {
              // dispatch(__updateComment(editComment));
              dispatch(updateComment(editComment));
              props.setModal(!props.modal);
            }}
          >
            <b>수정</b>
          </button>
          <button
            type="button"
            onClick={() => {
              props.setModal(!props.modal);
            }}
          >
            <b> 취소</b>
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
    border-radius: 20px;
    padding: 30px;
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
