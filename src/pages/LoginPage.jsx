import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  // const login = () => {
  //   if (id === "" || pwd === "") {
  //     window.alert("아이디/비밀번호를 확인해주세요");
  //     return;
  //   }
  //   console.log("로그인진행중");
  //   dispatch(userActions.loginFB(id, pwd));
  // };

  return (
    <>
      {" "}
      <Header />{" "}
      <StLogin>
        <Form>
          <div className="form-list">
            <label>
              <input
                className="with-btn"
                value={id}
                onChange={changeId}
                type="text"
                placeholder="아이디를 입력하세요."
                required
              />
            </label>
          </div>
          <div className="form-list">
            <label>
              <input
                className="with-btn"
                value={pwd}
                onChange={changePwd}
                type="password"
                placeholder="비밀번호를 입력하세요."
                required
              />
            </label>
          </div>
        </Form>
        <FormFoot>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </button>
          <button
            onClick={() => {
              // Login();
              navigate("/");
            }}
          >
            로그인
          </button>
        </FormFoot>
      </StLogin>
    </>
  );
};

export default Login;

const StLogin = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
  margin-top: 380px;
`;

const Form = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  .form-list {
    display: flex;
    label {
      flex: 4;
      margin-bottom: 3rem;
      width: 100%;
      input {
        padding: 0 1rem;
        width: 100%;
        height: 3rem;
        border: 1px solid #dddddd;
        border-radius: 5px;
        &.with-btn {
          border-radius: 5px 0 0 5px;
        }
      }
    }
    /* button {
      flex: 1;
      height: 4rem;
      border-left: 0;
      font-size: 1.5rem;
      border-radius: 0 5px 5px 0;
    } */
  }
  .form-list + .form-list {
    margin-top: 0rem;
  }
`;

const FormFoot = styled.div`
  gap: 20px;

  display: flex;
  justify-content: center;
`;

// const Btn = styled.button`
//   padding: 1rem;
//   /* color: ${(props) => (!props.border ? "#888888;" : "#444444;")}; */
//   font-weight: 700;
//   /* border: ${(props) => (!props.border ? "0;" : "border: 1px solid #dddddd;")}; */
//   transition: 0.3s;
//   &:hover {
//     transition: 0.3s;
//   }
// `;
