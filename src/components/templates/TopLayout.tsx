import { HeroArea } from '@/components/organisms/Top/HeroArea'
import { About } from '@/components/organisms/Top/About'
import { Theme } from '@/components/organisms/Top/Theme'
import { DepaBlock } from '@/components/organisms/Top/DepaBlock'
import { MovieBlock } from '@/components/organisms/Top/MovieBlock'
import { GameBlock } from '../organisms/Top/GameBlock'

export const TopLayout = () => {
  return (
    <>
      <HeroArea />
      <About />
      <Theme />
      <DepaBlock />
      <MovieBlock />
      <GameBlock />
    </>
  )
}
