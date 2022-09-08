import React, { useState } from "react";
import styled from "styled-components";
import { instance } from "../shared/Api";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Upload = () => {
  let navigate = useNavigate();

  const  imageUrl  = useSelector((state) => state.image);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeHandler = (event, setState) => setState(event.target.value);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let req = {
      title: title,
      content: content,
    };
    const formData = new FormData();
    formData.append("image", image);

    let json = JSON.stringify(req);

    const titleblob = new Blob([json], { type: "application/json" });
    formData.append("title", titleblob);

    const contentblob = new Blob([json], { type: "application/json" });
    formData.append("content", contentblob);

    const URL = "http://13.124.178.220:8080/api/post";

    const data = await instance.post(URL, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(data);
    if (data.data.success) {
      navigate("/");
    }
  };

  const uploadImage = (event) => {
    const file = event.target.files;
    setImage(file[0]);
  };

  return (
    <>
      <Header />
      <StWrite onSubmit={onSubmitHandler}>
        <Container>
          <Title>
            <p>제목</p>
            <textarea
              placeholder="제목을 입력하세요."
              type="text"
              name="title"
              value={title}
              onChange={(event) => onChangeHandler(event, setTitle)}
              required
            />
          </Title>
          <Body>
            <p>내용</p>
            <textarea
            placeholder="내용을 입력하세요"
              type="text"
              name="content"
              value={content}
              onChange={(event) => onChangeHandler(event, setContent)}
              required
            />
          </Body>
          <label htmlFor="imgUrl">
            <input
              type="file"
              accept=".gif, .jpg, .png, .jpeg"
              onChange={uploadImage}
              id="imUrl"
              required
            />
          </label>
          <Buttons>
            <button type="button" onClick={() => navigate("/")}>취소</button>
            <button type="submit">작성완료</button>
          </Buttons>
        </Container>
      </StWrite>
    </>
  );
};

export default Upload;

const StWrite = styled.form`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;

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
