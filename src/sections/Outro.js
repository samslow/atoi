import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
`;

const TextBox = styled.div`
  padding-left: 5%;
`;

const ImageBox = styled.div``;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const P = styled.p`
  margin: 10px 0;
  font-size: 60px;
`;

const ContentsBox = styled.div`
  padding: 5% 15%;
`;

const Sentence = styled.span`
  font-size: 13px;
  line-height: 20px;
`;

export default Outro;
