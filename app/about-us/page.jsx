"use client"
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Loarder from '@/components/Loarder/Loarder';
import Reviewsection from '@/components/Reviewsection/Reviewsection';

const service = [
    {
        image: '/images/marriageuser.png',
        image_w: '/images/marriageuser-white.png',
        title: 'User-Friendly Interface',
        description: 'Our marriage biodata maker features an intuitive and user-friendly interface, ensuring that you can create a personalized biodata effortlessly.'
    },
    {
        image: '/images/marriageoption.png',
        image_w: '/images/marriageoption-white.png',
        title: 'Customization Options',
        description: 'We understand that every individual is unique. Thats why we offer a wide range of customization options, allowing you to tailor your biodata to reflect your personality and preferences accurately.'
    },
    {
        image: '/images/marriagtemplate.png',
        image_w: '/images/marriagtemplate-white.png',
        title: 'Professional Templates',
        description: 'Choose from a selection of professionally designed templates that strike the perfect balance between aesthetics and information presentation.'
    },
    {
        image: '/images/marragiesecurity.png',
        image_w: '/images/marragiesecurity-white.png',
        title: 'Privacy and Security',
        description: 'Your datas privacy and security are our top priorities. Rest assured that your information is in safe hands, and we adhere to the highest standards of data protection.'
    },
    {
        image: '/images/marriageoption.png',
        image_w: '/images/marriageoption-white.png',
        title: 'Personalize Biodata',
        description: 'Fill in the details that matter to you. Share your hobbies, interests, and aspirations to let your personality shine.'
    },
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
    const [isLoading, setIsLoading] = useState(true);
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

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false // Changed to false to allow repeated animations
        });

        // Refresh AOS when route changes
        return () => {
            AOS.refresh();
        };
    }, []);

    // Add scroll event listener to refresh AOS
    useEffect(() => {
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Simulate loading time (you can remove this in production)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loarder />;
    }
    return (
        <>
            {/* navbar section start */}
            <Navbar />
            {/* navbar section end */}

            {/* First section start */}
            <div className="relative bg-[#F6F8FF] py-[180px]">
                {/* Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[33%] left-[0%] hidden lg:block animate-float-slow">
                        <Image src="/images/flowerleft.png" alt="flowerleft" width={150} height={150} />
                    </div>
                    <div className="absolute top-[20%] left-[72%] hidden lg:block animate-float-medium">
                        <Image src="/images/camera.png" alt="camera" width={60} height={60} />
                    </div>
                    <div className="absolute top-[8%] lg:top-[20%] left-[64%] sm:left-[34%] lg:left-[15%] animate-float-fast">
                        <Image src="/images/heroleft.png" alt="heroleft" width={40} height={40} />
                    </div>
                    <div className="absolute top-[0%] right-[0%] animate-float-xslow">
                        <Image src="/images/heroright.png" alt="heroright" width={220} height={120} />
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='text-center'>
                        <h2 className='text-[#051145] text-[45px] sm:text-[64px]'>About Us</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link href={"/"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium mr-2 OpenSans-font'>Home</Link>
                        <IoIosArrowForward className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium OpenSans-font' />
                        <Link href={"/about-us"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium ml-2 OpenSans-font'>About Us</Link>
                    </div>
                </div>
            </div>
            {/* First section end */}

            {/* about us section start */}
            <div className='bg-[#FFFFFF] py-[90px]' data-aos="fade-up">
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
                                        alt="aboutus"
                                        width={550}
                                        height={600}
                                        className="w-full h-full object-fill"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className='w-full sm:w-[48%] xl:w-[45%]'>
                            <div className='flex flex-col justify-center h-[100%]'>
                                <h5 className='text-[#1B7261] text-[18px] sm:text-[20px] font-bold mb-2.5 Sail-font'>About Us Marriage Biodata Maker</h5>
                                <h3 className='text-[#051145] text-[27px] lg:text-[38px] font-bold mb-4'>We Will Make Your Dream Marriage Biodata</h3>
                                <p className='text-[#54595f] text-[16px] sm:text-[18px] OpenSans-font'>
                                    Welcome to marriagebiodatamaker.com your one-stop solution for crafting the perfect marriage biodata! Finding the right life partner is an exciting journey, and we are here to make it easier for you with our innovative marriage biodata maker.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section end */}

            {/* about us Services section start */}
            <div className='bg-[#FFFFFF] sm:py-[100px]' data-aos="fade-up">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h5 className='text-[#1B7261] text-[18px] sm:text-[20px] font-bold mb-2.5 Sail-font'>Our Marriage Biodata Maker Services</h5>

                    <div className='flex justify-between'>
                        <div className='w-full sm:w-[60%]'>
                            <h3 className='text-[#051145] text-[27px] lg:text-[38px] font-bold mb-8'>
                                We are Providing The Best Digital Make Marriage Biodata Solution
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
                        onInit={(swiper) => {
                            // Override prevEl & nextEl now that refs are defined
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;

                            // Re-init navigation
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
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
                                <div className="group transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:rounded-2xl p-6 sm:p-8 text-left max-w-md mx-auto h-[350px] bg-white">
                                    <div className="relative w-[100px] h-[100px] flex justify-center items-center mb-6 overflow-hidden rounded-full bg-[#1B726114]">
                                        {/* Normal image (visible by default) */}
                                        <Image
                                            src={item.image}
                                            width={100}
                                            height={100}
                                            alt="Marriage Biodata Maker Services"
                                            className="p-4 absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 z-10"
                                        />

                                        {/* Hover image (image_w) */}
                                        <Image
                                            src={item.image_w}
                                            width={100}
                                            height={100}
                                            alt="Marriage Biodata Maker Services white"
                                            className="p-4 absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
                                        />

                                        <div className="absolute inset-0 bg-[#1b7261] rounded-full opacity-0 transition-opacity duration-500 delay-500 group-hover:opacity-100"></div>
                                        <div className="absolute w-0 h-0 bg-[#1b7261] rounded-full transition-all duration-500 group-hover:w-[200px] group-hover:h-[200px] group-hover:-top-10 group-hover:-left-10"></div>
                                    </div>

                                    <div>
                                        <h3 className="text-[#1b7261] font-bold text-[20px]">{item.title}</h3>
                                        <p className="text-[#54595F] text-[14px] OpenSans-font">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* about us Services section end */}

            {/* about us problem section start */}
            <div className='bg-[#FFFFFF] sm:py-[100px]' data-aos="fade-up">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h6 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#1b7261] mb-5 text-center mx-0 md:mx-24 Sail-font">Many cultures have arranged marriages. A marriage biodata is a quick and clear way to introduce yourself to potential partners and their families. A good online biodata can help you make a strong first impression and increase your chances of finding a suitable match.</h6>
                        <h2 className="text-[20px] sm:text-[32px] lg:text-[48px] text-[#051145] font-bold mb-0 lg:mb-[60px] text-center mx-0 md:mx-24">What is Marriage Biodata?</h2>
                    </div>

                    <div className='flex flex-col-reverse sm:flex-row justify-between '>

                        <div className='w-full sm:w-[48%] xl:w-[50%]'>
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
                                                    <p className="text-[#1b7261] text-[14px] sm:text-[16px] mt-2 OpenSans-font">
                                                        {item.description}
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full sm:w-[48%] xl:w-[50%] mb-10 sm:mb-0'>
                            <div className="relative animate-fade-in delay-400">
                                <div className="flex justify-center lg:justify-end">
                                    <div className='w-[500px] h-[420px] sm:h-[600px]'>
                                        <Image src="/images/aboutproblem.png" alt="aboutproblem" width={500} height={400} className="rounded-xl w-[100%] h-[100%] object-fill" />
                                    </div>
                                </div>
                                <Image
                                    src="/images/banner-sm.jpg"
                                    alt="small banner"
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
            <div data-aos="fade-up">
                <Reviewsection />
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