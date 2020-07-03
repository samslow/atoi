import React from "react";
import styled from "styled-components";

const ProgressBar = ({ percent }) => {
  return (
    <Container>
      <Pregress percent={percent} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px #000 solid;
`;
const Pregress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: #f4e0d0;
  border-radius: 10px;
  border-right: 1px #000 solid;
`;

export default ProgressBar;
