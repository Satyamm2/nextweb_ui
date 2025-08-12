import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "../utils/images/dubai.jpg";
import image2 from "../utils/images/mobileapp.jpg";
import image3 from "../utils/images/logistic.jpg";
import { motion } from "framer-motion";

const slides = [
  {
    title: ["Web Application", "Development For A Real", "Estate Company In Dubai"],
    description: `Our client, a real estate agency based in Dubai, recognized the
    growing demand for a streamlined platform that would facilitate
    the process of buying and renting properties in Dubai.`,
    image: image1,
  },
  {
    title: ["Mobile App", "For E-commerce", "Platform in Europe"],
    description: `We built a mobile commerce solution that enabled customers to browse,
    purchase, and track products through a smooth mobile experience.`,
    image: image2,
  },
  {
    title: ["Custom ERP", "Solution For A", "Logistics Firm"],
    description: `Our client needed a scalable ERP system to manage operations,
    fleet tracking, and employee scheduling efficiently.`,
    image: image3,
  },
];

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide();
  };

  return (
    <div className="bg-black text-white py-12 px-4 md:px-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        {/* Heading */}
        <div className="text-center lg:text-left mb-12 px-4 sm:px-8 md:px-16">
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-tight">
            Where great Ideas Became Real Results
          </h2>
          <div className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            <p>
              Offshore development services refers to the practice of hiring a
              remote team or a software development
            </p>
            <p>
              company in a different country to help reduce development costs
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-10">
          {/* Left Arrow */}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:-left-12 z-20 bg-[#1468FB] hover:bg-white hover:text-black text-white p-3 sm:p-4 md:p-5 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>

          {/* Card */}
          <div className="bg-white text-black rounded-[20px] overflow-hidden flex flex-col lg:flex-row w-full mx-2 sm:mx-6 md:mx-10 shadow-lg min-h-[500px] transition-all duration-500 ease-in-out">
            <div className="flex flex-col lg:flex-row m-4 sm:m-6 md:m-10 rounded-[20px] bg-[#F5F5F7] w-full">
              {/* Left Text */}
              <div className="flex-[1] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                {slides[currentIndex].title.map((line, index) => (
                  <h3
                    key={index}
                    className={`text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-tight ${index === slides[currentIndex].title.length - 1
                        ? "mb-4 sm:mb-6"
                        : ""
                      }`}
                  >
                    {line}
                  </h3>
                ))}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                  {slides[currentIndex].description}
                </p>
              </div>

              {/* Right Image with convex notch */}
              <div className="flex-[1.2] relative min-h-[220px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
                <svg
                  viewBox="0 0 800 600"
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full bg-[#F5F5F7]"
                >
                  <defs>
                    <clipPath id="convex-notch" clipPathUnits="objectBoundingBox">
                      <path
                        d="
      M0.20,0
      Q0.08,0.08 0,0.20
      L0,1
      L1,1
      L1,0
      Z
    "
                      />
                    </clipPath>

                  </defs>
                  <image
                    href={slides[currentIndex].image}
                    width="800"
                    height="600"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#convex-notch)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:-right-12 z-20 bg-[#1468FB] hover:bg-white hover:text-black text-white p-3 sm:p-4 md:p-5 rounded-full shadow-md"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-3 sm:space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 px-6" : "bg-white"
                }`}
            ></span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SliderSection;
