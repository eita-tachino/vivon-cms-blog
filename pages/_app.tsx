import React, { useState, useEffect } from 'react'
import { Layout } from '../components'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
