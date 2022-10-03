import { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
  fontSize: number
  color: string
}

export const Text = ({ children, fontSize, color }: Props) => {
  return (
    <_Sentence fontSize={`${fontSize}px`} color={color}>
      {children}
    </_Sentence>
  )
}

const _Sentence = styled.p<{ fontSize: string; color: string }>`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  line-height: 170%;
`
