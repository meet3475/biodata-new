"use client"
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const service = [
    {
        image: '/images/service1.png',
        image_w: '/images/service-white1.png',
        title: 'A Personal Snapshot',
        description: 'Your marriage biodata format showcases a snapshot of your life, encapsulating your morals, education, career, and family values.'
    },
    {
        image: '/images/service2.png',
        image_w: '/images/service-white2.png',
        title: 'Cultural Relevance',
        description: 'In cultures where arranged marriages are prevalent, matrimonial biodata holds immense significance.'
    },
    {
        image: '/images/service3.png',
        image_w: '/images/service-white3.png',
        title: 'Wide Range Choice',
        description: 'Whether you choose a simple shadi biodata format or an elaborate marriage biodata design.'
    },
    {
        image: '/images/service4.png',
        image_w: '/images/service-white4.png',
        title: 'Time-Saving Tool',
        description: 'Our free online biodata maker for marriage streamlines the process of creating a marriage profile.'
    },
    {
        image: '/images/service2.png',
        image_w: '/images/service-white2.png',
        title: 'Accessibility',
        description: 'Our free biodata maker offers a variety of templates to suit your needs.'
    }
]

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

const problem = [
    {
        title: '1. A Personal Snapshot',
        description: 'Your marriage biodata format showcases a snapshot of your life, encapsulating your morals, education, career, and family values. It is the marriage resume that speaks volumes before the first hello.'
    },
    {
        title: '2. Cultural Relevance',
        description: 'In cultures where arranged marriages are prevalent, matrimonial biodata holds immense significance. The biodata for marriage proposal contains details that reflect ones social and cultural background, which is essential for traditional matchmaking.'
    },
    {
        title: '3. Matchmaking Made Easy',
        description: 'With our online biodata maker for marriage, creating a matrimonial profile is hassle-free. The bio data for marriage format is designed to cover all aspects that are important for finding the right match.'
    },
    {
        title: '4. Time-Saving Tool',
        description: 'Our free online biodata maker for marriage streamlines the process of creating a marriage profile. It is a time-efficient way to prepare biodata for marriage without compromising on the quality or details.'
    },
    {
        title: '5. Wide Range of Choices',
        description: 'Whether you choose a simple shadi biodata format or an elaborate marriage biodata design, our free biodata maker offers a variety of templates to suit your needs.'
    },
    {
        title: '6. Accessibility',
        description: 'Whether you choose a simple shadi biodata format or an elaborate marriage biodata design, our free biodata maker offers a variety of templates to suit your needs.'
    },
    {
        title: '7. First Step to a Lifelong Journey',
        description: 'Whether you choose a simple shadi biodata format or an elaborate marriage biodata design, our free biodata maker offers a variety of templates to suit your needs.'
    }

]


