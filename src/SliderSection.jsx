import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderSection = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center md:text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Where Great Ideas Became Real Results
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl">
          Offshore development services refers to the practice of hiring a remote
          team or a software development company in a different country to help
          reduce development costs
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button className="absolute -left-6 md:-left-12 bg-white text-black p-3 rounded-full shadow-md">
          <FaChevronLeft />
        </button>

        {/* Card */}
        <div className="bg-white text-black rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-5xl">
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Web Application Development For A Real Estate Company In Dubai
            </h3>
            <p className="text-gray-600">
              Our client, a real estate agency based in Dubai, recognized the
              growing demand for a streamlined platform that would facilitate
              the process of buying and renting properties in Dubai.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1506976785307-8732e854ad04?auto=format&fit=crop&w=800&q=80"
              alt="Dubai skyline"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute -right-6 md:-right-12 bg-blue-500 text-white p-3 rounded-full shadow-md">
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
      </div>
    </div>
  );
};

export default SliderSection;
