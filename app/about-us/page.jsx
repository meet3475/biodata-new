import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const AboutUs = () => {
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
                        <Link href={"/"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium mr-2'>Home</Link>
                        <IoIosArrowForward className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium' />
                        <Link href={"/about-us"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium ml-2'>About Us</Link>
                    </div>
                </div>
            </div>
            {/* First section end */}

            {/* about us section start */}
            <div className='bg-[#FFFFFF] py-[90px]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='w-full sm:w-[45%]'>
                            <div className="relative group w-[310px] h-[391px] lg:w-[590px] lg:h-[650px]">

                                {/* Rotated border - visible only from md and above */}
                                <div className="hidden lg:block absolute top-[0%] w-full h-full border-[20px] border-[#1B7261] rotate-[-14deg] transition-all duration-500 ease-in-out group-hover:rotate-0 z-0"></div>

                                {/* Image with after hover effect - active only md and up */}
                                <div className="relative w-full h-full border-[30px] border-[#1B7261] overflow-hidden 
                                                after:content-[''] after:absolute after:top-0 after:bottom-0 
                                                after:left-1/2 after:right-1/2 after:opacity-0 after:pointer-events-none 
                                                after:transition-all after:duration-500
                                                md:after:bg-white/30 md:group-hover:after:left-0 md:group-hover:after:right-0 md:group-hover:after:opacity-100"
                                >

                                    <Image
                                        src="/images/banner-main.jpg"
                                        alt="main"
                                        width={550}
                                        height={600}
                                        className="w-full h-full object-fill"
                                    />
                                </div>

                            </div>
                        </div>


                        <div className='w-full sm:w-[45%]'>
                            <div className='flex flex-col justify-center h-[100%]'>
                                <h5 className='text-[#1B7261] text-[20px] font-bold mb-2.5'>About Us Wedding Biodata</h5>
                                <h3 className='text-[#051145] text-[38px] font-bold mb-4'>We Will Make Your Dream Wedding Biodata A Reality</h3>
                                <p className='text-[#54595f] text-[18px]'>
                                    Welcome to weddingbiodata.com your one-stop solution for crafting the perfect marriage biodata! Finding the right life partner is an exciting journey, and we are here to make it easier for you with our innovative marriage biodata maker.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us section end */}

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