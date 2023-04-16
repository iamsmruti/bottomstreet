import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
    <div className='hidden items-center md:flex'>
        <Image width={50} height={50} src={logo}/>
        <p className='text-[20px] font-semibold pl-4'>Bottom Street</p>
    </div>
    <div className='md:hidden flex justify-center'>
        <Image width={50} height={50} src={logo}/>
    </div>
    </Link>
  )
}

export default Logo