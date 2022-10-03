import styled from '@emotion/styled'

import { Heading } from '@/components/atoms/icons/Heading'
import { MovieFrame } from '@/components/molecules/MovieFrame'
import { ViewMore } from '@/components/atoms/buttons/ViewMore'

export const MovieBlock = () => {
  return (
    <_Section>
      <Heading>ムービー</Heading>
      <MovieFrame url="https://www.youtube.com/embed/e56HFTK1KS8" />
      <ViewMore route="/movie">ムービーページはこちら</ViewMore>
    </_Section>
  )
}

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
`
