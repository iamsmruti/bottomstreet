import Link from 'next/link'
import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { TbMenu } from 'react-icons/tb'
import { RxCross1 } from 'react-icons/rx'

const Footer = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <>
    <div className='bg-black text-white md:px-[100px] md:py-5 py-5 px-[15px]'>
      <div className='flex md:flex-row flex-col md:items-start items-center justify-between text-sm mb-20 '>
        <a href='mailto:help@bottomstreet.com'>
          <div className='flex items-center md:mt-[0px] mt-[5px]'>
            <FaEnvelope /> 
            <p className='ml-2'>help@bottomstreet.com</p>
          </div>
        </a>

        <div className='text-center text-sm md:ml-[-110px] ml-0 md:block hidden'>
          <p>For Investors And Traders Around The World</p>
          <p>Make Money. Be Happy.</p>
        </div>

        <div className='flex items-center md:mt-[0px] mt-[20px]'>
          <a href="https://www.instagram.com/bottom.street/" target={"_blank"}>
            <img className='w-7 mr-5' src='/insta.png' />
          </a>
          <a href='https://twitter.com/itsbottomstreet' target={"_blank"}>
            <img className='w-7' src='/twitter.png' />
          </a>
        </div>
      </div>

      <div className='text-center mb-3 text-sm'>
        <p>Copyright © 2023 BottomStreet. All rights reserved.</p>
      </div>

      <div className='border-t-[1px] border-[#E0E0E0] flex justify-center pt-3'>
        <div onClick={handleToggle} className='md:hidden'>
          <TbMenu className='text-[28px] my-1'/>
        </div>
        <div className='md:flex hidden'>
          <Link href='/privacy_policy'>
            <p className='text-sm mr-6'>Privacy Policy</p>
          </Link>

          <Link href='/disclaimer'>
            <p className='text-sm mr-6'>Disclaimer</p>
          </Link>

          <Link href='/terms_of_use'>
            <p className='text-sm mr-6'>Terms of Use</p>
          </Link>

          <Link href='/terms_and_conditions'>
            <p className='text-sm mr-6'>Terms & Conditions</p>
          </Link>

          <Link href='#'>
            <p className='text-sm'>Sitemap</p>
          </Link>
        </div>
      </div>
    </div>
    {open && <div className='fixed w-[100vw] h-[100vh] bg-white top-0 left-0 transition-all duration-[1s]'>
      <div onClick={handleToggle} className='w-[100%] flex justify-end py-5 pr-5'>
        <RxCross1 className='text-[30px]'/>
      </div>

      <div onClick={handleToggle} className='flex flex-col justify-evenly h-[300px] items-center mt-[30px]'>
          <Link href='/privacy_policy'>
            <p className='text-md'>Privacy Policy</p>
          </Link>

          <Link href='/disclaimer'>
            <p className='text-md'>Disclaimer</p>
          </Link>

          <Link href='/terms_of_use'>
            <p className='text-md'>Terms of Use</p>
          </Link>

          <Link href='/terms_and_conditions'>
            <p className='text-md'>Terms & Conditions</p>
          </Link>

          <Link href='/sitemap.xml'>
            <p className='text-md'>Sitemap</p>
          </Link>
      </div>
    </div>}
    </>
  )
}

export default Footer