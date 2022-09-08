import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { __login } from "../redux/modules/user";
import { __getPost } from "../redux/modules/post";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, serUser] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    serUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__login(user));
    navigate("/");
    alert("로그인 되었습니다.");
    window.location.reload()
  };

  return (
    <St>
      <Header />

      <StLogin>
        <Form>
          <div className="form-list">
            <label>
              <input
                className="with-btn"
                name="username"
                value={user.username}
                onChange={onChangeHandler}
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
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                type="password"
                placeholder="비밀번호를 입력하세요."
                required
              />
            </label>
          </div>
        </Form>
        <FormFoot>
          <button onClick={onSubmitHandler}>
            <b>로그인</b>
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            <b> 회원가입</b>
          </button>
        </FormFoot>
      </StLogin>
    </St>
  );
};

export default Login;

const St = styled.div`
  margin-top: 450px;

  & button {
    background-color: #da8181ac;
    border: none;
    width: 80px;
    height: 30px;
    margin: auto 10px;
    margin-top: 5px;
  }
`;

const ToHome = styled.button`
  margin-left: 500px;
`;

const StLogin = styled.form`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
  margin-top: 50px;
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
