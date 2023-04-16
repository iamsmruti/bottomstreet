import React, { useEffect, useState } from 'react'
import BulletPoint from '../BulletPoint'
import DownloadButton from '../DownloadButton'
import VideoContainer from '../VideoContainer'
import Container from '../Container'

const MarketIntelligence = ({countryCode}) => {
  const [asset, setAsset] = useState('US')

  useEffect(() => {
    if (countryCode === 'IN') {
      setAsset('/India/pitstop.mp4')
    } else {
      setAsset('/Global/pitstop.mp4')
    }
  },[countryCode])

  const items = [
    {
      text: "Access the best trading ideas from our vibrant trader community, aggregated under one feed for your convenience."
    },
    {
      text: "We bring financial social media posts from various sources into one single feed, providing you with a comprehensive overview of market trends and sentiments."
    },
    {
      text: "BottomStreet curates impactful tweets from industry experts and thought leaders, providing you with a single feed of hand-picked, insightful information."
    }
  ]
  return (
    <Container>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-0 mt-10 md:mb-0 mb-10'>
      <div className=' flex flex-col items-center'>
        <p className='text-[32px] text-center mb-10 font-normal md:hidden block'>Ultimate Market Intelligence</p>
        <div className='md:w-[80%] w-[40%] llg:w-[60%] xl:w-[40%]'>
          <VideoContainer url={asset} speed={2} loop={true}/>
        </div>
      </div>
      <div className=''>
        <p className='text-[32px] font-normal md:block hidden'>Ultimate Market Intelligence</p>
        <div className='lg:pr-[100px] pr-0'>
          {items.map((item, index) => (
            <BulletPoint key={index} text={item.text} />
          ))}
        </div>

        <div className='lg:mt-20 mt-10 md:block flex justify-center'>
          <DownloadButton />
        </div>
      </div>
    </div>
    </Container>
  )
}

export default MarketIntelligence