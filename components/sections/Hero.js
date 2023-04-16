import React, {useState, useEffect} from 'react'
import Container from '../Container'
import VideoContainer from '../VideoContainer'

const Hero = ({countryCode}) => {
  const [asset, setAsset] = useState('')

  useEffect(() => {
    console.log(countryCode)
    if (countryCode === 'IN') {
      setAsset('/India/header.mp4')
    } else {
      setAsset('/Global/header.mp4')
    }
  },[countryCode])

  return (
    <Container>
    <div className='grid md:grid-cols-2 grid-cols-1 mt-5 md:mb-0 mb-10'>
      <div className='md:block flex flex-col items-center'>
        <p className='md:text-[46px] text-[42px] font-semibold md:text-left text-center leading-[50px]'>Financial Markets in Your Pocket </p>
        <p className='mt-5 md:text-left text-center'>Track. Analyze. Make Decision with AI.</p>

        <div className='flex mt-10 mb-10'>
            <a href='https://apps.apple.com/in/app/bottomstreet-markets-today/id1658981920' target={"_blank"} className='mr-5'>
              <img src='/appStoreBlue.png' width={160}/>
            </a>

            <a href='https://play.google.com/store/apps/details?id=com.paprclip.bottomstreet' target={"_blank"}>
              <img src='/playStore.png' width={160}/>
            </a>
          </div>
      </div>


      <div className='mt-[0] h-[100%]'>
        <VideoContainer url={asset} speed={1} loop={false}/>
      </div>
    </div>
    </Container>
  )
}

export default Hero
