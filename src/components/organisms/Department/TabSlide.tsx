import React, { useState } from 'react'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { url } from '@/utils/config'
import { DepaCard } from '@/components/molecules/Department/DepaCrad'
import { department } from '@/types/department'
import departmentHeadsData from '@/data/department/departmentHeads.json'
import { _DoubleCircle } from '@/styles/CircleStyle'
import { slideToLeft, slideToRight } from '@/styles/animation/fadeKeyframes'

type Props = {
  prevSlide: () => void
  nextSlide: () => void
}

export const TabSlide = ({ prevSlide, nextSlide }: Props) => {
  const data: department[] = departmentHeadsData.departmentHeads
  const [isNext, setIsNext] = useState(true)

  const onClickSlide = (isNextClick: boolean) => {
    setIsNext(isNextClick)
    if (isNextClick) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  return (
    <React.Fragment>
      <_TabWrap>
        <_PrevBtn onClick={() => onClickSlide(false)} />
        <_TabPanels>
          {data.map((item, index) => (
            <_TabPanel key={index}>
              <_SlideWrap isNext={isNext}>
                <_Image src={item.image} alt={item.geikoName} />
              </_SlideWrap>
            </_TabPanel>
          ))}
        </_TabPanels>
        <_NextBtn onClick={() => onClickSlide(true)} />
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
    </React.Fragment>
  )
}

const _SetTabBtn = css`
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 100;
  background-image: url(${url('/icons/button/navyCycle.svg')});
  background-repeat: repeat;
`

const _TabWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const _TabPanels = styled(TabPanels)`
  ${_DoubleCircle}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  z-index: 30;

  &:before {
    background-image: url(${url('/images/department/circleNavy.svg')});
  }
`

const _TabPanel = styled(TabPanel)`
  padding: 0;
  outline: none;
  outline-offset: 0;
`

const _SlideWrap = styled.figure<{ isNext: boolean }>`
  position: relative;
  width: 350px;
  height: 350px;
  animation: ${(props) =>
    props.isNext
      ? css` 1s ${slideToLeft} cubic-bezier(0.25, 1, 0.5, 1) `
      : css`1s ${slideToRight} cubic-bezier(0.25, 1, 0.5, 1)`};
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

const _Image = styled.img`
  filter: drop-shadow(8px 0px 0px #549f5b);
`

const _CardPanels = styled(TabPanels)`
  margin-top: 38px;
`

const _CardPanel = styled(TabPanel)`
  padding: 0;
`
