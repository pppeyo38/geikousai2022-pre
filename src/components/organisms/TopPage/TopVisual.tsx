import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { use100vh } from "react-div-100vh";

import { CountDown } from "../../molecules/CountDown";

import topVisual from "public/images/top/topVisual.png";

export const TopVisual = () => {
  const height = use100vh();

  return (
    <_MainVisualArea height={height ? `${height}px` : "100vh"}>
      <_MainVisual>
        <_MainVisualWrap>
          <img src={topVisual.src} alt="芸工祭2022 GOOOON" />
        </_MainVisualWrap>
        <_MainVisualCount>{/* <CountDown /> */}</_MainVisualCount>
      </_MainVisual>
      <_MainVisualInfo>
        <_FlowText>部署登録は6月29日(水)まで！！！！</_FlowText>
      </_MainVisualInfo>
    </_MainVisualArea>
  );
};

const fuwafuwa = keyframes`
    0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0);
  }
`;

const fadein = keyframes`
	100% {  opacity: 1;}
`;

const marquee = keyframes`
	from    { transform: translate(0%); }
	100%,to { transform: translate(-100%); }
`;

const _MainVisualArea = styled.section<{ height: string }>`
  width: 100vw;
  height: ${(props) => props.height};
`;

const _MainVisual = styled.div`
  position: relative;
  height: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _MainVisualWrap = styled.div`
  width: fit-content;
  opacity: 0;
  animation: 3s ${fuwafuwa} infinite, ${fadein} 2s ease forwards;

  img {
    width: fit-content;
    object-fit: contain;
  }
`;

const _MainVisualCount = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  margin-bottom: 15px;
  font-family: "ShinGo";
  font-weight: 300;
`;

const _MainVisualInfo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #dc4d40;
`;

const _FlowText = styled.p`
  font-family: "Pixel";
  font-weight: 300;
  white-space: nowrap;
  animation-name: ${marquee};
  animation-duration: 7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
