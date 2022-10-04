import { useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'
import styled from '@emotion/styled'

import { Loading } from '@/components/organisms/Chart/Loading'

export const ChartLayout = () => {
  const height = use100vh()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <_Page height={height ? `${height}px` : '100vh'}>
      {isLoading && <Loading />}
    </_Page>
  )
}

const _Page = styled.section<{ height: string }>`
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.colors.navy};
`
