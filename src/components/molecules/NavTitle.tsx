import { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
  subTitle: string
}

export const NavTitle = ({ children, subTitle }: Props) => {
  return (
    <_TitleWrap>
      <_Title>{children}</_Title>
      <_SubTitle>{subTitle}</_SubTitle>
    </_TitleWrap>
  )
}

const _TitleWrap = styled.a`
  color: ${({ theme }) => theme.colors.white};
`

const _Title = styled.h3`
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0.1rem;
`

const _SubTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.1rem;
`
