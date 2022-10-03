import { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  fontSize: number
  children: ReactNode
}

export const AboutTxt = ({ fontSize, children }: Props) => {
  return (
    <_TextWrap>
      <_Text fontSize={`${fontSize}px`}>{children}</_Text>
    </_TextWrap>
  )
}

const _TextWrap = styled.div`
  text-align: center;
`

const _Text = styled.p<{ fontSize: string }>`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: ${(props) => props.fontSize};
  color: ${({ theme }) => theme.colors.white};
  line-height: 200%;
  text-shadow: 0px 2px 1px rgba(43, 43, 43, 0.1);
`
