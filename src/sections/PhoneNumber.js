import React from "react";
import styled from "styled-components";

import ProgressBox from "../components/ProgressBox";

const PhoneNumber = ({ value, onChange }) => {
  return (
    <Container>
      <ProgressBox index={"03"} percent={60} />
      <Title>
        <TextBox>
          <P>당신의</P>
          <P>연락처를</P>
          <P>알려주세요</P>
        </TextBox>
      </Title>
      <ContentsBox>
        <Content
          type="number"
          placeholder={"핸드폰 번호를 입력해 주세요"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
        />
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
  height: 25vh;
  margin: 0 5%;
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
  border-radius: 0;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
`;

export default PhoneNumber;
