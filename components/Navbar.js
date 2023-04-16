import React from 'react'
import Container from './Container'
import DownloadButton from './DownloadButton'
import Logo from './Logo'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center md:mx-[0px] mx-[20px] md:my-[0px] my-[20px]">
          <Logo />

          <Link href="/blog">
              <p className='text-[20px] font-semibold md:hidden'>Blog</p>
          </Link>

          <div className='md:flex hidden items-center'>
            <Link href="/blog">
              <p className='text-[20px] font-semibold mr-10'>Blog</p>
            </Link>
            <DownloadButton />
          </div>
      </div>
    </Container>
  )
}

export default Navbar