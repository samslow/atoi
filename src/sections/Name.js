import React from "react";
import styled from "styled-components";

import ProgressBox from "../components/ProgressBox";
import { TextBox, Title, P } from "./Intro";

const Name = ({ value, onChange, onSubmit }) => {
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
      <InputBox>
        <Content
          type="text"
          placeholder={"이름을 입력해 주세요"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              // When input Enter key
              onSubmit();
            }
          }}
          required
        />
      </InputBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const InputBox = styled.div`
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
  border-radius: 0;
  padding: 10px 0;
  font-family: "JejuMyeongjo";

  &:focus {
    outline: none;
  }
`;

export default Name;
