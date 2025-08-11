import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import brand1 from '../utils/images/brand1.png'
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I wanted to redesign and revamp the website of my institution. I contacted Nextwebi and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.",
    companyLogo: brand1,
    companyName: "DYNAMATIC TECHNOLOGIES",
    personImage: "https://randomuser.me/api/portraits/men/32.jpg",
    personName: "Qenowned & D Firm",
    role: "Team Lead",
  },
  {
    text: "I wanted to rfdsfsd and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    companyName: "Lukens incorporated",
    personImage: "https://randomuser.me/api/portraits/men/33.jpg",
    personName: "Jhon Snow",
    role: "CEO",
  },
  {
    text: "I wanted to rfdsfsd of my institution. I contacted Nextwebi and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    companyName: "Zara Info",
    personImage: "https://randomuser.me/api/portraits/men/34.jpg",
    personName: "Tim Watson",
    role: "CTO",
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  if (testimonials.length === 0) {
    return <p className="text-center text-white">No testimonials available</p>;
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black text-white py-10 px-4 md:py-16 md:px-10 xl:px-40 flex flex-col">

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-[42px] font-semibold mb-4 md:mb-6 text-center md:text-left">
          Hear It From Those Who Matter Most
        </h2>
        <div className="text-sm md:text-base mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <p>
            Offshore development services refers to the practice of hiring a remote
            team or a software development
          </p>
          <p>
            company in a different company to help
            reduce development costs
          </p>
        </div>

        <div className="flex flex-col items-center">

          {/* Testimonial Card */}
          <div className="relative w-full max-w-[95vw] md:max-w-[720px] lg:max-w-[995px]">

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 cursor-pointer -translate-y-1/2 md:-left-20 bg-[#1468FB] hover:bg-white hover:text-black text-white p-3 md:p-4 rounded-full shadow-md z-20"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <div className="relative bg-[#1B1B1B] rounded-xl p-6 md:p-8 shadow-lg min-h-[280px] md:min-h-[300px] flex flex-col justify-between overflow-hidden">

              {/* Borders */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 z-10" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 z-10" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-yellow-400 z-10" />
              <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-yellow-400 z-10" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 z-10 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 z-10 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400 z-10 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400 z-10 rounded-br-xl" />

              {/* Quote Icon */}
              <div className="flex justify-center items-center flex-1 py-3 md:py-4">
                <RiDoubleQuotesL className="text-[#1468FB]" size={32} md:size={40} />
              </div>

              <p className="text-base md:text-xl mb-5 md:mb-6 p-3 text-center md:text-left leading-relaxed">
                {testimonials[current].text}
              </p>

              <div className="flex flex-col gap-4 md:gap-6 relative">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-[1px]"></div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center gap-3 mb-3 md:mb-0">
                    <img
                      src={testimonials[current].companyLogo}
                      alt="Company"
                      className="h-6 md:h-8"
                    />
                    <span className="uppercase font-bold text-xs md:text-sm text-center md:text-left">
                      {testimonials[current].companyName.includes(' ') ? (
                        testimonials[current].companyName.split(' ').map((word, index) => (
                          <React.Fragment key={index}>
                            {word}
                            {index !== testimonials[current].companyName.split(' ').length - 1 && <br />}
                          </React.Fragment>
                        ))
                      ) : (
                        testimonials[current].companyName
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 md:pr-10">
                    <img
                      src={testimonials[current].personImage}
                      alt="Person"
                      className="h-10 w-10 md:h-12 md:w-12 rounded-md"
                    />
                    <div>
                      <p className="font-semibold text-[14px] md:text-[18px]">{testimonials[current].personName}</p>
                      <p className="text-[12px] md:text-[16px]">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 cursor-pointer -translate-y-1/2 md:-right-20 bg-[#1468FB] hover:bg-white hover:text-black text-white p-3 md:p-4 rounded-full shadow-md z-20"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-4 md:mt-6">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`py-1 rounded-full cursor-pointer transition-all duration-300
                  ${current === index ? "bg-blue-500 px-5 md:px-6" : "bg-white px-3 md:px-4"}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

