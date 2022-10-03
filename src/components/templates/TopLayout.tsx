import { HeroArea } from '@/components/organisms/Top/HeroArea'
import { About } from '@/components/organisms/Top/About'
// import { TopTheme } from "@/components/organisms/TopPage/TopTheme";
// import { TopDepa } from "@/components/organisms/TopPage/TopDepa";
// import { TopMovie } from "@/components/organisms/TopPage/TopMovie";
// import { TopGame } from "@/components/organisms/TopPage/TopGame";

export const TopLayout = () => {
  return (
    <>
      <HeroArea />
      <About />
      {/* <TopTheme />
      <TopDepa />
      <TopMovie />
      <TopGame /> */}
    </>
  )
}
