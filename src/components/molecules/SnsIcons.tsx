import styled from '@emotion/styled'

import { Twitter } from '@/components/atoms/icons/Twitter'
import { Instagram } from '@/components/atoms/icons/Instagram'
import { Line } from '@/components/atoms/icons/Line'

export const SnsIcons = () => {
  return (
    <_IconWrap>
      <Twitter />
      <Instagram />
      <Line />
    </_IconWrap>
  )
}

const _IconWrap = styled.div`
  display: flex;
`
