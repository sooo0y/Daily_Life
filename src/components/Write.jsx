import styled from "styled-components";
import nextId from "react-id-generator";
import axios from "axios";
import { addPost } from "../redux/modules/post";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getPosts, deletePost } from "../redux/modules/post";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = nextId();

  const { isLoading, error, posts } = useSelector((state) => state.post);

  // 새롭게 추가할 post의 데이터를 저장할 state 생성
  const initialState = {
    id: id,
    title: "",
    author: "김소연",
    image: "",
    content: "",
    likeCount: 0,
    commentCount: 0,
    modal: false,
  };

  const [post, setPost] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost(post));
    setPost(initialState);
    navigate('/')
  };

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StWrite 
    onSubmit={onSubmitHandler}
    >
      <Container>
        <Title>
          <p>제목</p>
          <textarea
            type="text"
            name="title"
            value={post.title}
            onChange={onChangeHandler}
            required
          />
        </Title>
        <Body>
          <p>내용</p>
          <textarea
            type="text"
            name="content"
            value={post.content}
            onChange={onChangeHandler}
            required
          />
        </Body>
        <input
          type="file"
          name="image"
          value={post.image}
          onChange={onChangeHandler}
          // required
        />
        <Buttons>
          <button>취소</button>
          <button>작성완료</button>
        </Buttons>
      </Container>
    </StWrite>
  );
};

export default Write;

const StWrite = styled.form`
  display: flex;
  justify-content: center;
  margin: auto;

  & textarea {
    margin: 5px 0;
    width: 500px;
  }
  margin-top: 320px;
`;

const Container = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 10px;

  & textarea {
    height: 250px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 200px;
`;
