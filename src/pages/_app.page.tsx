import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const roboto = Roboto_Flex({ subsets: ['latin'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className={roboto.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}
