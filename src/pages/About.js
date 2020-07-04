import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ScrollSnap from "scroll-snap";
import firestore from "../firebase";

import Intro from "../sections/Intro";
import Notice from "../sections/Notice";
import Name from "../sections/Name";
import Story from "../sections/Story";
import PhoneNumber from "../sections/PhoneNumber";
import Adress from "../sections/Adress";
import Account from "../sections/Account";
import Outro from "../sections/Outro";

const About = () => {
  const ContainerRef = useRef();
  const noticeScreen = useRef();
  const nameScreen = useRef();
  const storyScreen = useRef();
  const numberScreen = useRef();
  const adressScreen = useRef();
  const accountScreen = useRef();
  const outroScreen = useRef();

  const [introMsg, setIntroMsg] = useState("");

  const bindScrollSnap = () => {
    const element = ContainerRef.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      timeout: 0,
    });

    snapElement.bind();
  };

  useEffect(() => {
    bindScrollSnap();
    const fetchIntroMsg = async () => {
      const msg = await firestore
        .collection("Intro")
        .get()
        .then((res) => {
          const arr = [];
          res.docs.forEach((msg) => {
            arr.push(msg.data().contents);
          });

          return arr;
        });
      const sentence = msg[0].split("//").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ));
      console.log(sentence);
      setIntroMsg(sentence);
    };
    fetchIntroMsg();
  }, []);

  return (
    <Container ref={ContainerRef}>
      <Section>
        <Intro msg={introMsg} />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: noticeScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={noticeScreen}>
        <Notice />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Up"}
              src={require("../assets/images/upArrow.png")}
              width={20}
            />
          </Button>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: nameScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={nameScreen}>
        <Name />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: noticeScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Up"}
              src={require("../assets/images/upArrow.png")}
              width={20}
            />
          </Button>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: storyScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={storyScreen}>
        <Story />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: nameScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Up"}
              src={require("../assets/images/upArrow.png")}
              width={20}
            />
          </Button>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: numberScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={numberScreen}>
        <PhoneNumber />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: storyScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Up"}
              src={require("../assets/images/upArrow.png")}
              width={20}
            />
          </Button>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: adressScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={adressScreen}>
        <Adress />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: numberScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Up"}
              src={require("../assets/images/upArrow.png")}
              width={20}
            />
          </Button>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: accountScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={accountScreen}>
        <Account />
        <Buttons>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: adressScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Up"}
              src={require("../assets/images/upArrow.png")}
              width={20}
            />
          </Button>
          <Button
            onClick={() =>
              ContainerRef.current.scrollTo({
                top: outroScreen.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img
              alt={"Down"}
              src={require("../assets/images/downArrow.png")}
              width={20}
            />
          </Button>
        </Buttons>
      </Section>
      <Section ref={outroScreen}>
        <Outro />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: auto;

  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  min-height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10%;
  margin-right: 10%;
  border: #000;
`;

const Button = styled.button`
  border-radius: 0;
  border: #000 1px solid;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
  &:active {
    background-color: #f4e0d0;
  }

  & + & {
    border-left: none;
  }
`;

export default About;
