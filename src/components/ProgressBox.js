import React from "react";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";

const ProgressBox = ({ index, percent }) => {
  return (
    <Container>
      <IndexText>{index}</IndexText>
      <ProgressBar percent={percent} />
      <IndexText>05</IndexText>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 10px;
  padding: 30px 5%;
`;

const IndexText = styled.p`
  margin: 0 5px;
`;

export default ProgressBox;
