import '../lib/dayjs'

import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/react-query'

const roboto = Roboto_Flex({ subsets: ['latin'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className={roboto.className}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </main>
  )
}
