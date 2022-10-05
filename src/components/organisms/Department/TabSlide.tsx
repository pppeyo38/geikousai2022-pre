import Image from 'next/image'
import { useEffect, useState } from 'react'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'

import { DepaCard } from '@/components/molecules/Department/DepaCrad'
import { department } from '@/types/department'
import { departmentHeads } from '@/data/department/departmentHeads.json'
import { _DoubleCircle } from '@/styles/CircleStyle'
import { slideToLeft, slideToRight } from '@/styles/animation/fadeKeyframes'

type Props = {
  tabIndex: number
  prevSlide: () => void
  nextSlide: () => void
}

export const TabSlide = ({ tabIndex, prevSlide, nextSlide }: Props) => {
  const data: department[] = departmentHeads
  const [isNext, setIsNext] = useState(true)
  const [slideMove, setSlideMove] = useState<SerializedStyles>()

  const onClickSlide = (isNextClick: boolean) => {
    setIsNext(isNextClick)
    if (isNextClick) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  const getMove = (index: number) => {
    if (index !== tabIndex) return
    return slideMove
  }

  useEffect(() => {
    if (isNext) {
      setSlideMove(_slideToLeft)
    } else {
      setSlideMove(_slideToRight)
    }
  }, [tabIndex, isNext])

  return (
    <>
      <_TabWrap>
        <_PrevBtn onClick={() => onClickSlide(false)} />
        <_TabPanels>
          {data.map((item, index) => (
            <_SlideWrap key={index} move={getMove(index)}>
              <_TabPanel>
                <_Image src={item.image} layout="fill" alt="" />
              </_TabPanel>
            </_SlideWrap>
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

const _slideToLeft = css`
  animation: 1s ${slideToLeft} cubic-bezier(0.25, 1, 0.5, 1);
`

const _slideToRight = css`
  animation: 1s ${slideToRight} cubic-bezier(0.25, 1, 0.5, 1);
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
    background-image: url('/images/department/circleNavy.svg');
  }
`

const _SlideWrap = styled.div<{ move: SerializedStyles | undefined }>`
  ${(props) => props.move}
`

const _TabPanel = styled(TabPanel)`
  position: relative;
  width: 310px;
  height: 310px;
  padding: 0;
  outline: none;
  outline-offset: 0;
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
  filter: drop-shadow(8px 0px 0px #549f5b);
`

const _CardPanels = styled(TabPanels)`
  margin-top: 38px;
`

const _CardPanel = styled(TabPanel)`
  padding: 0;
`
