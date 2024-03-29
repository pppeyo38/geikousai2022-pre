import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { use100vh } from 'react-div-100vh'
import hero from 'public/images/top/topVisual.png'

export const HeroArea = () => {
  const height = use100vh()

  return (
    <_MainVisualArea height={height ? `${height}px` : '100vh'}>
      <_MainVisual>
        <_MainVisualWrap>
          <img src={hero.src} alt="名古屋市立大学芸術工学部 芸工祭" />
        </_MainVisualWrap>
      </_MainVisual>
      <_MainVisualInfo>
        <_FlowText>部署登録は6月29日(水)まで！！！！</_FlowText>
      </_MainVisualInfo>
    </_MainVisualArea>
  )
}

const fuwafuwa = keyframes`
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0);
  }
`

const textSlide = keyframes`
	from {
    transform: translate(100%);
  }
	100%,to {
    transform: translate(-100%);
  }
`

const _MainVisualArea = styled.section<{ height: string }>`
  position: relative;
  width: 100vw;
  height: ${(props) => props.height};
`

const _MainVisual = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const _MainVisualWrap = styled.figure`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  animation: 3s ${fuwafuwa} infinite;
`

const _MainVisualInfo = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  overflow-x: hidden;
`

const _FlowText = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.pixel};
  white-space: nowrap;
  animation: 7s ${textSlide} linear infinite;
`
