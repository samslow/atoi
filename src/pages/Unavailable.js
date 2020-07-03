import React from "react";
import styled from "styled-components";

const Unavailable = () => {
  return (
    <Container>
      <Section>
        <Title>
          <TextBox>
            <P>신청이</P>
            <P>마감되었</P>
            <P>습니다</P>
          </TextBox>
        </Title>
        <ContentsBox>
          <Sentence>
            7월 둘째 주의 아투와 편지 답장 서비스
            <br />
            신청이 마감되었습니다.
          </Sentence>
          <br />
          <br />
          <Sentence>
            아투와 편지 답장 서비스는 매주 월요일부터
            <br />
            일요일까지 다섯 분의 신청자를 선착순으로 받고있으며, <br />
            매주 월요일 00시 00분에 새로운 신청이 열립니다.
          </Sentence>
          <br />
          <br />
          <Sentence>아투와 올림.</Sentence>
        </ContentsBox>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
`;

const TextBox = styled.div`
  padding-left: 5%;
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
  padding: 5% 5% 5% 15%;
`;

const Sentence = styled.span`
  font-size: 13px;
  line-height: 20px;
`;

export default Unavailable;
