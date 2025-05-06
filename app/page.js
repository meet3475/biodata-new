"use client"
import Footer from "@/Layout/Footer/page";
import Navbar from "@/Layout/Navbar/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import BiodataForm from "@/components/BiodataForm/BiodataForm";
import { useEffect, useRef, useState } from "react";
import Loarder from "@/components/Loarder/Loarder";
import { Navigation, Pagination } from 'swiper/modules';
import DataLoader from "@/components/Loarder/DataLoader";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const step = [
  {
    number: "1",
    title: "Add Your Details",
    description: "Enter all your Personal, Professional and Family details that you want to show on the Biodata."
  },
  {
    number: "2",
    title: "Choose a Template",
    description: "Select a biodata design from our curated list of templates."
  },
  {
    number: "3",
    title: "Get Biodata on Whatsapp",
    description: "Enter your Number and get your Biodata PDF on Whatsapp."
  }
]

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

export default function Home() {

  const templatesRef = useRef(null);
  const biodataFormRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


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

  const [designSliderLoading, setDesignSliderLoading] = useState(true);
  const [reviewSliderLoading, setReviewSliderLoading] = useState(true);

  useEffect(() => {
    const designTimer = setTimeout(() => setDesignSliderLoading(false), 3000);
    const reviewTimer = setTimeout(() => setReviewSliderLoading(false), 3000);

    return () => {
      clearTimeout(designTimer);
      clearTimeout(reviewTimer);
    };
  }, []);

  if (isLoading) {
    return <Loarder />;
  }

  // Function to scroll to templates section
  const scrollToTemplates = () => {
    if (templatesRef.current) {
      templatesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Add this scroll function
  const scrollToBiodataForm = () => {
    if (biodataFormRef.current) {
      biodataFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
    <>
      {/* navbar section start */}
      <Navbar scrollToBiodataForm={scrollToBiodataForm} />
      {/* navbar section end */}

      {/* hero section start */}
      <div className="relative bg-[#F6F8FF] pt-[120px] pb-[120px] overflow-visible" data-aos="fade-up">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[33%] left-[0%] hidden lg:block animate-float-slow">
            <Image src="/images/shap1.png" alt="shape1" width={150} height={150} />
          </div>
          <div className="absolute bottom-[-15%] right-[0%] animate-float-medium z-10">
            <Image src="/images/shape2.png" alt="shape2" width={200} height={200} />
          </div>
          <div className="absolute top-[8%] lg:top-[20%] left-[64%] sm:left-[34%] lg:left-[15%] animate-float-fast">
            <Image src="/images/shape3.png" alt="shape3" width={40} height={40} />
          </div>
          <div className="absolute top-[0%] right-[0%] animate-float-xslow">
            <Image src="/images/shape4.png" alt="shape4" width={220} height={120} />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            <div>
              <h1 className="text-3xl md:text-[48px] font-bold text-[#051145] mt-2 mb-4 md:mb-8 text-center md:text-left">
                The Ultimate Marriage Biodata Maker
              </h1>
              <p className="text-base md:text-[18px] text-[#54595F] mb-4 md:mb-8 text-center md:text-left Montserrat-font">
                Create beautiful biodata for marriage with just a few clicks! Easy to use,
                fully customizable, elegantly designed marriage biodata formats
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="rr-btn"
                  onClick={scrollToBiodataForm}
                >
                  <span className="Montserrat-font">
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
                className="absolute bottom-[-7%] left-[-4%] sm:left-[8%] lg:left-[-4%] hidden md:block rounded-[40%] animate-float-fast"
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
      {/* hero section end */}

      {/* Steps to Create Biodata section start */}
      <div className="bg-[#FFFFFF]" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px]">
          <div className="text-left mb-3">
            <h6 className="text-[#1b7261]">Our Services</h6>
            <h2 className="text-[28px] sm:text-[45px] text-[#051145] font-bold">
              Steps to Create Biodata
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            {step.map((item, index) => (
              <div key={index}>
                <div className="group transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:rounded-2xl p-6 sm:p-8 text-left max-w-md mx-auto h-[300px] bg-white">
                  <div>
                    <div className="relative w-[100px] h-[100px] flex justify-center items-center text-[#1b7261] text-[32px] font-bold mb-6 overflow-hidden rounded-full bg-[#1B726114]">
                      <span className="z-10 transition-colors duration-300 group-hover:text-white">
                        {item.number}
                      </span>
                      <div className="absolute inset-0 bg-[#1b7261] rounded-full opacity-0 transition-opacity duration-500 delay-500 group-hover:opacity-100"></div>
                      <div className="absolute w-0 h-0 bg-[#1b7261] rounded-full transition-all duration-500 group-hover:w-[200px] group-hover:h-[200px] group-hover:-top-10 group-hover:-left-10"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1b7261] font-bold text-[24px]">
                      {item.title}
                    </h3>
                    <p className="text-[#54595F] text-[16px] Montserrat-font">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Steps to Create Biodata section end */}

      {/* templates slider section start */}
      <div ref={templatesRef} className="bg-[#F6F8FF]" data-aos="fade-up">
        <div className="py-[80px]">
          <div className="text-center mb-3">
            <h2 className="text-[26px] sm:text-[45px] text-[#051145] font-bold mb-5">
              Popular Marriage Biodata Designs
            </h2>
            <h5 className="text-[#1b7261] text-[16px] sm:text-[20px] font-semibold text-center mb-[60px]">Select your favourite biodata design to get started</h5>
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
                                alt="Template"
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
                                <div className="rr-btn"><span className="Montserrat-font">Select Template</span></div>
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
      {/* templates slider section end */}

      {/* create biodata section start */}
      <div ref={biodataFormRef} id="create-biodata" data-aos="fade-up">
        <BiodataForm scrollToTemplates={scrollToTemplates} />
      </div>
      {/* create biodata section end */}

      {/* reviews section start */}
      <div className="bg-[#FFFFFF]" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px] ">
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
                              <p className="text-[#54595f] text-[12px] md:text-[18px] Montserrat-font">{item.description}</p>
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