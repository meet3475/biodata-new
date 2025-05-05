"use client"
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        number: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // You can add your form submission logic here
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
                        <h2 className='text-[#051145] text-[64px]'>Contact Us</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link href={"/"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium mr-2 Montserrat-font'>Home</Link>
                        <IoIosArrowForward className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium Montserrat-font' />
                        <Link href={"/contact-us"} className='text-[#54595F] text-[18px] hover:text-[#1B7261] font-medium ml-2 Montserrat-font'>Contact Us</Link>
                    </div>
                </div>
            </div>
            {/* First section end */}

            {/* contact us section start */}
            <div className='bg-[#FFFFF] py-[80px]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                        <div className='w-full sm:w-[38%]'>
                            <h3 className="text-[20px] sm:text-[32px] lg:text-[38px] text-[#051145] font-bold mb-2">Lets get in touch with us</h3>
                            <h6 className="text-[12px] sm:text-[16px] lg:text-[16px] text-[#54595F] Montserrat-font mb-4">You can also reach out to us by phone or email are many variations</h6>

                            <div className="flex flex-col">
                                <div className='flex mb-7'>
                                    <div className='w-[60px] h-[60px] bg-[#E8F1EF] rounded-full p-5'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M13.388 4.82261C14.3232 5.00472 15.1827 5.46123 15.8565 6.1337C16.5302 6.80617 16.9876 7.66402 17.1701 8.59743M13.388 1C15.331 1.21544 17.1429 2.08388 18.5261 3.46272C19.9093 4.84157 20.7817 6.64887 21 8.58788M20.0425 16.214V19.0809C20.0436 19.3471 19.989 19.6105 19.8821 19.8544C19.7753 20.0983 19.6186 20.3172 19.4221 20.4971C19.2256 20.677 18.9937 20.814 18.7411 20.8993C18.4885 20.9845 18.2208 21.0162 17.9552 20.9922C15.0089 20.6727 12.1787 19.6678 9.69213 18.0584C7.37869 16.5911 5.4173 14.6335 3.94724 12.3245C2.32908 9.83138 1.32206 6.99289 1.00777 4.03897C0.983845 3.7747 1.01531 3.50836 1.10017 3.25689C1.18503 3.00543 1.32141 2.77435 1.50065 2.57838C1.67989 2.3824 1.89804 2.22582 2.14123 2.11861C2.38442 2.0114 2.64731 1.9559 2.91316 1.95565H5.78561C6.25028 1.95109 6.70076 2.11532 7.05309 2.41774C7.40541 2.72016 7.63554 3.14013 7.70057 3.59937C7.82181 4.51686 8.04665 5.41772 8.37081 6.28476C8.49963 6.62681 8.52751 6.99855 8.45115 7.35593C8.37478 7.71331 8.19737 8.04135 7.93994 8.30118L6.72394 9.51486C8.08697 11.9074 10.0717 13.8883 12.4688 15.2488L13.6848 14.0351C13.9452 13.7782 14.2738 13.6011 14.6319 13.5249C14.99 13.4486 15.3624 13.4765 15.7051 13.6051C16.5738 13.9286 17.4764 14.153 18.3956 14.274C18.8608 14.3395 19.2855 14.5733 19.5892 14.931C19.8928 15.2887 20.0542 15.7453 20.0425 16.214Z" stroke="#1B7262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>

                                    <div className='flex flex-col items-center justify-center ml-5'>
                                        <p className='Montserrat-font text-[#54595F] ml-1 text-[14px]'>Phone Number</p>
                                        <h6 className='Montserrat-font text-[#051145] hover:text-[#1B7261] text-[16px]'>(+62)182901758</h6>
                                    </div>

                                </div>

                                <div className='flex mb-7'>
                                    <div className='w-[60px] h-[60px] bg-[#E8F1EF] rounded-full p-5'>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 1H19C20.1 1 21 1.91406 21 3.03125V15.2188C21 16.3359 20.1 17.25 19 17.25H3C1.9 17.25 1 16.3359 1 15.2188V3.03125C1 1.91406 1.9 1 3 1Z" stroke="#1B7262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M21 3.03125L11 10.1406L1 3.03125" stroke="#1B7262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>

                                    <div className='flex flex-col  justify-center ml-5'>
                                        <p className='Montserrat-font text-[#54595F] ml-1 text-[14px]'>Email</p>
                                        <h6 className='Montserrat-font text-[#051145] hover:text-[#1B7261] text-[16px]'>rrdevs@support.com</h6>
                                    </div>

                                </div>

                                <div className='flex mb-7'>
                                    <div className='w-[60px] h-[60px] bg-[#E8F1EF] rounded-full p-5'>
                                        <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 11.2273C21 19.1818 11 26 11 26C11 26 1 19.1818 1 11.2273C1 8.51483 2.05357 5.91348 3.92893 3.9955C5.8043 2.07751 8.34784 1 11 1C13.6522 1 16.1957 2.07751 18.0711 3.9955C19.9464 5.91348 21 8.51483 21 11.2273Z" stroke="#1B7262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M10.9974 14.6365C12.8383 14.6365 14.3307 13.1102 14.3307 11.2275C14.3307 9.34466 12.8383 7.81836 10.9974 7.81836C9.15645 7.81836 7.66406 9.34466 7.66406 11.2275C7.66406 13.1102 9.15645 14.6365 10.9974 14.6365Z" stroke="#1B7262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>

                                    <div className='flex flex-col items-center justify-center ml-5'>
                                        <h6 className='Montserrat-font text-[#051145] hover:text-[#1B7261] text-[16px]'>Main Raod, Surat 39608</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full sm:w-[58%] bg-[#F5F5F5] p-8'>
                            <h3 className='text-[#051145] font-bold text-[32px] mb-2 mt-8'>Send a message</h3>
                            <h6 className="text-[12px] sm:text-[16px] lg:text-[16px] text-[#54595F] Montserrat-font mb-10 w-[50%]">You can also reach out to us by phone or email are many variations</h6>
                            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full sm:w-1/2">
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full bg-[#FFFF] px-4 py-3 border border-gray-300  focus:outline-none focus:ring focus:ring-[#1B7261] Montserrat-font"
                                            placeholder='Name'
                                            required
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full bg-[#FFFF] px-4 py-3 border border-gray-300  focus:outline-none focus:ring focus:ring-[#1B7261] Montserrat-font"
                                            placeholder='Email'
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full sm:w-1/2">
                                        <input
                                            type="number"
                                            id="number"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleChange}
                                            className="w-full bg-[#FFFF] px-4 py-3 border border-gray-300  focus:outline-none focus:ring focus:ring-[#1B7261] Montserrat-font"
                                            placeholder='Phone'
                                            required
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-[#FFFF] px-4 py-3 border border-gray-300  focus:outline-none focus:ring focus:ring-[#1B7261] Montserrat-font"
                                            placeholder='Subject'
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-[#FFFF] px-4 py-3 border border-gray-300  focus:outline-none focus:ring focus:ring-[#1B7261] Montserrat-font"
                                        placeholder='Massage'
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button className="rr-btn"
                                        type="submit"
                                    >
                                        <span className='Montserrat-font'>Submit</span>
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
            {/* contact us section end */}

            {/* ScrollbartoTop start */}
            <ScrollToTop />
            {/* ScrollbartoTop end */}

            {/* Footer section start */}
            <Footer />
            {/* Footer section end */}
        </>
    )
}

export default ContactUs
