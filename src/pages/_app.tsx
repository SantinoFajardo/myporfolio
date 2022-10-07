import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider, ThemeProvider} from '@chakra-ui/react'
import  myTheme  from "../styles/theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
