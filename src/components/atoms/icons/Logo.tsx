import styled from "@emotion/styled";

import GOOOONLogo from "public/icons/geikosai-logo.png";

export const Logo = () => {
  return (
    <_LogoWrap>
      <img src={GOOOONLogo.src} width={47} height={43} />
    </_LogoWrap>
  );
};

const _LogoWrap = styled.div`
  width: 60px;
  height: 60px;
  display: grid;
  place-content: center;
`;
