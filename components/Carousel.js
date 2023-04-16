import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Caraousel = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        playsinline: true,
    };

    const cardInfo = [
        {
            title: "Penny Stocks",
            description: "Our platform highlights the top-performing penny stocks and provides you with real-time data and advanced technical charts, helping you to maximize your profits and stay ahead of the market trends.",
            image: "/c2.png"
        },
        {
            title: "Earning Calendar",
            description: "Our platform highlights the top-performing penny stocks and provides you with real-time data and advanced technical charts, helping you to maximize your profits and stay ahead of the market trends.",
            image: "/c3.png"
        },
    ]

    return (
        <div className="px-7 py-10">
            <Slider {...settings}>
                <div className="md:h-[600px] md:w-[100%] overflow-hidden ">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:h-[600px]">
                        <div className="md:px-20 px-10 flex flex-col justify-center h-[100%] items-center">
                            <h3 className="text-[32px] text-center">Investing Ideas</h3>
                            <p className="text-center mt-[15px] mb-[15px] md:mt-[0px]">Find the right investment for yourself from a wide range of investment styles and helping you make informed decisions</p>
                        </div>
                        <div className="flex justify-center items-center md:h-[100%] w-[100%]">
                            <img src={"/c1.png"} alt="investing-ideas" className="lg:h-[600px] md:h-[400px] h-[100%]" />
                        </div>
                    </div>
                </div>
                {cardInfo.map((card, index) => {
                    return (
                        <Card key={index} title={card.title} description={card.description} asset={card.image} />
                    )
                })}
            </Slider>
        </div>
    )
}

export default Caraousel

const Card = ({title, description, asset}) => {
    return (
        <div className="md:h-[600px] w-[100%] overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1 md:h-[600px]">
                <div className="md:px-20 px-10 flex flex-col justify-center h-[100%] items-center">
                    <h3 className="text-[32px] text-center">{title}</h3>
                    <p className="text-center mt-[15px] mb-[15px] md:mt-[0px]">{description}</p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={asset} alt="investing-ideas" className="lg:h-[600px] md:h-[400px] h-[100%]" />
                </div>
            </div>
        </div>
    )
}