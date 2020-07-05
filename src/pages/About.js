import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ScrollSnap from "scroll-snap";
import firestore from "../firebase";
import { useHistory } from "react-router-dom";

import Intro from "../sections/Intro";
import Notice from "../sections/Notice";
import Name from "../sections/Name";
import Story from "../sections/Story";
import PhoneNumber from "../sections/PhoneNumber";
import Address from "../sections/Address";
import Account from "../sections/Account";
import Outro from "../sections/Outro";

export const fetchDocs = async (type) => {
  const msg = await firestore
    .collection(type)
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

  return sentence;
};

const About = () => {
  const history = useHistory();
  const ContainerRef = useRef();
  const noticeScreen = useRef();
  const nameScreen = useRef();
  const storyScreen = useRef();
  const numberScreen = useRef();
  const addressScreen = useRef();
  const accountScreen = useRef();
  const outroScreen = useRef();

  const [introMsg, setIntroMsg] = useState("");
  const [noticeMsg, setNoticeMsg] = useState("");
  const [noticeTitle, setNoticeTitle] = useState("");
  const [outroMsg, setOutroMsg] = useState("");

  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [account, setAccount] = useState("");
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    available().then((isRedirect) => {
      if (isRedirect) {
        bindScrollSnap();

        fetchDocs("Intro").then((text) => setIntroMsg(text));
        fetchDocs("NoticeTitle").then((text) => setNoticeTitle(text));
        fetchDocs("Notice").then((text) => setNoticeMsg(text));
        fetchDocs("Outro").then((text) => setOutroMsg(text));
      } else {
        history.push("/finish");
      }
    });
  }, [history]);

  const bindScrollSnap = () => {
    const element = ContainerRef.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      timeout: 0,
    });

    snapElement.bind();
  };

  const submitLetter = () => {
    if (
      window.confirm("정말 제출하시겠어요?\n제출된 내용은 수정 할 수 없어요!")
    ) {
      if (name && story && phoneNum && address && account) {
        firestore
          .collection("Letter")
          .add({
            name,
            story,
            phone: phoneNum,
            address,
            account,
          })
          .then(() => {
            setIsFinish(true);
            ContainerRef.current.scrollTo({
              top: outroScreen.current.offsetTop,
              behavior: "smooth",
            });
          });
      } else {
        alert(
          "아직 완성되지 않은 칸이 있습니다.\n위로 돌아가 모두 채워주세요.",
        );
      }
    }
  };

  const available = async () => {
    return await firestore
      .collection("Letter")
      .get()
      .then((res) => {
        return res.size >= 5 ? false : true;
      });
  };

  const toScroll = (next) => {
    let nextStation;
    if (next === 0) {
      nextStation = 0;
    } else {
      nextStation = next;
    }
    ContainerRef.current.scrollTo({
      top: nextStation.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Container ref={ContainerRef}>
      {!isFinish ? (
        <>
          <Section>
            <Intro msg={introMsg} />
            <Buttons>
              <Button onClick={() => toScroll(noticeScreen)}>
                <img
                  alt={"Down"}
                  src={require("../assets/images/downArrow.png")}
                  width={20}
                />
              </Button>
            </Buttons>
          </Section>
          <Section ref={noticeScreen}>
            <Notice title={noticeTitle} msg={noticeMsg} />
            <Buttons>
              <Button onClick={() => toScroll(0)}>
                <img
                  alt={"Up"}
                  src={require("../assets/images/upArrow.png")}
                  width={20}
                />
              </Button>
              <Button onClick={() => toScroll(nameScreen)}>
                <img
                  alt={"Down"}
                  src={require("../assets/images/downArrow.png")}
                  width={20}
                />
              </Button>
            </Buttons>
          </Section>
          <Section ref={nameScreen}>
            <Name
              value={name}
              onChange={setName}
              onSubmit={() => toScroll(storyScreen)}
            />
            <Buttons>
              <Button onClick={() => toScroll(noticeScreen)}>
                <img
                  alt={"Up"}
                  src={require("../assets/images/upArrow.png")}
                  width={20}
                />
              </Button>
              <Button
                onClick={() => toScroll(storyScreen)}
                disabled={!name.length}
              >
                <img
                  alt={"Down"}
                  src={require("../assets/images/downArrow.png")}
                  width={20}
                  style={{ opacity: name.length ? "100%" : "40%" }}
                />
              </Button>
            </Buttons>
          </Section>
          {name && (
            <Section ref={storyScreen}>
              <Story
                value={story}
                onChange={setStory}
                onSubmit={() => toScroll(numberScreen)}
              />
              <Buttons>
                <Button onClick={() => toScroll(nameScreen)}>
                  <img
                    alt={"Up"}
                    src={require("../assets/images/upArrow.png")}
                    width={20}
                  />
                </Button>
                <Button
                  onClick={() => toScroll(numberScreen)}
                  disabled={!story.length}
                >
                  <img
                    alt={"Down"}
                    src={require("../assets/images/downArrow.png")}
                    width={20}
                    style={{ opacity: story.length ? "100%" : "40%" }}
                  />
                </Button>
              </Buttons>
            </Section>
          )}
          {story && (
            <Section ref={numberScreen}>
              <PhoneNumber value={phoneNum} onChange={setPhoneNum} />
              <Buttons>
                <Button onClick={() => toScroll(storyScreen)}>
                  <img
                    alt={"Up"}
                    src={require("../assets/images/upArrow.png")}
                    width={20}
                  />
                </Button>
                <Button
                  onClick={() => toScroll(addressScreen)}
                  disabled={!phoneNum.length}
                >
                  <img
                    alt={"Down"}
                    src={require("../assets/images/downArrow.png")}
                    width={20}
                    style={{ opacity: phoneNum.length ? "100%" : "40%" }}
                  />
                </Button>
              </Buttons>
            </Section>
          )}
          {phoneNum && (
            <Section ref={addressScreen}>
              <Address
                value={address}
                onChange={setAddress}
                onSubmit={() => toScroll(accountScreen)}
              />
              <Buttons>
                <Button onClick={() => toScroll(numberScreen)}>
                  <img
                    alt={"Up"}
                    src={require("../assets/images/upArrow.png")}
                    width={20}
                  />
                </Button>
                <Button
                  onClick={() => toScroll(accountScreen)}
                  disabled={!address.length}
                >
                  <img
                    alt={"Down"}
                    src={require("../assets/images/downArrow.png")}
                    width={20}
                    style={{ opacity: address.length ? "100%" : "40%" }}
                  />
                </Button>
              </Buttons>
            </Section>
          )}
          {address && (
            <Section ref={accountScreen}>
              <Account value={account} onChange={setAccount} />
              <Buttons>
                <Button onClick={() => toScroll(addressScreen)}>
                  <img
                    alt={"Up"}
                    src={require("../assets/images/upArrow.png")}
                    width={20}
                  />
                </Button>
                <Button onClick={submitLetter} disabled={!account.length}>
                  <img
                    alt={"Down"}
                    src={require("../assets/images/downArrow.png")}
                    width={20}
                    style={{ opacity: account.length ? "100%" : "40%" }}
                  />
                </Button>
              </Buttons>
            </Section>
          )}
        </>
      ) : (
        <Section ref={outroScreen}>
          <Outro msg={outroMsg} />
        </Section>
      )}
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
  opacity: ${(props) => (props.disabled ? "40%" : "100%")};
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
