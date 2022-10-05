import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { CircleSkeltonBtn } from '@/components/atoms/buttons/CircleSkeltonBtn'
import { ResultCircle } from '@/components/molecules/Chart/ResultCircle'
import { resultType } from '@/types/chart'

import BackIcon from 'public/icons/chart/back.svg'
import TwitterIcon from 'public/icons/chart/twitter.svg'

type Props = {
  result: resultType
  chartReset: () => void
}

export const ResultDisplay = ({ result, chartReset }: Props) => {
  const router = useRouter()

  return (
    <_ContentWrap>
      <ResultCircle result={result} />
      <_LowerBtnArea>
        <CircleSkeltonBtn onClick={chartReset}>
          <BackIcon />
        </CircleSkeltonBtn>
        <_TwitterShare
          href={`http://twitter.com/share?url=https://geikousai-ncu.com/&text=私の適部署は…%0a%0a${result.department}部署！！！%0a%23芸工祭2022%20%23GOOOON`}
          target="_blank"
        >
          <TwitterIcon />
        </_TwitterShare>
        <CircleSkeltonBtn onClick={() => router.push('/departments')}>
          <_Span>
            VIEW
            <br />
            MORE
          </_Span>
        </CircleSkeltonBtn>
      </_LowerBtnArea>
    </_ContentWrap>
  )
}

const _ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(
    rgb(13, 46, 79) 0%,
    rgb(13, 46, 79) 50%,
    rgb(153, 201, 85) 50%,
    rgb(48, 137, 94) 100%
  );
`

const _LowerBtnArea = styled.div`
  display: flex;
  gap: 20px;
`

const _TwitterShare = styled.a`
  display: grid;
  place-content: center;
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #fff;
  border-radius: 50%;
  transform: translateY(30px);
`

const _Span = styled.span`
  display: block;
  font-family: 'vdl-gigajr';
  font-size: 20px;
  color: #fff;
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
`
