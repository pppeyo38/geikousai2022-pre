import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Heading = ({ children }: Props) => {
  return (
    <_Frame>
      <_FrameInner>
        <_Heading>{children}</_Heading>
        <_TopLeft />
        <_BtmLeft />
        <_TopRight />
        <_BtmRight />
      </_FrameInner>
    </_Frame>
  )
}

const verticalLine = css`
  content: '';
  position: absolute;
  top: 50%;
  width: 3px;
  height: 50px;
  transform: translateY(-50%);
  background-color: #000;
`

const horizontalLine = css`
  content: '';
  position: absolute;
  left: 0;
  width: 200px;
  height: 3px;
  background-color: #000;
`

const Rect = css`
  position: absolute;
  width: 3px;
  height: 4px;
  background-color: #000;
`

const _Frame = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin: 4px;
  background-color: #fff;

  &:before {
    ${verticalLine}
    left: -3px;
  }

  &:after {
    ${verticalLine}
    right: -3px;
    box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
  }
`

const _FrameInner = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);

  &:before {
    ${horizontalLine}
    top: -3px;
  }

  &:after {
    ${horizontalLine}
    bottom: -3px;
    box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
  }
`

const _Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: 20px;
  line-height: 150%;
`

const _TopLeft = styled.div`
  ${Rect}
  top: 0;
  left: 0;
`

const _BtmLeft = styled.div`
  ${Rect}
  bottom: 0;
  left: 0;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
`

const _TopRight = styled.div`
  ${Rect}
  top: 0;
  right: 0;
`

const _BtmRight = styled.div`
  ${Rect}
  bottom: 0;
  right: 0;
`
