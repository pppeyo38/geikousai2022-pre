import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'

import { Text } from '@/components/atoms/text/Text'
import { Heading } from '@/components/atoms/icons/Heading'
import { PageTitle } from '@/components/molecules/Shared/PageTitle'
import { MovieFrame } from '@/components/molecules/Shared/MovieFrame'

export const MovieLayout = () => {
  return (
    <_Section>
      <PageTitle subTitle="ムービー">MOVIE</PageTitle>
      <_TextWrap>
        <Text fontSize={12} color="#000">
          映像部署が制作したムービーです。
        </Text>
      </_TextWrap>
      <Grid gap="40px">
        <_MovieWrap>
          <Heading isThin>コンセプトムービー</Heading>
          <MovieFrame url="https://www.youtube.com/embed/Md_DxUNp4sM" />
        </_MovieWrap>
        <_MovieWrap>
          <Heading isThin>部署長紹介</Heading>
          <MovieFrame url="https://www.youtube.com/embed/e56HFTK1KS8" />
        </_MovieWrap>
      </Grid>
    </_Section>
  )
}

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 180px;
  padding-top: 88px;
`

const _TextWrap = styled.div`
  margin: 20px 0 60px;
`

const _MovieWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`
