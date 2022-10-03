import { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
  subTitle: string
  isShadow?: boolean
}

export const PageTitle = ({ children, subTitle, isShadow }: Props) => {
  return (
    <_TitleWrap>
      {isShadow ? (
        <_ShadowTitle>{children}</_ShadowTitle>
      ) : (
        <_Title>{children}</_Title>
      )}
      <_SubTitle isDark={isShadow}>{subTitle}</_SubTitle>
    </_TitleWrap>
  )
}

const _TitleWrap = styled.div`
  text-align: center;
`

const _Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: 35px;
  color: ${({ theme }) => theme.colors.green};
  line-height: 130%;
`

const _ShadowTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: 35px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 130%;
  text-shadow: 0px 4px 1px rgba(0, 0, 0, 0.1);
`

const _SubTitle = styled.span<{ isDark: boolean | undefined }>`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  font-size: 14px;
  color: ${(props) => (props.isDark ? '#39654C' : props.theme.colors.green)};
  line-height: 150%;
`
