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
  startAutoSlide(); // Start slider on mount

  return () => {
    clearInterval(intervalRef.current); // Cleanup on unmount
  };
}, []);

const startAutoSlide = () => {
  clearInterval(intervalRef.current); // Clear existing interval
  intervalRef.current = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000); // Slide every 5 seconds
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  );
  startAutoSlide(); // Reset the interval
};

const handleNext = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  );
  startAutoSlide(); // Reset the interval
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
      <div className="text-center md:text-left mb-20 px-16">
        <h2 className="text-[42px]">Where great Ideas Became Real Results</h2>
        <div className="mt-5 text-[20px] leading-[31px]">
          <p>
            Offshore development services refers to the practice of hiring a
            remote team or a software development
          </p>
          <p>company in a different country to help reduce development costs</p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center px-6">
        {/* Left Arrow */}
        <button
          className="absolute -left-6 md:-left-12 bg-[#1468FB] cursor-pointer hover:bg-white hover:text-black text-white p-4 md:p-5 rounded-full shadow-md z-20"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>

        {/* Card */}
        <div className="bg-white text-black rounded-[30px] overflow-hidden flex flex-col md:flex-row w-full mx-6 md:mx-10 shadow-lg min-h-[500px] transition-all duration-500 ease-in-out">
          <div className="flex m-10 rounded-[20px] bg-[#F5F5F7] w-full">
            {/* Left Text */}
            <div className="flex-[0.8] p-8 md:p-12 flex flex-col justify-center">
              {slides[currentIndex].title.map((line, index) => (
                <h3
                  key={index}
                  className={`text-[32px] font-bold leading-[50px] ${index === slides[currentIndex].title.length - 1 ? "mb-6" : ""
                    }`}
                >
                  {line}
                </h3>
              ))}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {slides[currentIndex].description}
              </p>
            </div>

            {/* Right Image with convex notch */}
            <div className="flex-[1.2] relative min-h-[320px] md:min-h-[500px]">
              <svg
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full bg-[#F5F5F7]"
              >
                <defs>
                  <clipPath
                    id="convex-notch"
                    clipPathUnits="objectBoundingBox"
                  >
                    <path
                      d="
                      M0.15,0
                      Q0.00,0.15 0.00,0.30
                      L0.00,0.95
                      Q0.00,1.00 0.05,1.00
                      L0.95,1.00
                      Q1.00,1.00 1.00,0.95
                      L1.00,0.05
                      Q1.00,0.00 0.95,0.00
                      L0.15,0.00
                      Z"
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
          className="absolute -right-6 cursor-pointer md:-right-12 bg-[#1468FB] hover:bg-white hover:text-black text-white p-4 md:p-5 rounded-full shadow-md z-20"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-lg transition-colors duration-300 ${index === currentIndex ? "bg-blue-500 px-5" : "bg-white"
              }`}
          ></span>
        ))}
      </div>
    </motion.div>
    </div>
  );
};

export default SliderSection;
