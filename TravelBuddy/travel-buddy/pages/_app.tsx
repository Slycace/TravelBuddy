import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  https://maps.googleapis.com/maps/api/js?key=AIzaSyCgP_pdM625rWLqOMkhqX7r2lu8BUiONa4&libraries=places
  return(
  <ChakraProvider>
    <Script strategy='beforeInteractive'
    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places` } id='googleLibScript'>
  </Script>
   <Component {...pageProps} />
   </ChakraProvider>
  )
}

export default MyApp
