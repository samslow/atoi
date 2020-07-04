import React from "react";
import styled from "styled-components";

const Outro = () => {
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
        <Sentence>
          신청 확정 및 우편 발송 안내는 적어주신
          <br />
          핸드폰 번호로 문자드립니다.
        </Sentence>
        <br />
        <br />
        <Sentence>
          써주신 글을 소중히 읽고, 따듯한 온기를 담은
          <br />
          편지 답장으로 찾아 뵙겠습니다.
        </Sentence>
        <br />
        <br />
        <Sentence>아투와 올림.</Sentence>
      </ContentsBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 75px;
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
