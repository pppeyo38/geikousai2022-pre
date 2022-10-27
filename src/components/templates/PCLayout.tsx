import { url } from '@/utils/config'
import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

export const PCLayout = () => {
  const height = use100vh()
  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_Inner>
        <_Figure>
          <_Logo src={url('/Logo_fill.png')} alt="芸工祭2022プレサイト" />
        </_Figure>
        <_P>スマートフォンでご覧ください😓</_P>
      </_Inner>
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.section<{ height: string }>`
  width: 100vw;
  height: ${(props) => props.height};
  display: grid;
  place-content: center;
  background: linear-gradient(
    90deg,
    rgba(153, 201, 85, 0.8) 0%,
    rgba(48, 137, 94, 0.8) 100%
  );
`

const _Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

const _Figure = styled.figure`
  width: 174px;
  height: 157px;
`

const _Logo = styled.img`
  width: 100%;
`

const _P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 21px;
  font-weight: ${({ theme }) => theme.fontWt.Bold};
  line-height: 150%;
  letter-spacing: 0.1em;
`
