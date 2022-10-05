import styled from '@emotion/styled'
import { Center } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  iconPath: string
}

export const AnswerCircle = ({ iconPath }: Props) => {
  return (
    <_AnswerCircle>
      <_InnerCircle>
        <Image src={iconPath} alt="" layout="fill" />
      </_InnerCircle>
    </_AnswerCircle>
  )
}

const _AnswerCircle = styled(Center)`
  width: 450px;
  height: 450px;
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

const _InnerCircle = styled.figure`
  position: relative;
  width: 250px;
  height: 250px;
`
