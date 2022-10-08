import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider, ThemeProvider} from '@chakra-ui/react'
import  myTheme  from "../styles/theme";
import React from 'react'; 
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  }
}

export default MyApp
