import React from 'react'
import DownloadButton from '../DownloadButton'

const Crypto = () => {
  return (
    <div className='crypto flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center md:w-[600px] w-[90%]'>
        <h1 className='text-white text-[32px] font-semibold mb-5'>Crypto Currency</h1>

        <div className='mb-8 text-center'>
          <p className='text-white text-[14px] md:text-[16px]'>Monitor top gainers and losers in real-time. Get personalized recommendations and risk management tools tomaximize your returns and stay ahead of the market. </p>
        </div>

        <DownloadButton />
      </div>
    </div>
  )
}

export default Crypto