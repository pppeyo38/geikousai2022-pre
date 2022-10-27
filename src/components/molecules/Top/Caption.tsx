import { Text } from '@/components/atoms/text/Text'
import { CaptionTitle } from '@/components/molecules/Top/CaptionTitle'
import styled from '@emotion/styled'

export const Caption = () => {
  return (
    <_CaptionArea>
      <_CaptionBody>
        <CaptionTitle />
        <Text fontSize={14} color="#FFF">
          コロナ収束の目処が立たず、新しい人との繋がり、新しいことへの挑戦など、何かを始めることが難しい現代。そんな中でも私たちは前に進んでいかなければならない。ただ前に進む(Go
          on)のではなく、こんな時代でも私たちはぐーんと前に突き進み続けるという意味を込めてGOOOON(グーン)というテーマを設定しました。
        </Text>
        <Text fontSize={14} color="#FFF">
          人生という舞台は1人では作ることが出来ず、多くの人との関わりによって完成します。GOOOONの４つのOはRPGのパーティのように産業、情報、建築、そして来場者の繋がりを表しています。今回の芸工祭では様々な個性を持つ人々が新たに出会うことでみんなが前にGOOOONと進むことができるようになることを目指します。
        </Text>
      </_CaptionBody>
    </_CaptionArea>
  )
}

const _CaptionArea = styled.div`
  width: 100vw;
  overflow-y: hidden;
  background-image: url('/images/top/captionBg.jpg');
`

const _CaptionBody = styled.div`
  width: 350px;
  height: 573px;
  margin: 107px auto 80px;
  padding: 40px 30px;
  background-image: url('/images/top/captionTextBack.png');

  * + * {
    margin-top: 40px;
    :last-child {
      margin-top: 20px;
    }
  }
`
