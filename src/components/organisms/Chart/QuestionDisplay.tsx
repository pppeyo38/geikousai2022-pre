import styled from '@emotion/styled'
import { CircleSkeltonBtn } from '@/components/atoms/buttons/CircleSkeltonBtn'
import { QuestionCircle } from '@/components/molecules/Chart/QuestionCircle'

type Props = {
  questionText: string
  onClickAnswer: (isAnswer: boolean) => void
}

export const QuestionDisplay = ({ questionText, onClickAnswer }: Props) => {
  return (
    <>
      <QuestionCircle question={questionText} />
      <_LowerBtnArea>
        <CircleSkeltonBtn onClick={() => onClickAnswer(true)}>
          <_Span>YES</_Span>
        </CircleSkeltonBtn>
        <CircleSkeltonBtn onClick={() => onClickAnswer(false)}>
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
