

import type { AppProps } from 'next/app'
import {globalStyles} from './../styles/global'

globalStyles()

import logoimg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {

  return (
  <Container> 
    <Header> 
    <Image src={logoimg.src} alt="" width="120"  height="120"/>

    </Header>
  <Component {...pageProps} />
  </Container>
  
  )
}
