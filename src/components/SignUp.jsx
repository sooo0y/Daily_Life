import React from "react";
import styled from "styled-components";

const SignUp = () => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  return (
  <React.Fragment>
    <div className="form-list">
          <label>
            <input
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
              placeholder="아이디를 입력해주세요"
              className="with-btn"
            />
          </label>
          <button>중복확인</button>
        </div>
        
  </React.Fragment>
    
    );

}

export default SignUp;