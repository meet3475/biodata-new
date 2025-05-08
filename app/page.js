"use client"
import Footer from "@/Layout/Footer/page";
import Navbar from "@/Layout/Navbar/page";
import "swiper/css";
import 'swiper/css/pagination';
import BiodataForm from "@/components/BiodataForm/BiodataForm";
import { useEffect, useRef, useState } from "react";
import Loarder from "@/components/Loarder/Loarder";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Herosection from "@/components/Herosection/Herosection";
import Stepsection from "@/components/Stepsection/Stepsection";
import Reviewsection from "@/components/Reviewsection/Reviewsection";
import Templatesection from "@/components/Templatesection/Templatesection";


export default function Home() {

  const templatesRef = useRef(null);
  const biodataFormRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

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
      <Herosection scrollToBiodataForm={scrollToBiodataForm} />
      {/* hero section end */}

      {/* Steps to Create Biodata section start */}
      <Stepsection />
      {/* Steps to Create Biodata section end */}

      {/* templates slider section start */}
      <div ref={templatesRef}  data-aos="fade-up">
        <Templatesection scrollToBiodataForm={scrollToBiodataForm} />
        {/* templates slider section end */}
      </div>
      {/* create biodata section start */}
      <div ref={biodataFormRef} id="create-biodata" data-aos="fade-up">
        <BiodataForm scrollToTemplates={scrollToTemplates} />
      </div>
      {/* create biodata section end */}

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