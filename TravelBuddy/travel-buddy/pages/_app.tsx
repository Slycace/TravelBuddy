import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <ChakraProvider>
    <Script strategy='beforeInteractive'
    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}Y&libraries=places&callback=initMap` } id='googleLibScript'>
  </Script>
   <Component {...pageProps} />
   </ChakraProvider>
  )
}

export default MyApp
