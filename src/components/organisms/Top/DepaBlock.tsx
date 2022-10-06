import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'

import { Heading } from '@/components/atoms/icons/Heading'
import { ViewMore } from '@/components/atoms/buttons/ViewMore'
import { DepaCard } from '@/components/molecules/Department/DepaCrad'

import katen from 'public/images/departmentHead/saicho.png'
import saichoIcon from 'public/icons/department/01chief.png'
import okutan from 'public/images/departmentHead/fuku-saicho.png'
import hukusaichoIcon from 'public/icons/department/02chief_sub.png'

export const DepaBlock = () => {
  return (
    <_Section>
      <_HeadingWrap>
        <Heading>部署紹介</Heading>
      </_HeadingWrap>
      <Grid gap="30px">
        <_ContentWrap>
          <_HeadImage>
            <img src={katen.src} alt="芸工祭長 花天狂骨" />
          </_HeadImage>
          <DepaCard
            icon={saichoIcon.src}
            roll="芸工祭長"
            geikoName="3N 花天狂骨"
          >
            芸工祭全体の統括をしてるよ！今年の芸工祭は例年に比べて自分の案が通りやすいかも…？！学年とか気にせずドシドシ意見出してみんなで盛り上げていこう💪いろんな部署にいるから会いにきてね❤️❤️❤️
          </DepaCard>
        </_ContentWrap>
        <_ContentWrap>
          <_HeadImage>
            <img src={okutan.src} alt="副芸工祭長 オクタン" />
          </_HeadImage>
          <DepaCard
            icon={hukusaichoIcon.src}
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
  margin-bottom: 80px;
  padding: 60px 20px 0;
`

const _HeadingWrap = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 40px;
`

const _ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px 0 30px;
  background-image: url('/2022/pre/images/top/Bg-dot.png');
  background-repeat: no-repeat;
  background-position-x: 25px;
`

const _HeadImage = styled.figure`
  position: relative;
  width: 350px;
  height: 350px;
  margin-bottom: 38px;
`
