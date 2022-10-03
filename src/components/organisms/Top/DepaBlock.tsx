import Image from 'next/image'
import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'

import { Heading } from '@/components/atoms/icons/Heading'
import { ViewMore } from '@/components/atoms/buttons/ViewMore'
import { DepaCard } from '@/components/molecules/Department/DepaCrad'

export const DepaBlock = () => {
  return (
    <_Section>
      <_HeadingWrap>
        <Heading>部署紹介</Heading>
      </_HeadingWrap>
      <Grid gap="30px">
        <_ContentWrap>
          <_HeadImage>
            <Image
              src="/images/departmentHead/saicho.png"
              layout="fill"
              alt=""
            />
          </_HeadImage>
          <DepaCard
            icon="/icons/department/01chief.png"
            roll="芸工祭長"
            geikoName="3N 花天狂骨"
          >
            芸工祭全体の統括をしてるよ！今年の芸工祭は例年に比べて自分の案が通りやすいかも…？！学年とか気にせずドシドシ意見出してみんなで盛り上げていこう💪いろんな部署にいるから会いにきてね❤️❤️❤️
          </DepaCard>
        </_ContentWrap>
        <_ContentWrap>
          <_HeadImage>
            <Image
              src="/images/departmentHead/fuku-saicho.png"
              layout="fill"
              alt=""
            />
          </_HeadImage>
          <DepaCard
            icon="/icons/department/02chief_sub.png"
            roll="副芸工祭長"
            geikoName="30 オクタン"
          >
            主に祭長のサポートしてます！インテリア、ディレクションにも入っているので一緒に活動して楽しい芸工祭にしましょう！
          </DepaCard>
        </_ContentWrap>
      </Grid>
      <Grid gap="15px" mt="40px">
        <ViewMore route="/departments">部署紹介ページはこちら</ViewMore>
        <ViewMore route="/chart">適部署診断をする</ViewMore>
      </Grid>
    </_Section>
  )
}

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 0;
`

const _HeadingWrap = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 40px;
`

const _ContentWrap = styled.div`
  padding: 37px 0 30px;
  background-image: url('/images/top/Bg-dot.png');
  background-repeat: no-repeat;
  background-position-x: 25px;
`

const _HeadImage = styled.figure`
  position: relative;
  width: 350px;
  height: 350px;
  margin-bottom: 38px;
`
