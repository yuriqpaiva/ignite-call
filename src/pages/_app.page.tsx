import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
