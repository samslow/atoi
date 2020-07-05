import React from "react";
import styled from "styled-components";

const Intro = ({ msg }) => {
  return (
    <Container>
      <Title>
        <TextBox>
          <P>아투와</P>
          <P>편지답장</P>
          <P>서비스</P>
        </TextBox>
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
      </Title>
      <ContentsBox>
        <Sentence>{msg}</Sentence>
      </ContentsBox>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
`;

export const TextBox = styled.div`
  width: 100%;
  padding-left: 5%;
`;

export const Title = styled.div`
  display: flex;
`;

export const P = styled.p`
  margin: 10px 0;
  font-size: 60px;
`;

export const ContentsBox = styled.div`
  padding: 5% 15%;
  height: 30vh;
`;

export const Sentence = styled.span`
  font-size: 13px;
  line-height: 20px;
`;

export const ImageBox = styled.div``;

export default Intro;
