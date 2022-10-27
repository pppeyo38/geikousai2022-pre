import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { url } from '@/utils/config'

type Props = {
  children: ReactNode
  route: string
}

export const ViewMore = ({ children, route }: Props) => {
  const router = useRouter()

  return <_Button onClick={() => router.push(route)}>{children}</_Button>
}

const _Button = styled.button`
  position: relative;
  width: 265px;
  height: 36px;
  font-family: ${({ theme }) => theme.fonts.txtBasic};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(90deg, #99c955 0%, #30895e 100%);

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 8px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background-image: url(${url('/icons/button/viewMore_white.svg')});
    background-repeat: no-repeat;
  }
`
