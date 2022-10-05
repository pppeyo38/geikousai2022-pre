import styled from '@emotion/styled'

import { CircleSkeltonBtn } from '@/components/atoms/buttons/CircleSkeltonBtn'
import { QuestionCircle } from '@/components/molecules/Chart/QuestionCircle'

type Props = {
  questionText: string
  onClickAnswer: (isAnswer: boolean) => void
}

export const QuestionDisplay = ({ questionText, onClickAnswer }: Props) => {
  return (
    <_ContentWrap>
      <QuestionCircle question={questionText} />
      <_LowerBtnArea>
        <CircleSkeltonBtn onClick={() => onClickAnswer(true)}>
          <_Span>YES</_Span>
        </CircleSkeltonBtn>
        <CircleSkeltonBtn onClick={() => onClickAnswer(false)}>
          <_Span>NO</_Span>
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
  gap: 130px;
`

const _Span = styled.span`
  display: block;
  font-family: 'vdl-gigajr';
  font-size: 20px;
  color: #fff;
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
`
