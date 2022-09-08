import styled from "styled-components";
import { addPost, __addPost } from "../redux/modules/post";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import Upload from "../../shared/Upload";
import nextId from "react-id-generator";
import { useSelector } from "react-redux";
import { __imageUpload } from "../redux/modules/image";
import { instance } from "../shared/Api";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const token = getCookie("ACCESS_TOKEN");
  // const refresh = getCookie("REFRESH_TOKEN");
  // const username = window.localStorage.getItem("username")

  const imageUrl = useSelector((state) => state.image.image);
  // console.log(imageUrl)
  const [image, setImage] = useState(null);

  // 새롭게 추가할 post의 데이터를 저장할 state 생성
  const initialState = {
    // postId: nextId(),
    id: "",
    title: "",
    // author: username,
    imageUrl: "",
    content: "",
    // modifiedAt: "",
    // likeCount: 0,
    // commentCount: 0,
  };

  const [post, setPost] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({...post, imageUrl}));
    setPost(initialState);
    navigate("/");
    window.location.reload()
  };

  // const uploadImage = (e) => {
  //   e.preventDefault()

  //   const formData = new FormData();
  //   formData.append("image", image);

  //   dispatch(imageUpload())

  //   const data = instance.post("/api/image", formData, {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   });
  //   console.log(data);

  //       // const image = new Blob([json], { type: "multipart/form-data" });
  //   // formData.append("image", image);

  //   // instance.post("/api/image", formData, {
  //   //   headers: {
  //   //     "content-type": "multipart/form-data",
  //   //   },
  //   // });
  // }

  const imageUpload = (e) => {
    // e.preventDefault();
    const fileList = e.target.files;
    // console.log(fileList);

    const formData = new FormData();
    formData.append("image", fileList[0]);
    dispatch(__imageUpload(formData));
    setImage(fileList[0]);
    // instance.post("/api/image", formData, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // })
  };

  return (
    <>
      <Header />
      <StWrite onSubmit={onSubmitHandler}>
        <Container>
          <Title>
            <p><b>제목</b></p>
            <textarea
              type="text"
              name="title"
              value={post.title}
              onChange={onChangeHandler}
              required
            />
          </Title>
          <Body>
            <p><b>내용</b></p>
            <textarea
              type="text"
              name="content"
              value={post.content}
              onChange={onChangeHandler}
              required
            />
          </Body>
          <ImageInput
            type="file"
            // accept=".gif, .jpg, .png, .jpeg"
            // id="image"
            onChange={imageUpload}
            // required
          />
          <Buttons>
            <button onClick={() => navigate("/")}><b>취소</b></button>
            <button><b>작성완료</b></button>
          </Buttons>
        </Container>
      </StWrite>
    </>
  );
};

export default Write;

const StWrite = styled.form`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;

  & textarea {
    margin: 5px 0;
    padding: 20px;
    width: 500px;
    border-radius: 50px;;
    border: 2px solid black;
  }
  margin-top: 320px;

  & button {
    margin: auto 20px;
    border-radius: 20px;
    background-color: #da8181ac;
    border: none;
    width: 70px;
    height: 50px;
  }
`;

const Container = styled.div`
  /* border: 3px solid black; */
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 20px;
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 20px;

  & textarea {
    height: 250px;
  }
`;

const ImageInput = styled.input`
  margin: 20px auto;
  margin-left: 200px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 200px;
`;
