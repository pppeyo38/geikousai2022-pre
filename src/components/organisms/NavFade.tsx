import Link from "next/link";
import { Fade } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { use100vh } from "react-div-100vh";

import { NavTitle } from "@/components/molecules/NavTitle";

type Props = {
  isOpen: boolean;
};

export const NavFade = ({ isOpen }: Props) => {
  const height = use100vh();

  return (
    <_Fade
      in={isOpen}
      height={height ? `${height}px` : "100vh"}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <_NavList>
        <_NavListItem>
          <Link href={"/"}>
            <NavTitle subTitle="トップ">TOP</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <Link href={"/departments"}>
            <NavTitle subTitle="部署紹介">DEPARTMENTS</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <Link href={"/chart"}>
            <NavTitle subTitle="チャート">CHART</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <Link href={"/movie"}>
            <NavTitle subTitle="ムービー">MOVIE</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <NavTitle subTitle="ゲーム">GAME</NavTitle>
        </_NavListItem>
      </_NavList>
      {/* <div className="nav__overlay-sns-wrap">
      <SnsIcons />
    </div> */}
    </_Fade>
  );
};

const _Fade = styled(Fade)<{ height: string }>`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => props.height};
  background-color: #0d2e4f;
`;

const _NavList = styled.ul`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  font-family: "ShinGo";
`;

const _NavListItem = styled.li`
  color: #fff;
  text-align: center;
`;
