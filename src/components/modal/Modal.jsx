import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux/";
import { updateComment } from "../../redux/modules/comment";
import nextId from "react-id-generator";

const Modal = (props) => {
  
  const dispatch = useDispatch();

  // comment의 id와 선택한 버튼의 id가 같은 것만 골라줘???
  // const filteredComment = props.comments.filter((comment) => comment.id ==   )


  const [editComment, setEditComment] = useState({
    id: props.comment.id,
    parentId: props.comment.parentId,
    commentId: props.comment.commentId,
    author: props.comment.author,
    desc: props.comment.desc,
  });

  return (
    <StModal>
      <Card>
        <div>
          <label>댓글</label>
          <input
            type="text"
            name="desc"
            defaultValue={props.comment.desc}
            onChange={(e) => {
              setEditComment({
                ...editComment,
                desc: e.target.value,
              });
            }}
          />
        </div>
        <Buttons>
          <button
            type="button"
            onClick={() => {
              dispatch(
                updateComment({ ...editComment, desc: editComment.desc})
              );
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
