import { keyframes } from '@emotion/react'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const slideOutToTop = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }

  100% {
    opacity: 0;
    transform: translateY(-5px);
  }
`
export const slideToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(180px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const slideToRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-180px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
