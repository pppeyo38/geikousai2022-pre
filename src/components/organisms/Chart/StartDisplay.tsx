import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { use100vh } from 'react-div-100vh'

import { _DoubleCircle } from '@/styles/CircleStyle'

export const StartDisplay = () => {
  const height = use100vh()

  return (
    <_ContentWrap height={height ? `${height}px` : '100vh'}>
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

const _ContentWrap = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  gap: 120px;
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
    background-image: url('/images/chart/circleWhite.svg');
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
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.4);
`
