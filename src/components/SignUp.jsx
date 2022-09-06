import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { _signUp } from "../redux/modules/user";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  // const signup_ = () => {
  //   dispatch(_signUp(id, pwd, pwd_check));
  // };

  return (
    <StSignUp>
      <Form>
        <div className="form-list">
          <ID>
            <input
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
              placeholder="아이디를 입력해주세요"
              className="with-btn"
            />
            <button>중복확인</button>
          </ID>
        </div>

        <div className="form-list">
          <label>
            <input
              type="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              placeholder="비밀번호를 입력해주세요"
            />
          </label>
        </div>

        <div className="form-list">
          <label>
            <input
              type="password"
              onChange={(e) => {
                setPwdCheck(e.target.value);
              }}
              placeholder="비밀번호를 재입력해주세요"
            />
          </label>
        </div>
      </Form>
      <FormFoot>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          취소
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          회원가입하기
        </button>
      </FormFoot>
    </StSignUp>
  );
};

export default SignUp;

const StSignUp = styled.div`
  margin-top: 380px;
`;

const Form = styled.div`
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
display: flex;

& button {
  height: 50px;
  width: 100px;
}
`;