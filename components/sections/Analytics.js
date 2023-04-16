import React, { useState, useEffect } from 'react'
import BulletPoint from '../BulletPoint'
import Container from '../Container'
import DownloadButton from '../DownloadButton'
import VideoContainer from '../VideoContainer'

const Analytics = ({countryCode}) => {
  const [asset, setAsset] = useState('')

  useEffect(() => {
    if (countryCode === 'IN') {
      setAsset('/India/analytics.mp4')
    } else {
      setAsset('/Global/analytics.mp4')
    }
  },[countryCode])

  const items = [
    {
      text: "Our investment tools provide you with the insights and resources you need to stay ahead of the game and maximize your returns."
    },
    {
      text: "You can analyze market trends, identify investment opportunities, and make informed decisions based on real-time data"
    },
    {
      text: "Our user-friendly interface and intuitive features make it easy to get started, whether you're an experienced investor or just starting out."
    }
  ]
  return (
    <Container>
    <div className='grid md:grid-cols-2 grid-cols-1 flex-wrap-reverse gap-3'>
      <div className='md:order-first order-last'>
        <p className='text-[32px] font-normal md:block hidden'>Advance Analytics Made Simple</p>
        <div className='lg:pr-[100px] pr-0'>
          {items.map((item, index) => (
            <BulletPoint key={index} text={item.text} />
          ))}
        </div>

        <div className='lg:mt-20 mt-10 md:block flex justify-center'>
          <DownloadButton />
        </div>
      </div>

      <div className=' flex flex-col items-center'>
      <p className='text-[32px] text-center mb-10 font-normal md:hidden block'>Advance Analytics Made Simple</p>
        <div className='md:w-[80%] w-[40%] llg:w-[60%] xl:w-[40%]'>
          <VideoContainer url={asset} speed={2} loop={true}/>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default Analytics