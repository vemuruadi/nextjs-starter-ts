import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
export default MyApp
