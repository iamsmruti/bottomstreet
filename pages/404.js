import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
        <p className='text-[124px]'>404</p>
        <p className='font-medium text-2xl'>Not Found</p>
        <Link href={"/"}>
            <p className='hover:no-underline underline mt-3'>Go Back to Home</p>
        </Link>
    </div>
  )
}

export default NotFound