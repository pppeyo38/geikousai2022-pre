import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { use100vh } from 'react-div-100vh'

import { url } from '@/utils/config'
import { _DoubleCircle } from '@/styles/CircleStyle'
import { fadeIn, fadeOut } from '@/styles/animation/fadeKeyframes'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
  setIsStart: Dispatch<SetStateAction<boolean>>
}

export const StartDisplay = ({ setIsStart }: Props) => {
  const height = use100vh()
  const [isFade, setIsFade] = useState(true)

  const onClickStart = () => {
    setIsFade(false)
    setTimeout(() => {
      setIsStart(true)
    }, 1000)
  }

  return (
    <_ContentWrap
      onClick={onClickStart}
      height={height ? `${height}px` : '100vh'}
      isFade={isFade}
    >
      <_ChartStart>
        <_RedCircle>
          <_H1>CHART</_H1>
        </_RedCircle>
      </_ChartStart>
      <_StartText>TOUCH START</_StartText>
    </_ContentWrap>
  )
}

const _TextStyle = css`
  font-family: 'vdl-gigajr';
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
`

const _ContentWrap = styled.div<{ height: string; isFade: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  gap: 120px;
  animation: ${(props) =>
    props.isFade ? css`2s ${fadeIn} forwards` : css`1s ${fadeOut} forwards`};
`

const _ChartStart = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 310px;
  ${_DoubleCircle}

  &:before {
    background-image: url(${url('/images/chart/circleWhite.svg')});
  }
`

const _RedCircle = styled.div`
  display: grid;
  place-content: center;
  width: 180px;
  height: 180px;
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 90px;
  box-shadow: 0px 0px 15px rgba(255, 0, 0, 0.4),
    inset 0px 0px 15px rgba(255, 0, 0, 0.4);
`

const _H1 = styled.h1`
  ${_TextStyle}
  font-size: 30px;
  color: ${({ theme }) => theme.colors.red};
  text-shadow: 0px 0px 15px rgba(255, 0, 0, 0.4);
`

const _StartText = styled.h2`
  ${_TextStyle}
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  line-height: 48px;
  -webkit-text-stroke: 1px #fff;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.4);
`
