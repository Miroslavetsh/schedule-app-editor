import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import type { SessionProviderProps } from 'next-auth/react'
import { SessionProvider } from 'next-auth/react'
import CssBaseline from '@mui/material/CssBaseline'

import createEmotionCache from '@src/utils/createEmotionCache'
import Layout from '@src/components/Layouts'

import '../styles/globals.scss'

type PropTypes = AppProps &
  SessionProviderProps & {
    emotionCache?: EmotionCache
  }

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
  session,
}: PropTypes) => {
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <CssBaseline />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </SessionProvider>
  )
}

export default MyApp
