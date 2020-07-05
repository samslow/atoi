import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { fetchDocs } from "./About";

const Unavailable = () => {
  const [finishMsg, setFinishMsg] = useState("");

  useEffect(() => {
    fetchDocs("Finish").then((text) => setFinishMsg(text));
  }, []);
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
          <Sentence>{finishMsg}</Sentence>
        </ContentsBox>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
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
  font-size: ${isMobile ? "13" : "18"}px;
  line-height: ${isMobile ? "20" : "30"}px;
`;

export default Unavailable;
