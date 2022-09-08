import styled from "styled-components";
import React, { useEffect } from "react";
import { __getPost } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(__getPost());
  }, [
    // posts.length
  ]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StList>
      <Contents>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              onClick={() => {
                navigate(`/post/${post.id}`);
              }}
            >
              <Like><span>🧡<p>{post.likeCount}</p></span><span>💌{post.commentCount}</span></Like>
              <p><b>{post.author}</b></p>
              <Img src={post.imageUrl} />
              <h3>{post.title}</h3>
            </Card>
          );
        })}
      </Contents>
    </StList>
  );
};

export default List;

const StList = styled.div`
  margin: auto;
  margin-top: 330px;
`;

const Contents = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 3px solid black;
  border-radius: 50px;
  padding: 15px;
  width: 200px;
  height: 300px;
  text-align: center;
`;

const Like = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
`;

const Img = styled.img`
  border: 1px solid black;
  width: 180px;
  height: 150px;
`;
