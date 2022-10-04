import Image from 'next/image'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { DepaCard } from '@/components/molecules/Department/DepaCrad'
import { department } from '@/types/department'
import content from '@/data/department/departmentHeads.json'
import { _DoubleCircle } from '@/styles/CircleStyle'

type Props = {
  onClickPrev: () => void
  onClickNext: () => void
}

export const TabSlide = ({ onClickPrev, onClickNext }: Props) => {
  const data: department[] = content.departmentHeads

  return (
    <>
      <_TabWrap>
        <_PrevBtn onClick={onClickPrev} />
        <_TabPanels>
          {data.map((item, index) => (
            <TabPanel key={index}>
              <_Image src={item.image} layout="fill" alt="" />
            </TabPanel>
          ))}
        </_TabPanels>
        <_NextBtn onClick={onClickNext} />
      </_TabWrap>
      <_CardPanels>
        {data.map((item, index) => (
          <_CardPanel key={index}>
            <DepaCard
              icon={item.icon}
              roll={item.roll}
              geikoName={item.geikoName}
            >
              {item.greet}
            </DepaCard>
          </_CardPanel>
        ))}
      </_CardPanels>
    </>
  )
}

const _SetTabBtn = css`
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 100;
  background-image: url('/icons/button/navyCycle.svg');
  background-repeat: repeat;
`

const _TabWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const _TabPanels = styled(TabPanels)`
  ${_DoubleCircle}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  z-index: 30;

  &:before {
    background-image: url('/images/department/circleNavy.svg');
  }
`

const _PrevBtn = styled.button`
  ${_SetTabBtn}
  left: 0;
`

const _NextBtn = styled.button`
  ${_SetTabBtn}
  right: 0;
  transform: rotate(180deg);
`

const _Image = styled(Image)`
  width: 310px;
  height: 310px;
  filter: drop-shadow(8px 0px 0px #549f5b);
`

const _CardPanels = styled(TabPanels)`
  margin-top: 38px;
`

const _CardPanel = styled(TabPanel)`
  padding: 0;
`
