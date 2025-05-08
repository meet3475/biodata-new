import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "aos/dist/aos.css";

const reviews = [
    {
      name: "Yukta Shukla",
      description: "I was looking for an easy and quick way to create and download marriage biodata. My Biodata for Marriage made it incredibly simple! The customizable marriage biodata templates were professional, and I could customize everything."
    },
    {
      name: "Amit Singh",
      description: "I struggled with creating a biodata manually until I found My Biodata for Marriage. It saved me so much time, and the final product looked amazing. I received positive feedback from several families and found my partner in just a few months. Excellent platform!"
    },
    {
      name: "Santosh Mishra",
      description: "This platform made the entire process of creating my biodata so much easier. The Hindu biodata template was exactly what I needed, and I could add all the important details. It was hassle-free and professional, and I am grateful for this marriage biodata maker online."
    },
    {
      name: "Deepal Juyal",
      description: "Nice place with a huge variety of collections, would recommend people who are starting their own business to visit this place and start with the products they offer and this web is easy and quick way to create and download marriage biodata."
    }
  ]
  

const Reviewsection = () => {

  return (
    <div className="bg-[#FFFFFF]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px] ">
      <div className="mb-8">
        <h6 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#1b7261] mb-5 text-center mx-0 md:mx-24 Sail-font">Our goal at My Biodata for Marriage is to assist you in creating the ideal marriage biodata. Hear from some of our happy customers who have successfully used our biodata maker platform to find the right person.</h6>
        <h2 className="text-[20px] sm:text-[32px] lg:text-[48px] text-[#051145] font-bold mb-0 lg:mb-[60px] text-center mx-0 md:mx-24">What Our Happy Users Say About Our Marriage Biodata Format</h2>
      </div>

      <div className='relative'>
        <div className='absolute top-0 left-0 hidden md:block'>
          <Image
            src="/images/quate-left.png"
            alt="quate-left"
            width={80}
            height={80}
            className="W-[100%] h-[100%] object-cover"
          />
        </div>

        <div className='absolute top-0 right-0 hidden md:block'>
          <Image
            src="/images/quate-right.png"
            alt="quate-right"
            width={80}
            height={80}
            className="W-[100%] h-[100%] object-cover"
          />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="reviewsSwiper"
          breakpoints={{
            310: {
              slidesPerView: 1
            },
            540: {
              slidesPerView: 1
            },
            940: {
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 1
            },
            1600: {
              slidesPerView: 1
            }
          }}
        >
          {
            reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="w-full sm:w-[70%] mx-0 sm:mx-[15%] h-[205px] sm:h-[260px] lg:h-[230px] text-center">
                    <div>
                      <div>
                        <div className="flex justify-center items-center ">
                          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB016"></path>
                          </svg>
                          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB016"></path>
                          </svg>
                          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB016"></path>
                          </svg>
                          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB016"></path>
                          </svg>
                          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB016"></path>
                          </svg>
                        </div>

                        <div className="mt-2.5 mb-4 text-center">
                          <p className="text-[#54595f] text-[12px] md:text-[18px] OpenSans-font">{item.description}</p>
                        </div>

                        <div className="text-center" data-aos="fade-up">
                          <h3 className="text-[#051145] text-[18px] md:text-[24px] font-bold">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default Reviewsection