import React,{useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  return (
  <StLogin>
        <form>
          <label>
            <input
              // value={id}
              // onChange={changeId}
              // type="text"
              // placeholder="아이디를 입력하세요."
            />
          </label>
        </form>
        <div>
          <label>
            <input
              // value={pwd}
              // onChange={changePwd}
              // type="password"
              // placeholder="비밀번호를 입력하세요."
            />
          </label>
          <>
          <button 
          onClick={() => {navigate("/signup")}}
          >회원가입</button>
          <button>로그인</button>
          </>
        </div>

    </StLogin>
  )
};

export default Login;

const StLogin = styled.div`
margin-top: 200px;
`;