import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Center } from '@chakra-ui/react'
import { neonRed } from '@/styles/animation/circleKeyframes'
import {
  slideInFromBottom,
  slideOutToTop,
} from '@/styles/animation/fadeKeyframes'

type Props = {
  isTextFade: boolean
  question: string
}

export const QuestionCircle = ({ isTextFade, question }: Props) => {
  return (
    <_QuestionCircle>
      <_Question isTextFade={isTextFade}>{question}</_Question>
    </_QuestionCircle>
  )
}

const _QuestionCircle = styled(Center)`
  position: relative;
  width: 450px;
  height: 450px;
  padding: 0 135px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.navy};

  &:before {
    content: '';
    position: absolute;
    width: 310px;
    height: 310px;
    border: 3px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.4);
  }

  &:after {
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    border: 2px solid ${({ theme }) => theme.colors.red};
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(255, 0, 0, 0.4);
    animation: ${neonRed} 1.5s infinite alternate;
  }
`

const _Question = styled.p<{ isTextFade: boolean }>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  color: ${({ theme }) => theme.colors.white};
  line-height: 150%;
  text-align: center;
  animation: ${(props) =>
    props.isTextFade
      ? css`0.5s ${slideInFromBottom} forwards`
      : css`0.5s ${slideOutToTop} forwards`};
`
