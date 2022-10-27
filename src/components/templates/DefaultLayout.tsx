import { useRouter } from 'next/router'
import { Header } from '@/components/organisms/Shared/Header'
import { Footer } from '@/components/organisms/Shared/Footer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  const route = useRouter()

  return (
    <>
      {route.pathname !== '/chart' && <Header />}
      {children}
      {route.pathname !== '/chart' && <Footer />}
    </>
  )
}
