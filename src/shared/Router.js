import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Write from "../pages/Write";
import MyPage from "../pages/MyPage";
import Upload from "../pages/Upload";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/post/:id" element={<Post/>} />
        <Route path="/wirte" element={<Write/>} />
        <Route path="/mypage" element={<MyPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
