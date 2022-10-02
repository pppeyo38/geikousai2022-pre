import styled from '@emotion/styled'
import TwitterIcon from 'public/icons/sns/Twitter.svg'

export const Twitter = () => {
  return (
    <_A
      href="https://twitter.com/geik0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon />
    </_A>
  )
}

const _A = styled.a`
  display: grid;
  place-content: center;
  width: 80px;
  height: 80px;
`
