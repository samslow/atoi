import React from "react";
import styled from "styled-components";

const Notice = () => {
  return (
    <Container>
      <Title>
        <TextBox>
          <P>7월</P>
          <P>둘째 주</P>
        </TextBox>
      </Title>
      <ContentsBox>
        <Sentence>
          아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지
          답장 서비스입니다.
          <br /> 아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로
          보내드리는 편지 답장 서비스입니다. 아투와는 여러분의 글을 받고 편지
          답장을 써서 우편으로 보내드리는 편지 답장 서비스입니다. 아투와는
          여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지 답장
          서비스입니다. 아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로
          보내드리는 편지 답장 서비스입니다. 아투와는 여러분의 글을 받고 편지
          답장을 써서 우편으로 보내드리는 편지 답장 서비스입니다. 아투와는
          여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지 답장
          서비스입니다. 아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로
          보내드리는 편지 답장 서비스입니다. 아투와는 여러분의 글을 받고 편지
          답장을 써서 우편으로 보내드리는 편지 답장 서비스입니다. 아투와는
          여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지 답장
          서비스입니다. 아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로
          보내드리는 편지 답장 서비스입니다. 아투와는 여러분의 글을 받고 편지
          답장을 써서 우편으로 보내드리는 편지 답장 서비스입니다. 아투와는
          여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지 답장
          서비스입니다. 아투와는 여러분의 글을 받고 편지 답장을 써서 우편으로
          보내드리는 편지 답장 서비스입니다. 아투와는 여러분의 글을 받고 편지
          답장을 써서 우편으로 보내드리는 편지 답장 서비스입니다. 아투와는
          여러분의 글을 받고 편지 답장을 써서 우편으로 보내드리는 편지 답장
          서비스입니다.
        </Sentence>
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
  padding: 5% 10%;
  overflow-y: scroll;
  height: 50vh;
`;

const Sentence = styled.span`
  font-size: 13px;
  line-height: 20px;
  white-space: pre-line;
`;

export default Notice;
