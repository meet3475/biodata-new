"use client"
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about-us', current: false },
    { name: 'Contact', href: '/contact-us', current: false },

];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = ({ scrollToBiodataForm }) => {

    const pathname = usePathname();
    console.log(pathname)

    return (
        <>
            {/* top header section start */}
            <div className='bg-[#1b7261] py-3 hidden lg:block top-header'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='flex justify-between'>
                        <div className='flex gap-7'>
                            <div className='flex items-center justify-center'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.67161 3.67583C10.3263 3.80331 10.9279 4.12286 11.3995 4.59359C11.8712 5.06432 12.1913 5.66481 12.319 6.3182M9.67161 1C11.0317 1.15081 12.3 1.75871 13.2683 2.72391C14.2365 3.6891 14.8472 4.95421 15 6.31151M14.3298 11.6498V13.6567C14.3305 13.843 14.2923 14.0274 14.2175 14.1981C14.1427 14.3688 14.033 14.522 13.8955 14.648C13.758 14.7739 13.5956 14.8698 13.4187 14.9295C13.2419 14.9892 13.0546 15.0113 12.8686 14.9946C10.8062 14.7709 8.8251 14.0675 7.08449 12.9409C5.46509 11.9138 4.09211 10.5434 3.06307 8.92713C1.93035 7.18196 1.22544 5.19502 1.00544 3.12728C0.988691 2.94229 1.01072 2.75585 1.07012 2.57982C1.12952 2.4038 1.22499 2.24204 1.35046 2.10486C1.47592 1.96768 1.62863 1.85808 1.79886 1.78303C1.96909 1.70798 2.15312 1.66913 2.33921 1.66896H4.34993C4.6752 1.66576 4.99053 1.78072 5.23716 1.99242C5.48379 2.20411 5.64488 2.49809 5.6904 2.81956C5.77527 3.4618 5.93266 4.0924 6.15957 4.69933C6.24974 4.93876 6.26926 5.19898 6.2158 5.44915C6.16235 5.69932 6.03816 5.92895 5.85796 6.11083L5.00676 6.9604C5.96088 8.63517 7.35021 10.0218 9.02818 10.9741L9.87938 10.1246C10.0616 9.94471 10.2917 9.82076 10.5423 9.76741C10.793 9.71405 11.0537 9.73353 11.2936 9.82353C11.9017 10.05 12.5335 10.2071 13.177 10.2918C13.5025 10.3376 13.7999 10.5013 14.0124 10.7517C14.225 11.0021 14.3379 11.3217 14.3298 11.6498Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span className='text-[14px] text-[#ffff] hover:text-[#75AAA0] ml-1 OpenSans-font'>(+245) 592 1125</span>
                            </div>

                            <div className='flex items-center justify-center'>
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.7 1H16.3C17.235 1 18 1.7875 18 2.75V13.25C18 14.2125 17.235 15 16.3 15H2.7C1.765 15 1 14.2125 1 13.25V2.75C1 1.7875 1.765 1 2.7 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M18 2.75L9.5 8.875L1 2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span className='text-[14px] text-[#ffff] hover:text-[#75AAA0] ml-1 OpenSans-font'>rrdevs@support.com</span>
                            </div>
                        </div>



                        <div className='flex'>
                            <div className='text-white hover:text-[#75AAA0] px-2.5 cursor-pointer transition-colors duration-300'>
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1H6.09091C5.24704 1 4.43773 1.36875 3.84102 2.02513C3.24432 2.6815 2.90909 3.57174 2.90909 4.5V6.6H1V9.4H2.90909V15H5.45455V9.4H7.36364L8 6.6H5.45455V4.5C5.45455 4.31435 5.52159 4.1363 5.64093 4.00503C5.76027 3.87375 5.92213 3.8 6.09091 3.8H8V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className='text-white hover:text-[#75AAA0] px-2.5 cursor-pointer transition-colors duration-300'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 1.00785C15.3471 1.53487 14.6242 1.93795 13.8591 2.20158C13.4485 1.66129 12.9027 1.27834 12.2957 1.10454C11.6887 0.930729 11.0497 0.974449 10.4651 1.22978C9.88045 1.48511 9.37848 1.93974 9.02703 2.53217C8.67558 3.1246 8.49161 3.82626 8.5 4.54224V5.32246C7.3018 5.35801 6.11451 5.05391 5.04387 4.43726C3.97323 3.8206 3.05249 2.91052 2.36364 1.78806C2.36364 1.78806 -0.363636 8.81003 5.77273 11.9309C4.36854 13.0216 2.69579 13.5685 1 13.4913C7.13636 17.3924 14.6364 13.4913 14.6364 4.51883C14.6357 4.3015 14.6175 4.08471 14.5818 3.87125C15.2777 3.08595 15.7687 2.09447 16 1.00785Z" className='hover:text-[#75AAA0]' stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div className='text-white hover:text-[#75AAA0] px-2.5 cursor-pointer transition-colors duration-300'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8001 5.42102C11.914 5.42102 12.9823 5.88681 13.7699 6.71592C14.5576 7.54503 15.0001 8.66954 15.0001 9.84207V15H12.2001V9.84207C12.2001 9.45123 12.0526 9.07639 11.79 8.80002C11.5275 8.52365 11.1714 8.36839 10.8001 8.36839C10.4288 8.36839 10.0727 8.52365 9.81015 8.80002C9.5476 9.07639 9.4001 9.45123 9.4001 9.84207V15H6.6001V9.84207C6.6001 8.66954 7.0426 7.54503 7.83025 6.71592C8.6179 5.88681 9.68619 5.42102 10.8001 5.42102Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M3.8 6.1579H1V15H3.8V6.1579Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M2.4 3.94737C3.1732 3.94737 3.8 3.28758 3.8 2.47368C3.8 1.65979 3.1732 1 2.4 1C1.6268 1 1 1.65979 1 2.47368C1 3.28758 1.6268 3.94737 2.4 3.94737Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div className='text-white hover:text-[#75AAA0] px-2.5 cursor-pointer transition-colors duration-300'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10.7997 7.55897C10.8861 8.14154 10.7866 8.73652 10.5153 9.25928C10.2441 9.78204 9.8149 10.206 9.28884 10.4707C8.76277 10.7355 8.16661 10.8277 7.58515 10.7341C7.00368 10.6406 6.46653 10.366 6.05008 9.94958C5.63364 9.53313 5.35911 8.99598 5.26554 8.41452C5.17198 7.83305 5.26414 7.23689 5.52893 6.71083C5.79371 6.18476 6.21763 5.75559 6.74039 5.48434C7.26315 5.21309 7.85813 5.11358 8.4407 5.19997C9.03494 5.28809 9.58509 5.56499 10.0099 5.98978C10.4347 6.41457 10.7116 6.96472 10.7997 7.55897Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M11.8501 4.14996H11.8571" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* top header section end */}

            {/* header section start */}
            <Disclosure as="nav" className="bg-[#FFFFFF] py-4 sm:py-6">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                            <div className="flex justify-between h-16 items-center">

                                <div className="flex items-center">
                                    <Link href="/" className='flex items-center mr-0 sm:mr-[45px]'>
                                        <div className='w-[150px] h-[50px]'>
                                            <Image
                                                src="/images/logo.png"
                                                alt="Logo"
                                                width={1000}
                                                height={500}
                                                className="w-full h-auto object-fill"
                                            />
                                        </div>
                                    </Link>

                                    <div className="hidden md:flex space-x-6">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href} className={classNames(
                                                'text-[#051145] font-medium text-[16px] p-[18px] hover:text-[#1b7261] OpenSans-font'
                                            )}>{item.name}</Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {pathname === '/' ? (
                                        <button className="rr-btn hidden md:block"
                                        onClick={scrollToBiodataForm || (() => window.location.href = '/')}
                                        >
                                            <span className='OpenSans-font'>Create Biodata</span>
                                        </button>
                                    ) : (
                                        <Link href="/">
                                            <button className="rr-btn hidden md:block"
                                                onClick={scrollToBiodataForm || (() => window.location.href = '/')}
                                            >
                                                <span className='OpenSans-font'>Create Biodata</span>
                                            </button>
                                        </Link>
                                    )
                                    }
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden flex items-center">
                                    <DisclosureButton className="p-2 bg-[#1b7261] text-[#FFFF]  rounded-md ">
                                        {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <DisclosurePanel className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <DisclosureButton key={item.name} as="Link" href={item.href} className="block OpenSans-font text-[#051145] font-medium text-[16px] p-[18px] hover:text-[#1b7261]">
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </DisclosurePanel>

                    </>
                )}
            </Disclosure>
            {/* header section end */}
        </>
    );
};

export default Navbar;
