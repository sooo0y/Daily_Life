import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { __addUser } from "../redux/modules/user";
import { __idCheck } from "../redux/modules/user";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, serUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    serUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // dispatch(__addUser(user));
    dispatch(__idCheck(user));
    // navigate("/login");
  };

  // const idCheck = (e) => {
  //   e.preventDefault();
  //   dispatch(__idCheck(user));
  //   console.log(user)
  // };

  return (
    <St>
      <Header />

      <StSignUp>
        <Form onSubmit={onSubmitHandler}>
          <div className="form-list">
            <ID>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={onChangeHandler}
                placeholder="아이디를 입력해주세요"
                className="with-btn"
              />
              {/* <button type="button" onClick={idCheck}>
                중복확인
              </button> */}
            </ID>
          </div>

          <div className="form-list">
            <label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                placeholder="비밀번호를 입력해주세요"
              />
            </label>
          </div>

          <div className="form-list">
            <label>
              <input
                type="password"
                name="passwordConfirm"
                value={user.passwordConfirm}
                onChange={onChangeHandler}
                placeholder="비밀번호를 재입력해주세요"
              />
            </label>
          </div>
          <FormFoot>
            <ToHome
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              <b> 이전으로</b>
            </ToHome>
            <button
            // type="button"
            >
              <b>가입하기</b>
            </button>
          </FormFoot>
        </Form>
      </StSignUp>
    </St>
  );
};

export default SignUp;

const St = styled.div`
  margin-top: 340px;
  & button {
    background-color: #da8181ac;
    border: none;
    width: 100px;
    height: 30px;
    margin: auto 10px;
    margin-top: 5px;
    cursor: pointer;
  }
`;

const StSignUp = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: center;
  margin: auto 200px;
`;

const ToHome = styled.button`
  margin-left: 200px;
`;

const Form = styled.form`
  margin: 4rem auto 0 auto;
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

const ID = styled.label`


`;
