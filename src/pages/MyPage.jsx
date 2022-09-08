import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getPost, __deletePost, deletePost } from "../redux/modules/post";
import ModalPortal from "../components/modal/postEdit/Portal";
import PostModal from "../components/modal/postEdit/PostModal";
import Header from "../components/Header";

const MyPage = () => {
  const dispatch = useDispatch();
  const username = window.localStorage.getItem("username");
  const { isLoading, error, posts } = useSelector((state) => state.post);

  // 전체 포스트(posts) 중에 로그인 한 사람이 쓴 포스트(post.author == username)만 걸러줘
  const filteredPost = posts.filter((post) => post.author == username);

  const [modal, setModal] = useState(false);

  const [eachPost, setEachPost] = useState();

  const onModalHandler = (post) => {
    setEachPost(post);
    setModal(!modal);
  };

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
    <>
      <Header />
      <StMyPage>
        <h3>📜 내가 작성한 글 📜</h3>
        <List>
          {filteredPost.map((post) => {
            return (
              <Card key={post.id}>
                <Buttons>
                  <button 
                  // onClick={() => onModalHandler(post)
                  // }
                  >
                    <b>수정</b>
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deletePost(post.id));
                    }}
                  >
                    <b> 삭제</b>
                  </button>
                </Buttons>
                <Contents>
                  <p><b>{post.author}</b></p>
                  <Img src={post.imageUrl} />
                  <p><b>{post.title}</b></p>
                </Contents>
              </Card>
            );
          })}

          <ModalPortal>
            {modal && (
              <PostModal
                onModalHandler={onModalHandler}
                modal={modal}
                setModal={setModal}
                eachPost={eachPost}
              />
            )}
          </ModalPortal>
        </List>
      </StMyPage>
    </>
  );
};

export default MyPage;

const StMyPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
  padding: 20px 0;
  margin-top: 310px;
`;

const List = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 50px;
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

const Buttons = styled.div`
  float: center;
  & button {
    background-color: #da8181ac;
    border: none;
    width: 60px;
    height: 30px;
    margin: auto 10px;
    margin-top: 5px;
  }
`;

const Contents = styled.div`
  padding: 20px 10px;
  margin: -10px auto;
`;

const Img = styled.img`
  width: 180px;
  height: 150px;
  border-radius: 10px;
`;