const AboutUs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        // Workaround for navigation button issue
        if (prevRef.current && nextRef.current) {
            // This ensures Swiper detects the navigation elements
        }
    }, []);

    const toggleIndex = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            {/* navbar section start */}
            <Navbar />
            {/* navbar section end */}

            {/* First section start */}
            <div className="relative bg-[#F6F8FF] py-[180px]" data-aos="fade-up">
                {/* Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[33%] left-[0%] hidden lg:block animate-float-slow">
                        <Image src="/images/shap1.png" alt="shape1" width={150} height={150} />
                    </div>
                    <div className="absolute top-[20%] left-[72%] animate-float-medium">
                        <Image src="/images/camera.png" alt="camera" width={60} height={60} />
                    </div>
                    <div className="absolute top-[8%] lg:top-[20%] left-[64%] sm:left-[34%] lg:left-[15%] animate-float-fast">
                        <Image src="/images/shape3.png" alt="shape3" width={40} height={40} />
                    </div>
                    <div className="absolute top-[0%] right-[0%] animate-float-xslow">
                        <Image src="/images/shape4.png" alt="shape4" width={220} height={120} />
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='text-center'>
                        <h2 className='text-[#051145] text-[64px]'>About Us</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link href={"/"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium mr-2 Montserrat-font'>Home</Link>
                        <IoIosArrowForward className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium Montserrat-font' />
                        <Link href={"/about-us"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium ml-2 Montserrat-font'>About Us</Link>
                    </div>
                </div>
            </div>
            {/* First section end */}

            {/* about us section start */}
            <div className='bg-[#FFFFFF] py-[90px]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col sm:flex-row justify-center sm:justify-between'>
                        <div className='w-full sm:w-[48%] xl:w-[45%] mb-10 sm:mb-0'>
                            <div className="relative group w-full sm:w-[310px] h-[391px] lg:w-[450px] lg:h-[560px] xl:w-[590px] xl:h-[650px]">

                                {/* Rotated border - visible only from md and above */}
                                <div className="hidden xl:block absolute top-[0%] w-full h-full border-[20px] border-[#1B7261] rotate-[-14deg] transition-all duration-500 ease-in-out group-hover:rotate-0 z-0"></div>

                                {/* Image with after hover effect - active only md and up */}
                                <div className="relative w-full h-full border-[30px] border-[#1B7261] overflow-hidden 
                                                after:content-[''] after:absolute after:top-0 after:bottom-0 
                                                after:left-1/2 after:right-1/2 after:opacity-0 after:pointer-events-none 
                                                after:transition-all after:duration-500
                                                md:after:bg-white/30 md:group-hover:after:left-0 md:group-hover:after:right-0 md:group-hover:after:opacity-100"
                                >

                                    <Image
                                        src="/images/aboutus.png"
                                        alt="main"
                                        width={550}
                                        height={600}
                                        className="w-full h-full object-fill"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className='w-full sm:w-[48%] xl:w-[45%]'>
                            <div className='flex flex-col justify-center h-[100%]'>
                                <h5 className='text-[#1B7261] text-[18px] sm:text-[20px] font-bold mb-2.5'>About Us Wedding Biodata</h5>
                                <h3 className='text-[#051145] text-[27px] lg:text-[38px] font-bold mb-4'>We Will Make Your Dream Wedding Biodata</h3>
                                <p className='text-[#54595f] text-[16px] sm:text-[18px] Montserrat-font'>
                                    Welcome to weddingbiodata.com your one-stop solution for crafting the perfect marriage biodata! Finding the right life partner is an exciting journey, and we are here to make it easier for you with our innovative marriage biodata maker.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section end */}

            {/* about us Services section start */}
            <div className='bg-[#FFFFFF] sm:py-[100px]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h5 className='text-[#1B7261] text-[18px] sm:text-[20px] font-bold mb-2.5'>Our Services</h5>

                    <div className='flex justify-between'>
                        <div className='w-full sm:w-[60%]'>
                            <h3 className='text-[#051145] text-[27px] lg:text-[38px] font-bold mb-8'>
                                We are Providing The Best Digital Make Biodata Solution
                            </h3>
                        </div>

                        <div className="hidden sm:flex justify-end gap-4 mb-6">
                            <button ref={prevRef} className="w-[50px] px-2.5 h-[50px] text-[25px] border border-[#0511451A]  text-[gray] hover:text-[#FFFF] hover:bg-[#1B7261]">
                                <IoIosArrowBack />
                            </button>
                            <button ref={nextRef} className="w-[50px] px-2.5 h-[50px] text-[25px] border border-[#0511451A] text-[gray] hover:text-[#FFFF] hover:bg-[#1B7261]">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            // This is important to re-assign the navigation elements
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                        breakpoints={{
                            310: { slidesPerView: 1 },
                            540: { slidesPerView: 1 },
                            766: { slidesPerView: 2 },
                            940: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1600: { slidesPerView: 4 },
                        }}
                    >
                        {service.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:rounded-2xl p-6 sm:p-8 text-left max-w-md mx-auto h-[320px] bg-white">
                                    <div className="relative w-[100px] h-[100px] flex justify-center items-center mb-6 overflow-hidden rounded-full bg-[#1B726114]">
                                        {/* Normal image (visible by default) */}
                                        <Image
                                            src={item.image}
                                            width={100}
                                            height={100}
                                            alt="service"
                                            className="p-4 absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 z-10"
                                        />

                                        {/* Hover image (image_w) */}
                                        <Image
                                            src={item.image_w}
                                            width={100}
                                            height={100}
                                            alt="service white"
                                            className="p-4 absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
                                        />

                                        <div className="absolute inset-0 bg-[#1b7261] rounded-full opacity-0 transition-opacity duration-500 delay-500 group-hover:opacity-100"></div>
                                        <div className="absolute w-0 h-0 bg-[#1b7261] rounded-full transition-all duration-500 group-hover:w-[200px] group-hover:h-[200px] group-hover:-top-10 group-hover:-left-10"></div>
                                    </div>

                                    <div>
                                        <h3 className="text-[#1b7261] font-bold text-[20px]">{item.title}</h3>
                                        <p className="text-[#54595F] text-[16px] Montserrat-font">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* about us Services section end */}

            {/* about us problem section start */}
            <div className='bg-[#FFFFFF] sm:py-[100px]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="mb-8">
                        <h2 className="text-[20px] sm:text-[32px] lg:text-[48px] text-[#051145] font-bold mb-5 text-center mx-0 md:mx-24">What is Marriage Biodata?</h2>
                        <h6 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#1b7261] mb-0 lg:mb-[60px] text-center mx-0 md:mx-24">Many cultures have arranged marriages. A marriage biodata is a quick and clear way to introduce yourself to potential partners and their families. A good online biodata can help you make a strong first impression and increase your chances of finding a suitable match.</h6>
                    </div>

                    <div className='flex flex-col-reverse sm:flex-row justify-between'>

                        <div className='w-full sm:w-[48%] lg:w-[50%]'>
                            {
                                problem.map((item, index) => (
                                    <div key={index} data-aos="fade-up" className="mb-4 cursor-pointer" onClick={() => toggleIndex(index)}>
                                        <div className="bg-[white] border border-[#1b7261] shadow-xl rounded-xl p-4 transition-all duration-300 ease-in-out">
                                            <h4 className="text-[#051145] text-[16px] sm:text-[20px] font-semibold mt-2 flex justify-between items-center">
                                                {item.title}
                                                <span>{openIndex === index ? '-' : '+'}</span>
                                            </h4>
                                            {
                                                openIndex === index && (
                                                    <p className="text-[#1b7261] text-[14px] sm:text-[16px] mt-2 Montserrat-font">
                                                        {item.description}
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full sm:w-[48%] lg:w-[50%]'>
                            <div className="relative animate-fade-in delay-400">
                                <div className="flex justify-center lg:justify-end">
                                    <div className='w-[500px] h-[600px]'>
                                        <Image src="/images/banner-md.jpg" alt="banner" width={500} height={400} className="rounded-xl w-[100%] h-[100%] object-fill" />
                                    </div>
                                </div>
                                <Image
                                    src="/images/banner-sm.jpg"
                                    alt="small thumb"
                                    width={200}
                                    height={200}
                                    className="absolute top-[10%] right-[-20%] xl:right-[-5%] xl:top-[48%] 2xl:right-[-20%] 2xl:top-[10%] hidden xl:block animate-float-fast"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us Services section end */}

            {/* reviews section start */}
            <div className="bg-[#FFFFFF] py-[80px] ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h2 className="text-[20px] sm:text-[32px] lg:text-[48px] text-[#051145] font-bold mb-5 text-center mx-0 md:mx-24">What Our Happy Users Say About Our Marriage Biodata Format</h2>
                        <h6 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#1b7261] mb-0 lg:mb-[60px] text-center mx-0 md:mx-24">Our goal at My Biodata for Marriage is to assist you in creating the ideal marriage biodata. Hear from some of our happy customers who have successfully used our biodata maker platform to find the right person.</h6>
                    </div>

                    <div className='relative'>
                        <div className='absolute top-0 left-0 hidden md:block'>
                            <Image
                                src="/images/quate.png"
                                alt="profile"
                                width={80}
                                height={80}
                                className="W-[100%] h-[100%] object-cover"
                            />
                        </div>

                        <div className='absolute top-0 right-0 hidden md:block'>
                            <Image
                                src="/images/quate-2.png"
                                alt="profile"
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
                                        <div className="w-full sm:w-[70%] mx-0 sm:mx-[15%] h-[240px] text-center">
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
                                                            <p className="text-[#54595f] text-[12px] md:text-[18px] Montserrat-font">{item.description}</p>
                                                        </div>

                                                        <div className="text-center">
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
            {/* reviews section end */}

            {/* ScrollbartoTop start */}
            <ScrollToTop />
            {/* ScrollbartoTop end */}

            {/* Footer section start */}
            <Footer />
            {/* Footer section end */}
        </>
    )
}

export default AboutUs