import { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
  onClick: () => void
}

export const CircleSkeltonBtn = ({ children, onClick }: Props) => {
  return <_Button onClick={onClick}>{children}</_Button>
}

const _Button = styled.button`
  display: grid;
  place-content: center;
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #fff;
  border-radius: 50%;
`
