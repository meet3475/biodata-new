import Image from 'next/image'
import React from 'react'

const Herosection = ({ scrollToBiodataForm }) => {
    return (
        <>
            <div className="relative bg-[#F6F8FF] pt-[120px] pb-[120px] overflow-visible" data-aos="fade-up">
                {/* Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[33%] left-[0%] hidden lg:block animate-float-slow">
                        <Image src="/images/flowerleft.png" alt="flowerleft" width={150} height={150} />
                    </div>
                    <div className="absolute bottom-[-15%] right-[0%] animate-float-medium z-10">
                        <Image src="/images/flowerright.png" alt="flowerright" width={200} height={200} />
                    </div>
                    <div className="absolute top-[8%] lg:top-[20%] left-[64%] sm:left-[34%] lg:left-[15%] animate-float-fast">
                        <Image src="/images/heroleft.png" alt="heroleft" width={40} height={40} />
                    </div>
                    <div className="absolute top-[0%] right-[0%] animate-float-xslow">
                        <Image src="/images/heroright.png" alt="heroright" width={220} height={120} />
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 items-center gap-8">
                        <div>
                            <h1 className="text-3xl md:text-[48px] font-bold text-[#051145] mt-2 mb-4 md:mb-8 text-center md:text-left">
                                The Ultimate Marriage Biodata Maker
                            </h1>
                            <p className="text-base md:text-[18px] text-[#54595F] mb-4 md:mb-8 text-center md:text-left OpenSans-font">
                                Create beautiful biodata for marriage with just a few clicks! Easy to use,
                                fully customizable, elegantly designed marriage biodata formats
                            </p>

                            <div className="flex justify-center md:justify-start">
                                <button className="rr-btn"
                                    onClick={scrollToBiodataForm}
                                >
                                    <span className="OpenSans-font">
                                        Create Biodata
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="relative animate-fade-in delay-400">
                            <div className="flex justify-center lg:justify-end">
                                <Image src="/images/banner-main.jpg" alt="Hero Main" width={400} height={500} className="rounded-xl" />
                            </div>
                            <Image
                                src="/images/camera.png"
                                alt="camera"
                                width={100}
                                height={100}
                                className="absolute top-0 sm:top-[15%] lg:top-0 left-0 sm:left-[8%] lg:left-0 -translate-x-1/2 -translate-y-1/2 hidden sm:block animate-float-medium"
                            />
                            <Image
                                src="/images/banner-sm.jpg"
                                alt="small thumb"
                                width={200}
                                height={200}
                                className="absolute top-[10%] right-[-20%] xl:right-[-5%] xl:top-[48%] 2xl:right-[-20%] 2xl:top-[10%] hidden xl:block animate-float-fast"
                            />
                            <Image
                                src="/images/banner-md.jpg"
                                alt="md thumb"
                                width={220}
                                height={235}
                                className="absolute bottom-[-7%] left-[-4%] sm:left-[8%] lg:left-[-4%] hidden md:block rounded-[120px]  animate-float-fast"
                            />
                            <Image
                                src="/images/img-full.png"
                                alt="border full"
                                width={270}
                                height={400}
                                className="absolute bottom-[-9%] left-[-8%] sm:left-[5%] lg:left-[-8%] opacity-40 hidden md:block animate-float-fast"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Herosection