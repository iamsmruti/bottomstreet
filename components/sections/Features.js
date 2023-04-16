import React from 'react'
import Container from '../Container'
import FeatureCard from '../FeatureCard'
import Title from '../Title'

const Features = () => {
  const features = [
    {
      icon: '/1.png',
      title: 'Real-time Data',
      description: 'Get instant access to live quotes and charts for 100,000+ financial instruments traded globally'
    },
    {
      icon: '/2.png',
      title: 'Easy Analytics',
      description: 'Our platform simplifies stock tracking and analysis, enabling you to make informed investment decisions easily.'
    },
    {
      icon: '/3.png',
      title: 'Personalised Watchlist',
      description: 'With our platform, you can effortlessly keep tabs on your preferred stocks by adding them to your watchlist.'
    },
    {
      icon: '/4.png',
      title: 'Global News',
      description: "Make smart investing decisions with our platform's breaking financial news, real-time updates around the globe"
    }
  ]
  return (
    <Container>
      <div>
        <Title title="Super App For Investors And Traders" />
      </div>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-col-1 gap-3 mt-[80px]'>
        {features.map((item, index) => (
          <div key={index}>
            <FeatureCard icon={item.icon} title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Features