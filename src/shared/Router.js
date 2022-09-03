import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Main from "../pages/Main";
import WritePage from "../pages/WritePage";
import MyPagePage from "../pages/MyPagePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/post/:id" element={<Post/>} />
        <Route path="/write" element={<WritePage/>} />
        <Route path="/mypage" element={<MyPagePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
