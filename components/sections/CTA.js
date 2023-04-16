import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <div className='md:mt-[300px] mt-[200px]'> 
      <div className='bg-black flex justify-center relative h-[200px]'>
        <div className='lg:w-[800px] w-[90%] h-[300px] md:h-[415px] bg-[#6CE78D] absolute bottom-[30px] rounded-[24px] flex flex-col justify-center items-center'>
          <div>
            <Image src='/logo.png' width={50} height={50} />
          </div>

          <div className='mt-4 text-center'>
            <h1 className='text-black md:text-[24px] text-[18px] font-semibold'>Get the Bottom Street App Now!!</h1>
            <p className='md:text-[18px] text-[14px]'>Track. Analyze. Make Decision with AI.</p>
          </div>

          <div className='flex mt-10'>
            <a href='https://apps.apple.com/in/app/bottomstreet-markets-today/id1658981920' target={"_blank"} className='mr-5'>
              <img src='/appStore.png' width={160}/>
            </a>

            <a href='https://play.google.com/store/apps/details?id=com.paprclip.bottomstreet' target={"_blank"}>
              <img src='/playStore.png' width={160}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
