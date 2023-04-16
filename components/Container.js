import React from 'react'

const Container = ({children}) => {
  return (
    <div className='lg:px-[100px] lg:py-10 md:py-10 px-[15px] md:px-[20px] py-[10px]'>{children}</div>
  )
}

export default Container