import { ReactNode } from 'react'
import { use100vh } from 'react-div-100vh'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
}

export const ChartTemplate = ({ children }: Props) => {
  const height = use100vh()

  return <_Page height={height ? `${height}px` : '100vh'}>{children}</_Page>
}

const _Page = styled.section<{ height: string }>`
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.colors.navy};
`
