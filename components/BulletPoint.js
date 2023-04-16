import Image from 'next/image'
import React from 'react'

const BulletPoint = ({text}) => {
  return (
    <div className='flex items-start my-6'>
        <Image width={40} height={40} className="mt-2" src='/tick.png'/>
        <p className='ml-3 text-[16px]'>{text}</p>
    </div>
  )
}

export default BulletPoint