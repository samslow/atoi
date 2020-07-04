import React from "react";
import styled from "styled-components";

import ProgressBox from "../components/ProgressBox";

const Name = () => {
  return (
    <Container>
      <ProgressBox index={"01"} percent={20} />
      <Title>
        <TextBox>
          <P>먼저,</P>
          <P>이름을</P>
          <P>알려주세요</P>
        </TextBox>
      </Title>
      <ContentsBox>
        <Content type="text" placeholder={"이름을 입력 해 주세요"} />
      </ContentsBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  padding-left: 5%;
  flex-direction: row;
  flex: 1;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const P = styled.p`
  margin: 10px 0;
  font-size: 60px;
`;

const ContentsBox = styled.div`
  margin: 5%;
  padding: 5% 0 5% 10%;
  overflow-y: scroll;
  overflow: hidden;
`;

const Content = styled.input`
  width: 100%;
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 2px #000 solid;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
`;

export default Name;
