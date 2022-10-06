import styled from '@emotion/styled'

export const Logo = () => {
  return (
    <_LogoWrap>
      <img
        src="/icons/header/geikosai-logo.png"
        width={47}
        height={43}
        alt="芸工祭2022 GOOOON"
      />
    </_LogoWrap>
  )
}

const _LogoWrap = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: grid;
  place-content: center;
`
