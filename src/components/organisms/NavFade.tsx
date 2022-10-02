import Link from 'next/link'
import { Center, Fade } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { NavTitle } from '@/components/molecules/NavTitle'
import { SnsIcons } from '@/components/molecules/SnsIcons'

type Props = {
  isOpen: boolean
}

export const NavFade = ({ isOpen }: Props) => {
  const height = use100vh()

  return (
    <_Fade
      in={isOpen}
      height={height ? `${height}px` : '100vh'}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <_NavList>
        <_NavListItem>
          <Link href={'/'}>
            <NavTitle subTitle="トップ">TOP</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <Link href={'/departments'}>
            <NavTitle subTitle="部署紹介">DEPARTMENTS</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <Link href={'/chart'}>
            <NavTitle subTitle="チャート">CHART</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
          <Link href={'/movie'}>
            <NavTitle subTitle="ムービー">MOVIE</NavTitle>
          </Link>
        </_NavListItem>
        <_NavListItem>
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
