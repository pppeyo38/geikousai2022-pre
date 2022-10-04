import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Props = {
  url: string
}

export const MovieFrame = ({ url }: Props) => {
  return (
    <_Frame>
      <_MovieInner>
        <iframe
          width="100%"
          height="100%"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <_TopLeft />
        <_BtmLeft />
        <_TopRight />
        <_BtmRight />
      </_MovieInner>
    </_Frame>
  )
}

const verticalLine = css`
  content: '';
  position: absolute;
  top: 50%;
  width: 4px;
  height: 209px;
  transform: translateY(-50%);
  background-color: #5c5c5c;
`

const horizontalLine = css`
  content: '';
  position: absolute;
  left: 0;
  width: 322px;
  height: 4px;
  background-color: #5c5c5c;
`

const Rect = css`
  position: absolute;
  width: 4px;
  height: 3px;
  background-color: #5c5c5c;
`

const _Frame = styled.div`
  position: relative;
  width: 322px;
  height: 208px;
  margin: 4px;
  background-color: #5c5c5c;

  &:before {
    ${verticalLine}
    left: -4px;
  }

  &:after {
    ${verticalLine}
    right: -4px;
  }
`

const _MovieInner = styled.div`
  width: 100%;
  height: 100%;

  &:before {
    ${horizontalLine}
    top: -4px;
  }

  &:after {
    ${horizontalLine}
    bottom: -4px;
  }
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
