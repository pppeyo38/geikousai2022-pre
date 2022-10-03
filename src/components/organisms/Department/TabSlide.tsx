import Image from 'next/image'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { department } from '@/types/department'
import content from '@/data/departmentHeads.json'

type Props = {
  onClickPrev: () => void
  onClickNext: () => void
}

export const TabSlide = ({ onClickPrev, onClickNext }: Props) => {
  const data: department[] = content.departmentHeads

  return (
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  z-index: 30;

  &:before {
    content: '';
    position: absolute;
    z-index: -100;
    width: 250px;
    height: 250px;
    background-image: url('/images/department/circleNavy.svg');
    background-repeat: no-repeat;
    filter: drop-shadow(0 0 15px rgba(13, 46, 79, 0.4));
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -100;
    width: 310px;
    height: 310px;
    background-image: url('/images/department/circleGreen.svg');
    background-repeat: no-repeat;
    filter: drop-shadow(0 0 15px rgba(159, 199, 113, 0.4));
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

const _TabPanel = styled(TabPanel)`
  position: relative;
`

const _Image = styled(Image)`
  width: 310px;
  height: 310px;
  filter: drop-shadow(8px 0px 0px #549f5b);
`
