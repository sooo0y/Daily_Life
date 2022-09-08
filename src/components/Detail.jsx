import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect } from "react";
import { __getPost } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StDetail>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <b>이전으로</b>
      </button>
      {posts.map((post) => {
        if (post.id == param.id) {
          return (
            <Post key={post.id}>
              <Title>
                <h3>{post.author}</h3>
                <p></p>
                <h3>
                  {post.modifiedAt[0]}. {post.modifiedAt[1]}.{" "}
                  {post.modifiedAt[2]}. {post.modifiedAt[3]}:
                  {post.modifiedAt[4]}
                </h3>
              </Title>
              <h3>{post.title}</h3>
              <Img src={post.imageUrl} />
              <Content>{post.content}</Content>
              <Bottom>
                <p>{post.likeCount}</p>
                <p>{post.commentCount}</p>
              </Bottom>
            </Post>
          );
        }
      })}
    </StDetail>
  );
};

export default Detail;

const StDetail = styled.div`
  margin: 0 150px;
  margin-top: 330px;

  & button {
    background-color: #da8181ac;
    border: none;
    width: 80px;
    height: 30px;
    margin: auto 10px;
    margin-top: 5px;
  }
`;

const Post = styled.div`
  border: 2px solid black;
  border-radius: 50px;
  margin: 30px;
  padding: 30px;
  text-align: center;
  width: 700px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 80px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 30px;
`;

const Img = styled.img`
  /* border: 1px solid black; */
  width: 500px;
  height: 500px;
`;

const Content = styled.p`
  margin-top: 30px;
`;
