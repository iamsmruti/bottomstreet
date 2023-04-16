import React from 'react'

const FeatureCard = ({icon, title, description}) => {
  return (
    <div className='flex flex-col items-center text-center px-[10px] lg:mb-0 md:mb-10 mb-5'>
        <div className='md:flex hidden h-[50px] w-[50px] justify-center items-center'>
          <img width={40} src={icon} alt='stock' />
        </div>

        <div className='block md:hidden'>
          <img width={50} src={icon} alt='stock' />
        </div>
        
        <div className="">
          <p className='text-[18px] font-bold mt-10'>{title}</p>
        </div>
        <p className='text-[14px] font-normal mt-3'>{description}</p>
    </div>
  )
}

export default FeatureCard