import React from "react";

import {
  Container,
  TextBox,
  Title,
  P,
  ContentsBox,
  Sentence,
  ImageBox,
} from "./Intro";

const Outro = ({ msg }) => {
  return (
    <Container>
      <Title>
        <TextBox>
          <P>신청해</P>
          <P>주셔서</P>
          <P>감사합니다</P>
        </TextBox>
        <ImageBox>
          <img
            alt={"WritingHand"}
            src={require("../assets/images/writingHand.png")}
            style={{
              width: "40%",
              position: "absolute",
              marginTop: "5%",
              right: 0,
            }}
          />
        </ImageBox>
      </Title>
      <ContentsBox>
        <Sentence>{msg}</Sentence>
      </ContentsBox>
    </Container>
  );
};

export default Outro;
