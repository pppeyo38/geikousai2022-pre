import { Tabs } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { usePanelSlide } from '@/hooks/usePanelSlide'
import { Text } from '@/components/atoms/text/Text'
import { PageTitle } from '@/components/molecules/PageTitle'
import { TabSlide } from '@/components/organisms/Department/TabSlide'

export const DepartmentLayout = () => {
  const { tabIndex, onClickPrev, onClickNext } = usePanelSlide()

  return (
    <_Section>
      <PageTitle subTitle="部署紹介">DEPARTMENTS</PageTitle>
      <_TextWrap>
        <Text fontSize={12} color="#000">
          芸工祭には19の幹部と部署長がいます。
          <br />
          部署に所属して一緒に芸工祭を盛り上げよう。
          <br />
          兼部署についてはインスタをチェック！
        </Text>
      </_TextWrap>
      <Tabs defaultIndex={tabIndex} index={tabIndex}>
        <TabSlide onClickPrev={onClickPrev} onClickNext={onClickNext} />
      </Tabs>
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
  margin: 22px 0;
  text-align: center;
`
