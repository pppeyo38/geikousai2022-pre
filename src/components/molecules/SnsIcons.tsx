import styled from '@emotion/styled'

import { Instagram } from '@/components/atoms/icons/Instagram'
import { Twitter } from '@/components/atoms/icons/Twitter'
import { Line } from '@/components/atoms/icons/Line'

export const SnsIcons = () => {
  return (
    <_IconWrap>
      <Instagram />
      <Twitter />
      <Line />
    </_IconWrap>
  )
}

const _IconWrap = styled.div`
  display: flex;
`
