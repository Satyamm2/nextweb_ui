import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I wanted to redesign and revamp the website of my institution. I contacted Nextwebi and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, Without a doubt they have what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dynamatic_Technologies_logo.svg/320px-Dynamatic_Technologies_logo.svg.png",
    companyName: "DYNAMATIC TECHNOLOGIES",
    personImage: "https://randomuser.me/api/portraits/men/32.jpg",
    personName: "Qenowned & D Firm",
    role: "Team Lead",
  },
  // You can add more testimonials here
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Hear It From Those Who Matter Most
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-10">
        Offshore development services refers to the practice of hiring a remote
        team or a software development company in a different company to help
        reduce development costs
      </p>

      {/* Testimonial Card */}
      <div className="relative w-full max-w-4xl">
        <button
          onClick={prevSlide}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>

        <div className="border border-blue-400 rounded-lg p-8 bg-[#111] shadow-lg relative min-h-[300px] flex flex-col justify-between">
          <FaQuoteLeft className="text-blue-400 text-3xl mb-4" />
          <p className="text-gray-300 mb-6">
            {testimonials[current].text}
          </p>
          <div className="border-t border-green-500 pt-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={testimonials[current].companyLogo}
                alt="Company"
                className="h-8"
              />
              <span className="uppercase font-bold text-sm">
                {testimonials[current].companyName}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[current].personImage}
                alt="Person"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{testimonials[current].personName}</p>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
