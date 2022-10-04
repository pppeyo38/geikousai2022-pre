import Link from 'next/link'
import { Center, Fade } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { NavTitle } from '@/components/molecules/Shared/NavTitle'
import { SnsIcons } from '@/components/molecules/Shared/SnsIcons'

type Props = {
  isOpen: boolean
  onToggle: () => void
}

export const NavFade = ({ isOpen, onToggle }: Props) => {
  const height = use100vh()

  return (
    <_Fade
      in={isOpen}
      height={height ? `${height}px` : '100vh'}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <_NavList>
        <_NavListItem onClick={onToggle}>
          <Link href={'/'}>
            <a>
              <NavTitle subTitle="トップ">TOP</NavTitle>
            </a>
          </Link>
        </_NavListItem>
        <_NavListItem onClick={onToggle}>
          <Link href={'/departments'}>
            <a>
              <NavTitle subTitle="部署紹介">DEPARTMENTS</NavTitle>
            </a>
          </Link>
        </_NavListItem>
        <_NavListItem onClick={onToggle}>
          <Link href={'/chart'}>
            <a>
              <NavTitle subTitle="チャート">CHART</NavTitle>
            </a>
          </Link>
        </_NavListItem>
        <_NavListItem onClick={onToggle}>
          <Link href={'/movie'}>
            <a>
              <NavTitle subTitle="ムービー">MOVIE</NavTitle>
            </a>
          </Link>
        </_NavListItem>
        <_NavListItem onClick={onToggle}>
          <NavTitle subTitle="ゲーム">GAME</NavTitle>
        </_NavListItem>
      </_NavList>
      <Center>
        <SnsIcons />
      </Center>
    </_Fade>
  )
}

const _Fade = styled(Fade)<{ height: string }>`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.navy};
`

const _NavList = styled.ul`
  margin: 130px 0 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  * + * {
    margin-top: 40px;
  }
`

const _NavListItem = styled.li`
  text-align: center;
`
