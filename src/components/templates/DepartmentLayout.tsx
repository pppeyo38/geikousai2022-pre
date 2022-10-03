import styled from '@emotion/styled'

import { Text } from '@/components/atoms/text/Text'
import { PageTitle } from '@/components/molecules/PageTitle'

export const DepartmentLayout = () => {
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
