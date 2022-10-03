import Image from 'next/image'
import styled from '@emotion/styled'

import { Heading } from '@/components/atoms/icons/Heading'
import { ViewMore } from '@/components/atoms/buttons/ViewMore'
import { Text } from '@/components/atoms/text/Text'

export const GameBlock = () => {
  return (
    <_Section>
      <Heading>ミニゲーム</Heading>
      <_ThumWrap>
        <Image
          src="/images/top/gameThumbnail.jpg"
          alt="ミニゲーム スライム投げてみた"
          layout="fill"
        />
      </_ThumWrap>
      <Text fontSize={16} color="#000">
        スライムを引っ張って遠くまで飛ばそう！
        <br />
        たくさん飛ばして目指せランカー！
      </Text>
      <ViewMore route="/game">ミニゲームをする</ViewMore>
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

const _ThumWrap = styled.figure`
  position: relative;
  width: 390px;
  height: 338px;
`
