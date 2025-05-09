"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-[#1B7261] py-[30px]'>
                <div className='mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex flex-wrap md:grid md:grid-cols-2 lg:flex lg:justify-between gap-6'>

                    <div className='w-full md:w-[75%] lg:w-[30%]'>
                        <div className='w-[150px] h-[50px]'>
                            <Image
                                src="/images/logo-white.png"
                                alt="Logo"
                                width={1000}
                                height={500}
                                className="w-full h-auto object-fill"
                            />
                        </div>
                        <p className='text-[white] font-medium my-3 OpenSans-font'>
                            Welcome to our marriage biodata maker! We are a team of dedicated professionals with a passion for making the process of creating a marriage biodata simple, easy and enjoyable.
                        </p>
                    </div>

                    <div className='w-full md:w-[59%] lg:w-[20%]'>
                        <h2 className='text-[white] font-medium lg:text-center text-[24px]'>Information</h2>
                        <div className='flex flex-col items-stretch lg:items-center'>
                            <Link href={"/"} className='w-[50%] text-[white] font-medium py-2 px-2 hover:text-[#051145] transition-transform duration-200 hover:translate-x-2 OpenSans-font'>Home</Link>
                            <Link href={"/about-us"} className='w-[50%] text-[white] font-medium py-2 px-2 hover:text-[#051145] transition-transform duration-200 hover:translate-x-2 OpenSans-font'>About Us</Link>
                            <Link href={"/contact-us"} className='w-[50%] text-[white] font-medium py-2 px-2 hover:text-[#051145] transition-transform duration-200 hover:translate-x-2 OpenSans-font'>Contact Us</Link>
                        </div>
                    </div>

                    <div className='w-full md:w-[59%] lg:w-[22%]'>
                        <h2 className='text-[white] font-medium text-[24px]'>Contact</h2>
                        <div className='flex flex-col'>
                            <div className='flex items-center py-2'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.67161 3.67583C10.3263 3.80331 10.9279 4.12286 11.3995 4.59359C11.8712 5.06432 12.1913 5.66481 12.319 6.3182M9.67161 1C11.0317 1.15081 12.3 1.75871 13.2683 2.72391C14.2365 3.6891 14.8472 4.95421 15 6.31151M14.3298 11.6498V13.6567C14.3305 13.843 14.2923 14.0274 14.2175 14.1981C14.1427 14.3688 14.033 14.522 13.8955 14.648C13.758 14.7739 13.5956 14.8698 13.4187 14.9295C13.2419 14.9892 13.0546 15.0113 12.8686 14.9946C10.8062 14.7709 8.8251 14.0675 7.08449 12.9409C5.46509 11.9138 4.09211 10.5434 3.06307 8.92713C1.93035 7.18196 1.22544 5.19502 1.00544 3.12728C0.988691 2.94229 1.01072 2.75585 1.07012 2.57982C1.12952 2.4038 1.22499 2.24204 1.35046 2.10486C1.47592 1.96768 1.62863 1.85808 1.79886 1.78303C1.96909 1.70798 2.15312 1.66913 2.33921 1.66896H4.34993C4.6752 1.66576 4.99053 1.78072 5.23716 1.99242C5.48379 2.20411 5.64488 2.49809 5.6904 2.81956C5.77527 3.4618 5.93266 4.0924 6.15957 4.69933C6.24974 4.93876 6.26926 5.19898 6.2158 5.44915C6.16235 5.69932 6.03816 5.92895 5.85796 6.11083L5.00676 6.9604C5.96088 8.63517 7.35021 10.0218 9.02818 10.9741L9.87938 10.1246C10.0616 9.94471 10.2917 9.82076 10.5423 9.76741C10.793 9.71405 11.0537 9.73353 11.2936 9.82353C11.9017 10.05 12.5335 10.2071 13.177 10.2918C13.5025 10.3376 13.7999 10.5013 14.0124 10.7517C14.225 11.0021 14.3379 11.3217 14.3298 11.6498Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span className='text-[14px] text-[#ffff] hover:text-[#051145] ml-1 OpenSans-font'>(+245) 592 1125</span>
                            </div>

                            <div className='flex items-center py-2'>
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.7 1H16.3C17.235 1 18 1.7875 18 2.75V13.25C18 14.2125 17.235 15 16.3 15H2.7C1.765 15 1 14.2125 1 13.25V2.75C1 1.7875 1.765 1 2.7 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M18 2.75L9.5 8.875L1 2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span className='text-[14px] text-[#ffff] hover:text-[#051145] ml-1 OpenSans-font'>info@marriagebiodatamaker.com</span>
                            </div>

                            <div className='flex items-center py-2'>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 3.6V14L5.45455 11.4L10.5455 14L15 11.4V1L10.5455 3.6L5.45455 1L1 3.6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M5.45453 1V11.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M10.5455 3.6001V14.0001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                                <span className='text-[14px] text-[#ffff] hover:text-[#051145] ml-1 OpenSans-font'>Main Raod, Surat 39608</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#051145] py-[30px]'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='text-center'>
                    <p className='text-[#FFFF] OpenSans-font'>
                        <span className='text-[#1B7261] font-bold OpenSans-font'>©marriagebiodatamaker</span> 2025. All rights reserved.
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;