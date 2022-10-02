import styled from "@emotion/styled";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  subTitle: string;
};

export const NavTitle = ({ children, subTitle }: Props) => {
  return (
    <_TitleWrap>
      <_Title>{children}</_Title>
      <_SubTitle>{subTitle}</_SubTitle>
    </_TitleWrap>
  );
};

const _TitleWrap = styled.a`
  color: #fff;
  text-align: center;
`;

const _Title = styled.h3`
  font-weight: 600;
  font-size: 25px;
  line-height: 1;
`;

const _SubTitle = styled.span`
  font-size: 10px;
  line-height: 1.5;
`;
