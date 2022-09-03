import React from "react";
import styled from "styled-components";

const List = () => {

  return (
    <div>
      <CardWrap>
       <Card>
          <img
          style={{ width: "100%" }}
          src="https://www.jejutwn.com/data/photos/20220520/art_1652835126992_87d2ac.jpg"
          alt="NewJeans"
        ></img>
        <p>작성자</p>
        <p>제목</p>
      </Card><Card>
          <img
          style={{ width: "100%" }}
          src="https://www.jejutwn.com/data/photos/20220520/art_1652835126992_87d2ac.jpg"
          alt="NewJeans"
        ></img>
        <p>작성자</p>
        <p>제목</p>
      </Card>
      <Card>
          <img
          style={{ width: "100%" }}
          src="https://www.jejutwn.com/data/photos/20220520/art_1652835126992_87d2ac.jpg"
          alt="NewJeans"
        ></img>
        <p>작성자</p>
        <p>제목</p>
      </Card>s
        </CardWrap>
        
        </div>
  );
}

export default List;

const CardWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid black;
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 200px;
  border-radius: 10px;
  margin: 15px 0;
`;