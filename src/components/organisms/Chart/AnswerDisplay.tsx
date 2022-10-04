import styled from '@emotion/styled'

import { AnswerCircle } from '@/components/molecules/Chart/AnswerCircle'
import { CircleSkeltonBtn } from '@/components/atoms/buttons/CircleSkeltonBtn'

import BackIcon from 'public/icons/chart/back.svg'
import TwitterIcon from 'public/icons/chart/twitter.svg'

type Props = {
  resultReset: () => void
}

export const AnswerDisplay = ({ resultReset }: Props) => {
  return (
    <_ContentWrap>
      <AnswerCircle iconPath="" />
      <_LowerBtnArea>
        <CircleSkeltonBtn onClick={resultReset}>
          <BackIcon />
        </CircleSkeltonBtn>
        <_TwitterShare>
          <CircleSkeltonBtn onClick={() => console.log('クリック')}>
            <TwitterIcon />
          </CircleSkeltonBtn>
        </_TwitterShare>
        <CircleSkeltonBtn onClick={() => console.log('クリック')}>
          <_Span>
            VIEW
            <br />
            MORE
          </_Span>
        </CircleSkeltonBtn>
      </_LowerBtnArea>
    </_ContentWrap>
  )
}

const _ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(
    rgb(13, 46, 79) 0%,
    rgb(13, 46, 79) 50%,
    rgb(153, 201, 85) 50%,
    rgb(48, 137, 94) 100%
  );
`

const _LowerBtnArea = styled.div`
  display: flex;
  gap: 20px;
`

const _TwitterShare = styled.div`
  transform: translateY(30px);
`

const _Span = styled.span`
  display: block;
  font-family: 'vdl-gigajr';
  font-size: 20px;
  color: #fff;
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
`
