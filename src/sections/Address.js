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

const Address = ({ value, onChange, onSubmit }) => {
  return (
    <Container>
      <ProgressBox index={"04"} percent={80} />
      <Title>
        <TextBox>
          <P>당신의</P>
          <P>주소를</P>
          <P>알려주세요</P>
        </TextBox>
      </Title>
      <ContentsBox>
        <Content
          type="text"
          placeholder={"우편을 받을 주소를 입력해 주세요"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              // When input Enter key
              onSubmit();
            }
          }}
        />
      </ContentsBox>
    </Container>
  );
};

export default Address;
