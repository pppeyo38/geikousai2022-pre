import styled from '@emotion/styled'
import { Center } from '@chakra-ui/react'

type Props = {
  iconPath: string
}

export const AnswerCircle = ({ iconPath }: Props) => {
  return <_AnswerCircle></_AnswerCircle>
}

const _AnswerCircle = styled(Center)`
  position: relative;
  width: 450px;
  height: 450px;
  padding: 0 135px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.navy};

  &:before {
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    border: 3px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.4);
  }
`
