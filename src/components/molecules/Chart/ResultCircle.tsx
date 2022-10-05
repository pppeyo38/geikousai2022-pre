import Image from 'next/image'
import styled from '@emotion/styled'
import { Center } from '@chakra-ui/react'

import { resultType } from '@/types/chart'
import { neonGreen } from '@/styles/animation/circleKeyframes'

type Props = {
  result: resultType
}

export const ResultCircle = ({ result }: Props) => {
  return (
    <_AnswerCircle>
      <_Result>{result.department}</_Result>
      <_InnerCircle>
        <Image src={result.image} alt={result.department} layout="fill" />
      </_InnerCircle>
    </_AnswerCircle>
  )
}

const _AnswerCircle = styled(Center)`
  position: relative;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.navy};

  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    width: 250px;
    height: 250px;
    border: 3px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.4);
    animation: 1s ${neonGreen} infinite alternate;
  }
`

const _Result = styled.h1`
  position: absolute;
  top: 28px;
  font-family: ${({ theme }) => theme.fonts.VDL};
  font-size: 35px;
  color: ${({ theme }) => theme.colors.red};
  line-height: 70px;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.red};
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
`

const _InnerCircle = styled.figure`
  position: relative;
  width: 250px;
  height: 250px;
`
