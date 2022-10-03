import { HeroArea } from '@/components/organisms/Top/HeroArea'
import { About } from '@/components/organisms/Top/About'
import { Theme } from '@/components/organisms/Top/Theme'
import { DepaBlock } from '@/components/organisms/Top/DepaBlock'
// import { TopDepa } from "@/components/organisms/TopPage/TopDepa";
// import { TopMovie } from "@/components/organisms/TopPage/TopMovie";
// import { TopGame } from "@/components/organisms/TopPage/TopGame";

export const TopLayout = () => {
  return (
    <>
      <HeroArea />
      <About />
      <Theme />
      <DepaBlock />
      {/* <TopDepa />
      <TopMovie />
      <TopGame />  */}
    </>
  )
}
