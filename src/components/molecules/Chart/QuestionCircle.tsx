import styled from '@emotion/styled'
import { Center } from '@chakra-ui/react'

type Props = {
  question: string
}

export const QuestionCircle = ({ question }: Props) => {
  return (
    <_QuestionCircle>
      <_Question>{question}</_Question>
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
  }
`

const _Question = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  color: ${({ theme }) => theme.colors.white};
  line-height: 150%;
  text-align: center;
`
