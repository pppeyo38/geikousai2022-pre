import styled from '@emotion/styled'

import { MovieFrame } from '@/components/molecules/MovieFrame'
import { PageTitle } from '@/components/molecules/PageTitle'
import { Caption } from '@/components/molecules/Top/Caption'

export const Theme = () => {
  return (
    <_Section>
      <PageTitle subTitle="今年のテーマ">THEME</PageTitle>
      <_MovieThumWrap>
        <MovieFrame url="https://www.youtube.com/embed/Md_DxUNp4sM" />
      </_MovieThumWrap>
      <_CaptionWrap>
        <Caption />
      </_CaptionWrap>
    </_Section>
  )
}

const _Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1055px;
  padding: 60px 20px 80px;
`

const _MovieThumWrap = styled.div`
  margin-top: 40px;
  z-index: 100;
`

const _CaptionWrap = styled.div`
  position: absolute;
  top: 295px;
`
