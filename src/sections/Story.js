import React from "react";
import styled from "styled-components";

import ProgressBox from "../components/ProgressBox";

const Story = ({ value, onChange }) => {
  return (
    <Container>
      <ProgressBox index={"02"} percent={40} />
      <Title>
        <TextBox>
          <P>당신의</P>
          <P>이야기를</P>
          <P>들려주세요</P>
        </TextBox>
      </Title>
      <ContentsBox>
        <StoryBox
          placeholder={"이야기를 입력 해 주세요"}
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
  margin: 0 5%;
  padding: 10px 0;
  overflow-y: scroll;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoryBox = styled.textarea`
  font-family: "JejuMyeongjo";
  background-color: transparent;
  font-size: 20px;
  line-height: 20px;
  width: 90%;
  height: 25vh;
  border: none;
  padding: 2%;
  border-radius: 0;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default Story;
