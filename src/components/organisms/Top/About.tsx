import styled from '@emotion/styled'
import { AboutTxt } from '@/components/atoms/text/AboutTxt'
import { PageTitle } from '@/components/molecules/Shared/PageTitle'

export const About = () => {
  return (
    <_Section>
      <PageTitle subTitle="芸工祭とは" isShadow>
        ABOUT
      </PageTitle>
      <AboutTxt fontSize={16}>
        装飾に彩られたキャンパス
        <br />
        個性豊かな作品の展示
        <br />
        笑いの溢れるステージ企画に
        <br />
        アイデアたっぷりの模擬店。
        <br />
        極め付けはオシャレで美味しい本格カフェ。
      </AboutTxt>
      <AboutTxt fontSize={16}>
        とにかく見どころ満載で
        <br />
        妥協のないこの学祭は
        <br />
        笑いの溢れるステージ企画に
        <br />
        <_RedBorder>芸工生全員で作る</_RedBorder>一つの作品です！
      </AboutTxt>
      <AboutTxt fontSize={20}>
        <_doubleExclamation>みんなで盛り上げよう</_doubleExclamation>
      </AboutTxt>
    </_Section>
  )
}

const _Section = styled.section`
  padding: 60px 30px;
  background-image: url('/images/top/aboutBg.jpg');
  background-size: cover;

  * + * {
    margin-top: 40px;
  }
`

const _RedBorder = styled.span`
  position: relative;
  margin-right: 5px;
  z-index: 3;
  filter: drop-shadow(0px 2px 1px rgba(43, 43, 43, 0.1));

  &:before {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 130px;
    height: 8.6px;
    background: #ff6c5f;
    z-index: -1;
  }
`

const _doubleExclamation = styled.span`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 9px);
    right: -24px;
    width: 24px;
    height: 18px;
    background-image: url('/icons/text/emojione_double-exclamation-mark.svg');
    background-repeat: no-repeat;
  }
`
