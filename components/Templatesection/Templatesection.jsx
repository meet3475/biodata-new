import React, { useEffect, useRef, useState } from 'react'
import DataLoader from '../Loarder/DataLoader';
import Image from 'next/image';
import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

const design = [
    {
      id: "1",
      image: "/images/biodata-bg-1.jpg"
    },
    {
      id: "2",
      image: "/images/biodata-bg-2.jpg"
    },
    {
      id: "3",
      image: "/images/biodata-bg-3.jpg"
    },
    {
      id: "4",
      image: "/images/biodata-bg-4.jpg"
    },
    {
      id: "5",
      image: "/images/biodata-bg-5.jpg"
    },
    {
      id: "6",
      image: "/images/biodata-bg-6.jpg"
    },
    {
      id: "7",
      image: "/images/biodata-bg-7.jpg"
    },
    {
      id: "8",
      image: "/images/biodata-bg-8.jpg"
    },
    {
      id: "9",
      image: "/images/biodata-bg-9.jpg"
    }
  ]

const Templatesection = ({ scrollToBiodataForm }) => {
    const [designSliderLoading, setDesignSliderLoading] = useState(true);
    useEffect(() => {
        const designTimer = setTimeout(() => setDesignSliderLoading(false), 3000);

        return () => {
            clearTimeout(designTimer);
        };
    }, []);

    return (
        <div className="bg-[#F6F8FF]" data-aos="fade-up">
            <div className="py-[80px]">
                <div className="text-center mb-3">
                    <h2 className="text-[26px] sm:text-[45px] text-[#051145] font-bold mb-5">
                        Popular Marriage Biodata Maker Designs
                    </h2>
                    <h5 className="text-[#1b7261] text-[16px] sm:text-[20px] font-semibold text-center mb-[60px] Sail-font">Select your favourite marriage biodata maker design to get started</h5>
                </div>
                <div>
                    {
                        designSliderLoading ? (
                            <DataLoader />
                        ) : (
                            <Swiper
                                slidesPerView={4.5}
                                spaceBetween={30}
                                className="mySwiper"
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    315: {
                                        slidesPerView: 1
                                    },
                                    545: {
                                        slidesPerView: 1.6
                                    },
                                    630: {
                                        slidesPerView: 1.6
                                    },
                                    740: {
                                        slidesPerView: 2
                                    },
                                    820: {
                                        slidesPerView: 2.1
                                    },
                                    950: {
                                        slidesPerView: 2.5
                                    },
                                    1050: {
                                        slidesPerView: 2.8
                                    },
                                    1200: {
                                        slidesPerView: 3.2
                                    },
                                    1300: {
                                        slidesPerView: 3.3
                                    },
                                    1400: {
                                        slidesPerView: 3.5
                                    },
                                    1500: {
                                        slidesPerView: 3.7
                                    },
                                    1600: {
                                        slidesPerView: 4
                                    },
                                    1750: {
                                        slidesPerView: 4.2
                                    },
                                    1800: {
                                        slidesPerView: 4.5
                                    }
                                }}
                            >
                                {
                                    design.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex justify-center">
                                                <div className="relative pb-[60px] group">
                                                    <div className="w-[325px] sm:w-[380px] xl:w-[400px] h-[550px] relative overflow-hidden">
                                                        <Image
                                                            src={item.image}
                                                            width={500}
                                                            height={1000}
                                                            alt="Marriage Biodata Maker Template"
                                                            className="w-full h-full object-cover"
                                                        />

                                                        {/* Button centered, always visible on mobile, hover visible on desktop */}
                                                        <button
                                                            className={`
                                                            absolute inset-0 flex items-center justify-center
                                                            transition-opacity duration-300 bg-black/40
                                                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                                                            `}
                                                            onClick={() => {
                                                                sessionStorage.setItem('selectedTemplate', item.image);
                                                                const event = new CustomEvent('templateSelected', {
                                                                    detail: { template: item.image }
                                                                });
                                                                window.dispatchEvent(event);
                                                                scrollToBiodataForm();
                                                            }}
                                                        >
                                                            <div className="rr-btn"><span className="OpenSans-font">Select Template</span></div>
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>
                                        </SwiperSlide>

                                    ))
                                }
                            </Swiper>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Templatesection