import { MovieFrame } from '@/components/molecules/MovieFrame'
import { PageTitle } from '@/components/molecules/PageTitle'
import styled from '@emotion/styled'

export const Theme = () => {
  return (
    <_Section>
      <PageTitle subTitle="今年のテーマ">THEME</PageTitle>
      <MovieFrame url="https://www.youtube.com/embed/e56HFTK1KS8" />
    </_Section>
  )
}

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 80px;
`
