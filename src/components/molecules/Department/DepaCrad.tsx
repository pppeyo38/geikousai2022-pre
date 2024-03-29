import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Text } from '@/components/atoms/text/Text'
import { url } from '@/utils/config'

type CardProps = {
  icon: string
  roll: string
  geikoName: string
  children: ReactNode
}

export const DepaCard = ({ icon, roll, geikoName, children }: CardProps) => {
  return (
    <_Card>
      <_CardHeading>
        <_IconWrap>
          <img src={url(icon)} alt={roll} />
        </_IconWrap>
        <_NameWrap>
          <_Roll>{roll}</_Roll>
          <_GeikoName>{geikoName}</_GeikoName>
        </_NameWrap>
      </_CardHeading>
      <_DepaDetail>
        <Text fontSize={14} color="#0D2E4F">
          {children}
        </Text>
      </_DepaDetail>
    </_Card>
  )
}

const _Card = styled.div`
  width: 350px;
  padding: 25px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
`

const _CardHeading = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
`

const _IconWrap = styled.figure`
  position: relative;
  width: 66px;
  height: 66px;
`

const _NameWrap = styled.div``

const _DepaDetail = styled.div`
  color: ${({ theme }) => theme.colors.navy};
`

const _Roll = styled.h3`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Medium};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.navy};
  line-height: 170%;
`

const _GeikoName = styled.p`
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.navy};
  line-height: 170%;
  transform: translateY(-12px);
`
