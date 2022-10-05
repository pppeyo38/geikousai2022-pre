import { keyframes } from '@emotion/react'

export const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const counterRotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
`

export const neonGreen = keyframes`
  100% {
    box-shadow: 0 0 4px rgba(0, 255, 0, 0.1), 0 0 11px rgba(0, 255, 0, 0.1),
      0 0 40px rgba(0, 255, 0, 0.2), 0 0 60px rgba(0, 255, 0, 0.4),
      0 0 4px rgba(0, 255, 0, 0.1) inset, 0 0 11px rgba(0, 255, 0, 0.1) inset,
      0 0 40px rgba(0, 255, 0, 0.2) inset, 0 0 60px rgba(0, 255, 0, 0.4) inset;
  }
  0% {
    box-shadow: 0 0 2px rgba(0, 255, 0, 0.1), 0 0 4px rgba(0, 255, 0, 0.1),
      0 0 10px rgba(0, 255, 0, 0.2), 0 0 35px rgba(0, 255, 0, 0.4),
      0 0 2px rgba(0, 255, 0, 0.1) inset, 0 0 4px rgba(0, 255, 0, 0.1) inset,
      0 0 10px rgba(0, 255, 0, 0.2) inset, 0 0 35px rgba(0, 255, 0, 0.4) inset;
  }
`

export const neonRed = keyframes`
  100% {
    box-shadow: 0 0 4px rgba(255, 0, 0, 0.1), 0 0 11px rgba(255, 0, 0, 0.1),
      0 0 40px rgba(255, 0, 0, 0.2), 0 0 60px rgba(255, 0, 0, 0.4),
      0 0 4px rgba(255, 0, 0, 0.1) inset, 0 0 11px rgba(255, 0, 0, 0.1) inset,
      0 0 40px rgba(255, 0, 0, 0.2) inset, 0 0 60px rgba(255, 0, 0, 0.4) inset;
  }
  0% {
    box-shadow: 0 0 2px rgba(255, 0, 0, 0.1), 0 0 4px rgba(255, 0, 0, 0.1),
      0 0 10px rgba(255, 0, 0, 0.2), 0 0 35px rgba(255, 0, 0, 0.4),
      0 0 2px rgba(255, 0, 0, 0.1) inset, 0 0 4px rgba(255, 0, 0, 0.1) inset,
      0 0 10px rgba(255, 0, 0, 0.2) inset, 0 0 35px rgba(255, 0, 0, 0.4) inset;
  }
`
