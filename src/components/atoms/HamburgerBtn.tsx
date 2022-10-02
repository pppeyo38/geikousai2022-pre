import styled from "@emotion/styled";
import Hamburger from "hamburger-react";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

export const HamburgerBtn = ({ onToggle, isOpen }: Props) => {
  return (
    <_HamburgerIcon onClick={onToggle}>
      <Hamburger size={22} toggled={isOpen} />
    </_HamburgerIcon>
  );
};

const _HamburgerIcon = styled.div`
  position: relative;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #0d2e4f;
  border: solid 2px #fff;
  border-radius: 50%;
`;
