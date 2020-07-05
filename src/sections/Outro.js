import React from "react";
import { isMobile } from "react-device-detect";

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
        {isMobile ? (
          <ImageBox>
            <img
              alt={"WrigintHand"}
              src={require("../assets/images/writingHand.png")}
              style={{
                width: "40%",
                maxWidth: "200px",
                position: "absolute",
                marginTop: "5%",
                right: 0,
              }}
            />
          </ImageBox>
        ) : (
          <ImageBox>
            <img
              alt={"WritingHand"}
              src={require("../assets/images/writingHand.png")}
              style={{
                width: "40%",
                maxWidth: "400px",
                position: "absolute",
                marginTop: "5%",
                right: 0,
                bottom: "15%",
              }}
            />
          </ImageBox>
        )}
      </Title>
      <ContentsBox>
        <Sentence>{msg}</Sentence>
      </ContentsBox>
    </Container>
  );
};

export default Outro;
