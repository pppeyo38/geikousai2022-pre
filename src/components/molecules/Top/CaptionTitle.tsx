import styled from '@emotion/styled'
import Image from 'next/image'

import Goooon from 'public/images/top/GOOOON.png'

export const CaptionTitle = () => {
  return (
    <_CaptionTitleWrap>
      <_GoooonWrap>
        <Image src={Goooon.src} alt="GOOOONと前に進み続ける" layout="fill" />
      </_GoooonWrap>
      <_CaptionTitle>
        <_Margin>と</_Margin>前に進み続ける
      </_CaptionTitle>
    </_CaptionTitleWrap>
  )
}

const _CaptionTitleWrap = styled.div`
  display: flex;
  padding: 0 4px;
`

const _GoooonWrap = styled.div`
  position: relative;
  width: 125px;
  height: 40px;
  transform: translateY(3px);
`

const _CaptionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 150%;
  letter-spacing: 0.03em;
`

const _Margin = styled.span`
  margin: 0 3px 0 4px;
`
