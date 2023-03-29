

import type { AppProps } from 'next/app'
import {globalStyles} from './../styles/global'

globalStyles()

import logoimg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
  <Container> 
    <Header> 
        <img src={logoimg.src} alt="" />

    </Header>
  <Component {...pageProps} />
  </Container>
  
  )
}
