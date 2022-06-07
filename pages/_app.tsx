import type { AppProps } from 'next/app'
import Head from 'next/head'

import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@src/createEmotionCache'

import '../styles/globals.scss'

interface PropTypes extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: PropTypes) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
