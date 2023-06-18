import '../lib/dayjs'

import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/react-query'
import { DefaultSeo } from 'next-seo'

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
          <DefaultSeo
            title="Ignite Call"
            description="Ignite Call é uma aplicação web para criação de agendamentos integrados com seu calendário pessoal."
            openGraph={{
              url: 'https://ignite-call.vercel.app/',
              title: 'Open Graph Title',
              description: 'Open Graph Description',
              siteName: 'SiteName',
            }}
            twitter={{
              handle: '@handle',
              site: '@ignite-call',
              cardType: 'summary_large_image',
            }}
          />
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </main>
  )
}
