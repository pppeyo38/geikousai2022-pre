import { useState } from 'react'
import styled from '@emotion/styled'
import { CircleSkeltonBtn } from '@/components/atoms/buttons/CircleSkeltonBtn'
import { QuestionCircle } from '@/components/molecules/Chart/QuestionCircle'

type Props = {
  questionText: string
  switchChartContent: (isAnswer: boolean) => void
}

export const QuestionDisplay = ({
  questionText,
  switchChartContent,
}: Props) => {
  const [isFade, setIsFade] = useState(true)

  const onClickAnswerBtn = (isAnswer: boolean) => {
    setIsFade(false)
    setTimeout(() => {
      switchChartContent(isAnswer)
      setIsFade(true)
    }, 500)
  }

  return (
    <>
      <QuestionCircle question={questionText} isTextFade={isFade} />
      <_LowerBtnArea>
        <CircleSkeltonBtn onClick={() => onClickAnswerBtn(true)}>
          <_Span>YES</_Span>
        </CircleSkeltonBtn>
        <CircleSkeltonBtn onClick={() => onClickAnswerBtn(false)}>
          <_Span>NO</_Span>
        </CircleSkeltonBtn>
      </_LowerBtnArea>
    </>
  )
}

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
