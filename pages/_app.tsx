import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import createEmotionCache from '@src/createEmotionCache'
import Layout from '@components/Layouts'

import '../styles/globals.scss'

type PropTypes = AppProps & {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: PropTypes) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <CssBaseline />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

export default MyApp
