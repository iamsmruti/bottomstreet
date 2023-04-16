import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='transition-all'>
        <Head>
            <title>Bottom Street</title>
            <link rel="icon" href="/logo.png" />
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout