import React from "react";

import ProgressBox from "../components/ProgressBox";
import {
  Container,
  TextBox,
  Title,
  P,
  ContentsBox,
  Content,
} from "./PhoneNumber";

const Account = ({ value, onChange }) => {
  return (
    <Container>
      <ProgressBox index={"05"} percent={100} />
      <Title>
        <TextBox>
          <P>입금자명을</P>
          <P>알려주세요</P>
        </TextBox>
      </Title>
      <ContentsBox>
        <Content
          type="text"
          placeholder={"입금자명을 입력해 주세요"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </ContentsBox>
    </Container>
  );
};

export default Account;
