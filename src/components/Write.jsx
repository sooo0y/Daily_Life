import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import nextId from "react-id-generator";
import axios from "axios";
import { addPost } from "../redux/modules/form";
import { useDispatch } from "react-redux";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = nextId();

  // 새롭게 추가할 post의 데이터를 저장할 state 생성
  const initialState = {
    id: 1,
    title: "",
    author: "",
    image: "",
    content: "",
    likeCount: 0,
    commentCount: 0,
  };

  const [post, setPost] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({ ...post, id: id }));
    axios.post(`http://localhost:3001/posts`, { ...post, id: id });
    setPost(initialState);
    navigate('/')
  };

  return (
    <StWrite 
    onSubmit={onSubmitHandler}
    >
      <div>
        <Title>
          <p>제목</p>
          <textarea
            type="text"
            name="title"
            value={post.title}
            onChange={onChangeHandler}
          />
        </Title>
        <Body>
          <p>내용</p>
          <textarea
            type="text"
            name="content"
            value={post.content}
            onChange={onChangeHandler}
          />
        </Body>
        <input
          type="file"
          name="image"
          value={post.image}
          onChange={onChangeHandler}
        />
        <Buttons>
          <button>취소</button>
          <button>작성완료</button>
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
