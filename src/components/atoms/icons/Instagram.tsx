import styled from '@emotion/styled'
import InstagramIcon from 'public/icons/sns/Instagram.svg'

export const Instagram = () => {
  return (
    <_A
      href="https://www.instagram.com/geiko.fes_2022/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon />
    </_A>
  )
}

const _A = styled.a`
  display: grid;
  place-content: center;
  width: 80px;
  height: 80px;
`
