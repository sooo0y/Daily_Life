import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect } from "react";
import { __getPosts } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, posts } = useSelector((state) => state.post);

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
    <StDetail>
      <button onClick={() => {navigate(-1)}}>이전으로</button>
      {posts.map((post) => {
        if (post.id == param.id) {
          return (
            <Post key={post.id}>
              <Title>
              <p>{post.author}</p>
              <p>{post.modifiedAt}</p>
              </Title>
              <h3>{post.title}</h3>
              <Img />
              <p>{post.desc}</p>
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
`;

const Post = styled.div`
  border: 1px solid black;
  margin: 30px;
  padding: 30px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  gap: 30px;
`;

const Img = styled.div`
  /* border: 1px solid black; */
  width: 100px;
  height: 100px;
`;

