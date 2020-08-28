import React from 'react'
import Head from 'next/head'

import NextLogo from '../assets/next_logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <NextLogo />
      <h1>Hello World!</h1>

    </Container>
  )
}

export default Home
