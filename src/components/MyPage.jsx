import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getPosts, deletePost } from "../redux/modules/post";
import ModalPortal from "./modal/commentEdit/Portal";
import Modal from "./modal/postEdit/Modal";

const MyPage = () => {
  const dispatch = useDispatch();

  const { isLoading, error, posts } = useSelector((state) => state.post);

  // 전체 포스트(posts) 중에 로그인 한 사람이 쓴 포스트(post.author == loginId)만 걸러줘
  // const filteredPost = posts.filter((post) => {});

  const [modal, setModal] = useState(false);

  const [eachPost, setEachPost] = useState();

  const onModalHandler = (post) => {
    setEachPost(post);
    setModal(!modal);
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
    <StMyPage>
      <h3>내가 작성한 글</h3>
      <List>
        {posts.map((post) => {
          return (
            <Card key={post.id}>
              <Buttons>
                <button onClick={() => onModalHandler(post)}>수정</button>
                <button
                  onClick={() => {
                    dispatch(deletePost(post.id));
                  }}
                >
                  삭제
                </button>
              </Buttons>
              <Contents>
                <p>{post.author}</p>
                <Img />
                <p>{post.title}</p>
              </Contents>
            </Card>
          );
        })}

        <ModalPortal>
          {modal && (
            <Modal
              onModalHandler={onModalHandler}
              modal={modal}
              setModal={setModal}
              eachPost={eachPost}
            />
          )}
        </ModalPortal>
      </List>
    </StMyPage>
  );
};

export default MyPage;

const StMyPage = styled.div`
  margin: auto 400px;
  padding: 30px 0 30px 0;
  margin-top: 140px;
  flex-wrap: wrap;
`;

const List = styled.div`
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

const Buttons = styled.div`
  float: right;
  & button {
    margin: 0 5px;
  }
`;

const Contents = styled.div`
  padding: 20px 10px;
  margin: 20px auto;
`;

const Img = styled.div`
  border: 1px solid black;
  width: 180px;
  height: 150px;
`;
