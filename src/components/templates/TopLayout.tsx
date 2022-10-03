import { HeroArea } from '@/components/organisms/Top/HeroArea'
import { About } from '@/components/organisms/Top/About'
import { Theme } from '@/components/organisms/Top/Theme'
// import { TopDepa } from "@/components/organisms/TopPage/TopDepa";
// import { TopMovie } from "@/components/organisms/TopPage/TopMovie";
// import { TopGame } from "@/components/organisms/TopPage/TopGame";

export const TopLayout = () => {
  return (
    <>
      <HeroArea />
      <About />
      <Theme />
      {/* <TopTheme />
      <TopDepa />
      <TopMovie />
      <TopGame /> */}
    </>
  )
}
