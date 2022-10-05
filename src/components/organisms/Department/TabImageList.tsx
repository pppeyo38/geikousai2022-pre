import styled from '@emotion/styled'
import { TabList } from '@chakra-ui/react'

import { PageTitle } from '@/components/molecules/Shared/PageTitle'
import { kanbu, busyocho } from '@/data/department/departmentTab.json'
import Image from 'next/image'

type Props = {
  tabIndex: number
  onClickSetPanel: (index: number) => void
}

export const TabImageList = ({ tabIndex, onClickSetPanel }: Props) => {
  return (
    <_TabList>
      <PageTitle subTitle="幹部" color="#FFF">
        KANBU
      </PageTitle>
      <_ImageRow>
        {kanbu.map((item) => (
          <_ImageRowItem
            key={item.id}
            isFocus={tabIndex === item.id}
            onClick={() => onClickSetPanel(item.id)}
          >
            <Image src={item.image} alt="" width={62} height={115} />
          </_ImageRowItem>
        ))}
      </_ImageRow>
      <PageTitle subTitle="部署長" color="#FFF">
        BUSHOCHO
      </PageTitle>
      <_ImageRow>
        {busyocho.map((item) => (
          <_ImageRowItem
            key={item.id}
            isFocus={tabIndex === item.id}
            onClick={() => onClickSetPanel(item.id)}
          >
            <Image src={item.image} alt="" width={62} height={115} />
          </_ImageRowItem>
        ))}
      </_ImageRow>
    </_TabList>
  )
}

const _TabList = styled(TabList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  border: none;
  background-image: url('/images/department/depaListBg.png');
`

const _ImageRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 360px;
  margin: 18px 0 32px;
`

const _ImageRowItem = styled.li<{ isFocus: boolean }>`
  filter: ${(props) => (props.isFocus ? 'grayscale(0)' : 'grayscale(1)')};
  ${(props) => props.isFocus && 'transform: scale(1.1);'}
`
