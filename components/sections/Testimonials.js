import React from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { RiStarSLine } from 'react-icons/ri'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = ({countryCode}) => {


  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    easing: 'linear',
  };

  const settings2 = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    easing: 'linear',
  };

  const settings3 = {
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    easing: 'linear',
  };

  const reviewsListIndia = [
    {
      name: 'Souhardya',
      description: 'This is a brilliant app with great potential. The thing I love the most is the minimal UI with great features and obviously the instagram feed. But two features I would love to have are 1. A section for news only dedicated to my watchlist. 2. In the instagram posts if there are multiple images in a single post then you cant see all the pictures.',
      role: 'investor'
    },
    {
      name: 'Shiv Bose',
      description: 'JUST DOWNLOADED 2.0 Its is working smoothly now, Some new features added with simplified interface makes it a super app for stock traders. News section is also good.',
      role: 'investor'
    },
    {
      name: 'Akshay Lakra',
      description: "I was looking for an app which brings everything all at one place and Bottomstreet does it seemlessly. I love the concept and the UI which everyone is talking about. It's very minimal and easy to use. Great app.",
      role: 'trader'
    },
    {
      name: 'Jitender Saluja',
      description: "Let's get it started from beginning. From snapshots and after downloading the app, I experienced a premium user interface. When u register yourself, a quote pop ups that is a must read... Coz it's a great advisory to the investors.",
      role: 'investor'
    },
    {
      name: 'Dishant Lohia',
      description: 'One the best app available in market. UI is very clean as well as smooth. Amazing for people who like to manage their finances without any hassles. Highly recommended 👍👍 Kudos to the team!!',
      role: 'trader'
    },
    {
      name: 'Tanya Gupta',
      description: "The interface is really user friendly. This app touches so many areas of finance that I feel it's a complete package in itself. It's a one stop solution for people who need news and figures on ETFs, bonds, IPOs etc., not just stocks.",
      role: 'investor'
    },
    {
      name: 'Aditya Gohar',
      description: "I can't believe that you guys provide everything, even options chain and stock screener in one app. I used the radar feature and easily did most of the required stocks research and booked a decent profit within an hour.",
      role: 'trader'
    },
    {
      name: 'Prabal Kapoor',
      description: "I can't express how great this app has been .. I am using this for 6 months now ... This app is absolutely power house for all your market needs, it has all the financial assets available for research and analysis there are more than 20+ parameter for the research work , news and update section is just another cherry on top.",
      role: 'investor'
    },
    {
      name: 'Prabhjot Singh',
      description: "I spend hours on stock and indices as a trader. Have to keep up with market trends also. Pitstop is epic, i spend hours scrolling the content. I really enjoy finance memes and charts which are visual. They offer quick information in easiest manner. I can't use excel n all to do stocks. I would recommend this app to all.",
      role: 'trader'
    },
    {
      name: 'Vivekananda N',
      description: "Wow the team who designed it must be given all credits!!! The black layout which is intuitive and very useful!!! Definitely I will recommend this app to my friends!!",
      role: 'investor'
    },
    {
      name: 'Ravneetkaur Bhatia',
      description: "Exceptional performance of app. Peers are no comparison of this fast and super functional app. Deleting all other finance info apps. Don't need anything else after using pitstop and research here. I was clueless about market research and wasted my time on useless tutorials. This is so simple to use and fun",
      role: 'trader'
    },
    {
      name: 'Mukul',
      description: "Neat and clean user interface and user experience. The dark interface make it really elegant. No advertisement in this app. This is best app in the market and I really love it. Just for it.",
      role: 'investor'
    },
    {
      name: 'Gurdeep Kaur',
      description: "Woooooww what a UI and all these features. I can't get over this app. Spending more time on it than Instagram 😂. If anyone wants to enjoy and learn finance at the same time, no other app to look at guys.",
      role: 'trader'
    },
    {
      name: 'Yashika Jain',
      description: "One-stop shop solution for all the financial admirers. Radar feature made it smoother to conduct stock research and book profits. Well built comprehensive and decent app with smooth interface. 👍👍",
      role: 'trader'
    },
    {
      name: 'Vaibhav Khurana',
      description: "Amazing app! It has very clean UI and have literally all the information that you need. Must download if you are an investor. Kudos to the team who developed this app!",
      role: 'investor'
    }
  ]

  const reviewsListUS = [
    {
      name: 'Luis Spencer',
      description: 'This is a brilliant app with great potential. The thing I love the most is the minimal UI with great features and obviously the instagram feed. But two features I would love to have are 1. A section for news only dedicated to my watchlist. 2. In the instagram posts if there are multiple images in a single post then you cant see all the pictures.',
      role: 'investor'
    },
    {
      name: 'David Williams',
      description: 'JUST DOWNLOADED 2.0 Its is working smoothly now, Some new features added with simplified interface makes it a super app for stock traders. News section is also good.',
      role: 'investor'
    },
    {
      name: 'Amanda Harrington',
      description: "I was looking for an app which brings everything all at one place and Bottomstreet does it seemlessly. I love the concept and the UI which everyone is talking about. It's very minimal and easy to use. Great app.",
      role: 'trader'
    },
    {
      name: 'Robert Gordon',
      description: "Let's get it started from beginning. From snapshots and after downloading the app, I experienced a premium user interface. When u register yourself, a quote pop ups that is a must read... Coz it's a great advisory to the investors.",
      role: 'investor'
    },
    {
      name: 'Shelia Vazquez',
      description: 'One the best app available in market. UI is very clean as well as smooth. Amazing for people who like to manage their finances without any hassles. Highly recommended 👍👍 Kudos to the team!!',
      role: 'trader'
    },
    {
      name: 'Anthony Garcia',
      description: "The interface is really user friendly. This app touches so many areas of finance that I feel it's a complete package in itself. It's a one stop solution for people who need news and figures on ETFs, bonds, IPOs etc., not just stocks.",
      role: 'investor'
    },
    {
      name: 'Patricia Davis',
      description: "I can't believe that you guys provide everything, even options chain and stock screener in one app. I used the radar feature and easily did most of the required stocks research and booked a decent profit within an hour.",
      role: 'trader'
    },
    {
      name: 'Robert White',
      description: "I can't express how great this app has been .. I am using this for 6 months now ... This app is absolutely power house for all your market needs, it has all the financial assets available for research and analysis there are more than 20+ parameter for the research work , news and update section is just another cherry on top.",
      role: 'investor'
    },
    {
      name: 'Amy Potter',
      description: "I spend hours on stock and indices as a trader. Have to keep up with market trends also. Pitstop is epic, i spend hours scrolling the content. I really enjoy finance memes and charts which are visual. They offer quick information in easiest manner. I can't use excel n all to do stocks. I would recommend this app to all.",
      role: 'trader'
    },
    {
      name: 'Kenneth Wright',
      description: "Wow the team who designed it must be given all credits!!! The black layout which is intuitive and very useful!!! Definitely I will recommend this app to my friends!!",
      role: 'investor'
    },
    {
      name: 'Francisco Warren',
      description: "Exceptional performance of app. Peers are no comparison of this fast and super functional app. Deleting all other finance info apps. Don't need anything else after using pitstop and research here. I was clueless about market research and wasted my time on useless tutorials. This is so simple to use and fun",
      role: 'trader'
    },
    {
      name: 'Laurie Coleman',
      description: "Neat and clean user interface and user experience. The dark interface make it really elegant. No advertisement in this app. This is best app in the market and I really love it. Just for it.",
      role: 'investor'
    },
    {
      name: 'Lynn Rogers',
      description: "Woooooww what a UI and all these features. I can't get over this app. Spending more time on it than Instagram 😂. If anyone wants to enjoy and learn finance at the same time, no other app to look at guys.",
      role: 'trader'
    },
    {
      name: 'Miranda Smith',
      description: "One-stop shop solution for all the financial admirers. Radar feature made it smoother to conduct stock research and book profits. Well built comprehensive and decent app with smooth interface. 👍👍",
      role: 'trader'
    },
    {
      name: 'Jeffrey Harris',
      description: "Amazing app! It has very clean UI and have literally all the information that you need. Must download if you are an investor. Kudos to the team who developed this app!",
      role: 'investor'
    }
  ]

  return (
    <div className='md:px-[0] md:py-0 px-[0px] py-[10px]'>
    <div className='bg-[#f5f5f5] flex flex-col items-center py-10'>
      <p className='md:text-3xl text-xl font-[500] '>Over 1,00,000+ people joined us</p>
      <p className='text-sm mt-4 text-gray-500 text-center'>"Our users are raving - come see what all the fuss is about!"</p>
      
      <div className='w-[100%] lg:block hidden'>
        <Slider {...settings} className='mt-10 mb-5 md:mx-[100px]'>
          {countryCode === "IN" ? reviewsListIndia.map((item, index) => (
            <Cards key={index} data={item}/>
          )) : reviewsListUS.map((item, index) => (
            <Cards key={index} data={item}/>
          ))}
        </Slider>
      </div>

      <div className='w-[100%] block lg:hidden md:hidden'>
        <Slider {...settings2} className='mt-10 mb-5 md:mx-[200px] ml-[10px]'>
          {countryCode == "IN" && reviewsListIndia.map((item, index) => (
            <Cards key={index} data={item}/>
          ))}

          {countryCode != "IN" && reviewsListUS.map((item, index) => (
            <Cards key={index} data={item}/>
          ))}
        </Slider>
      </div>

      <div className='w-[100%] md:block lg:hidden hidden'>
        <Slider {...settings3} className='mt-10 mb-5 mx-[50px] ml-[20px]'>
          {countryCode == "IN" && reviewsListIndia.map((item, index) => (
            <Cards key={index} data={item}/>
          ))}

          {countryCode != "IN" && reviewsListUS.map((item, index) => (
            <Cards key={index} data={item}/>
          ))}
        </Slider>
      </div>
    </div >
    </div>
  )
}

export default Testimonials


const Cards = ({data}) => {
  return (
    <div className='p-4 rounded-lg relative z-10 bg-white shadow-md flex flex-col mt-5 justify-start min-h-[280px] mr-[15px]'>
      {/* <div>
        <img className='h-10 w-10 rounded-full shrink-0' src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" alt="" />
      </div> */}

      <div className='mb-3'>
        <StarRating number={5} />
      </div>

      <p className='text-sm text-gray-600'>{data.description}</p>

      <div className='mt-auto'>
        <p className='font-[400] capitalize'>{data.name}</p>
        <p className='text-xs mt-2 capitalize'>{data.role}</p>
      </div>
    </div>
  )

}

const StarRating = ({
  number
}) => {
  let stars = [1, 2, 3, 4, 5]
  return (
    <div className='flex gap-3'>
      {
        stars.splice(0, number).map((star, index) => {
          return <IoStarSharp size={20} key={index} className='text-yellow-400' />
        })
      }
      {
        stars.map((star, index) => {
          return <RiStarSLine size={20} key={index} className='text-yellow-400' />
        })
      }
    </div>
  )

}
