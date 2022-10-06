import { css } from '@emotion/react'
import { rotate, counterRotate } from '@/styles/animation/circleKeyframes'

export const _DoubleCircle = css`
  position: relative;
  z-index: 30;

  &:before {
    content: '';
    position: absolute;
    z-index: -100;
    width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    filter: drop-shadow(0 0 15px rgba(13, 46, 79, 0.4));
    animation: 10s linear infinite ${rotate};
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -100;
    width: 310px;
    height: 310px;
    background-image: url('/2022/pre/images/department/circleGreen.svg');
    background-repeat: no-repeat;
    filter: drop-shadow(0 0 15px rgba(159, 199, 113, 0.4));
    animation: 12s linear infinite ${counterRotate};
  }
`
