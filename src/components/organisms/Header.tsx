import Link from 'next/link'
import styled from '@emotion/styled'
import { useDisclosure } from '@chakra-ui/react'

import { Logo } from '@/components/atoms/icons/Logo'
import { HeaderTitle } from '@/components/atoms/icons/HeaderTitle'
import { HamburgerBtn } from '@/components/atoms/HamburgerBtn'
import { NavFade } from '@/components/organisms/NavFade'

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <_Header>
      <_HeaderInner>
        <Link href="/">
          <_LogoWrap>
            <Logo />
            <HeaderTitle />
          </_LogoWrap>
        </Link>
        <HamburgerBtn onToggle={onToggle} isOpen={isOpen} />
      </_HeaderInner>
      <NavFade isOpen={isOpen} />
    </_Header>
  )
}

const _Header = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
`

const _HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const _LogoWrap = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
`
