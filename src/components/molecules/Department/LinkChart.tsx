import Link from 'next/link'
import styled from '@emotion/styled'
import { url } from '@/utils/config'

export const LinkChart = () => {
  return (
    <Link href="/chart">
      <_A>悩んでいるキミは適部署チャート！</_A>
    </Link>
  )
}

const _A = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 45px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 14px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.red};

  &:before {
    content: '';
    position: absolute;
    z-index: -10;
    width: 330px;
    height: 45px;
    top: 0px;
    left: 0;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.red};
    transform: skew(-15deg, 0);
    box-shadow: 0px 4px 15px rgba(220, 77, 64, 0.4);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 200;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${url('/icons/button/viewMore_red.svg')});
    background-repeat: no-repeat;
  }
`
