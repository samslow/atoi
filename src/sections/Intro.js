import React from "react";
import styled from "styled-components";

const Intro = () => {
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
              position: "absolute",
              marginTop: "5%",
              right: 0,
            }}
          />
        </ImageBox>
      </Title>
      <ContentsBox>
        <Sentence>
          아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지
          답장 서비스입니다.
        </Sentence>
        <br />·<br />
        <Sentence>
          아투와는 편지를 받는 경험으로 차가운 디지털 시대에서 인간적인 따듯함과
          작은 위안을 전하고자 합니다.
        </Sentence>
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
const ImageBox = styled.div``;

export default Intro;
