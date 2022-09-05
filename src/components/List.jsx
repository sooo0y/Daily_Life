import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { __getPosts } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = () => {
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
    <StList>
      <A>
        <Contents>
          {posts.map((post) => {
            return (
              <Card
                key={post.id}
                onClick={() => {
                  navigate(`/post/${post.id}`);
                }}
              >
                <p>{post.author}</p>
                <Img />
                <p>{post.title}</p>
              </Card>
            );
          })}
        </Contents>
      </A>
    </StList>
  );
};

export default List;

const StList = styled.div`
  margin: auto 400px;
  padding: 30px 0 30px 0;
  margin-top: 140px;
  flex-wrap: wrap;
`;

const A = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 30px;
`;

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 200px;
  height: 300px;
  text-align: center;
`;

const Contents = styled.div`
  display: flex;
  gap: 50px;
`;

const Img = styled.div`
  border: 1px solid black;
  width: 180px;
  height: 150px;
`;
