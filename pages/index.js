import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Analytics from '../components/sections/Analytics'
import Crypto from '../components/sections/Crypto'
import CTA from '../components/sections/CTA'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import Ideas from '../components/sections/Ideas'
import MarketIntelligence from '../components/sections/MarketIntelligence'
import Testimonials from '../components/sections/Testimonials'

const Home = () => {
  const [countryCode, setCountryCode] = useState('')

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.NEXT_PUBLIC_GEO_APIKEY}`)
      const data = await res.json()
      // setCountryCode(data?.location.country)
    }

    getCountry()
  })

  return (
    <>
    <div>
      <Hero countryCode={countryCode}/>
      <Features />
      <Analytics countryCode={countryCode}/>
      <MarketIntelligence countryCode={countryCode}/>  
      <Crypto />
      <Testimonials countryCode={countryCode}/>
      <Ideas />
      <CTA />
    </div>
    </>
  )
}

export default Home