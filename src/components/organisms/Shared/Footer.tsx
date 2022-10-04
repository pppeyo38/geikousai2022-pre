import Image from 'next/image'
import styled from '@emotion/styled'

import { Text } from '@/components/atoms/text/Text'
import { SnsIcons } from '@/components/molecules/Shared/SnsIcons'

import GOOOONLogo from 'public/icons/header/geikosai-logo.png'

export const Footer = () => {
  return (
    <_Footer>
      <_SnsWrap>
        <Text fontSize={10} color="#FFF">
          公式SNS
        </Text>
        <SnsIcons />
      </_SnsWrap>
      <_LogoWrap>
        <Image
          src={GOOOONLogo.src}
          width={109}
          height={98}
          alt="芸工祭2022 GOOOON"
        />
      </_LogoWrap>
      <Text fontSize={10} color="#FFF">
        @2022 GEIKO SAI
      </Text>
    </_Footer>
  )
}

const _Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.navy};
`

const _SnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _LogoWrap = styled.figure`
  position: relative;
  width: fit-content;
  margin-bottom: 25px;
`
