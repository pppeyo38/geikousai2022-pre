import { Tabs } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { usePanelSlide } from '@/hooks/usePanelSlide'
import { Text } from '@/components/atoms/text/Text'
import { PageTitle } from '@/components/molecules/Shared/PageTitle'
import { TabSlide } from '@/components/organisms/Department/TabSlide'
import { TabImageList } from '@/components/organisms/Department/TabImageList'

export const DepartmentLayout = () => {
  const { tabIndex, onClickPrev, onClickNext, onClickSetPanel } =
    usePanelSlide()

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
      <_Tabs defaultIndex={tabIndex} index={tabIndex}>
        <_ImageTabs>
          <TabSlide onClickPrev={onClickPrev} onClickNext={onClickNext} />
        </_ImageTabs>
        <TabImageList tabIndex={tabIndex} onClickSetPanel={onClickSetPanel} />
      </_Tabs>
    </_Section>
  )
}

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;
`

const _TextWrap = styled.div`
  margin: 22px 0;
  text-align: center;
`

const _Tabs = styled(Tabs)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _ImageTabs = styled.div`
  width: 350px;
  padding: 38px 0 30px;
  background-image: url('/images/top/Bg-dot.png');
  background-repeat: repeat-y;
  background-position-x: 10px;
`
