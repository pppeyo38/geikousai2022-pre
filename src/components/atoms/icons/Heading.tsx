import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isThin?: boolean
}

type StyleProps = {
  isThin: boolean | undefined
}

export const Heading = ({ children, isThin }: Props) => {
  return (
    <_Frame isThin={isThin}>
      <_FrameInner isThin={isThin}>
        <_Heading isThin={isThin}>{children}</_Heading>
        <_TopLeft isThin={isThin} />
        <_BtmLeft isThin={isThin} />
        <_TopRight isThin={isThin} />
        <_BtmRight isThin={isThin} />
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

const _Frame = styled.div<StyleProps>`
  position: relative;
  width: ${(props) => (props.isThin ? '206px' : '200px')};
  height: ${(props) => (props.isThin ? '43px' : '50px')};
  margin: ${(props) => (props.isThin ? '2px' : '4px')};
  background-color: #fff;

  &:before {
    ${verticalLine}
    left: ${(props) => (props.isThin ? '-2px' : '-3px')};
    ${(props) => props.isThin && `width: 2px;  height: 43px; `}
  }

  &:after {
    ${verticalLine}
    right: ${(props) => (props.isThin ? '-2px' : '-3px')};
    ${(props) => props.isThin && `width: 2px; height: 43px; `}
    box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
  }
`

const _FrameInner = styled.div<StyleProps>`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);

  &:before {
    ${horizontalLine}
    top: ${(props) => (props.isThin ? '-2px' : '-3px')};
    ${(props) => props.isThin && `width: 206px; height: 2px; `}
  }

  &:after {
    ${horizontalLine}
    bottom: ${(props) => (props.isThin ? '-2px' : '-3px')};
    ${(props) => props.isThin && `width: 206px; height: 2px;`}
    box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
  }
`

const _Heading = styled.h2<StyleProps>`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: ${(props) => (props.isThin ? '14px' : '20px')};
  line-height: 150%;
`

const _TopLeft = styled.div<StyleProps>`
  ${Rect}
  ${(props) => props.isThin && `width: 2px;  height: 2px; `}
  top: 0;
  left: 0;
`

const _BtmLeft = styled.div<StyleProps>`
  ${Rect}
  ${(props) => props.isThin && `width: 2px;  height: 2px; `}
  bottom: 0;
  left: 0;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
`

const _TopRight = styled.div<StyleProps>`
  ${Rect}
  ${(props) => props.isThin && `width: 2px;  height: 2px; `}
  top: 0;
  right: 0;
`

const _BtmRight = styled.div<StyleProps>`
  ${Rect}
  ${(props) => props.isThin && `width: 2px;  height: 2px; `}
  bottom: 0;
  right: 0;
`
