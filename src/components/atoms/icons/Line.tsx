import styled from '@emotion/styled'
import LINEIcon from 'public/icons/sns/LINE.svg'

export const Line = () => {
  return (
    <_A href="https://lin.ee/W28H8q6" target="_blank" rel="noopener noreferrer">
      <LINEIcon />
    </_A>
  )
}

const _A = styled.a`
  display: grid;
  place-content: center;
  width: 80px;
  height: 80px;
`
