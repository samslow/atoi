import React from "react";
import styled from "styled-components";

import { Container, TextBox, Title, P, ContentsBox, Sentence } from "./Intro";

const Notice = ({ title, msg }) => {
  return (
    <Container>
      <Title>
        <TextBox>
          <P>{title}</P>
        </TextBox>
      </Title>
      <ContentsInputBox>
        <Sentence>{msg}</Sentence>
      </ContentsInputBox>
    </Container>
  );
};

const ContentsInputBox = styled(ContentsBox)`
  overflow-y: scroll;
`;

export default Notice;
