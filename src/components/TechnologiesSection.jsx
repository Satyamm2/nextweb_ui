import React from "react";
import { FaHtml5, FaCss3Alt, FaVuejs, FaAngular, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const TechnologiesSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Absolutely, We Have Thoroughly Mastered The Technologies You Prefer.
      </h2>
      <p className="text-gray-300 mb-10 max-w-3xl">
        Our exceptionally skilled IT specialists are proficient in both classic
        and modern programming languages, as well as frameworks. We aim for
        excellence, choosing only the top-tier candidates when selecting our IT
        specialists.
      </p>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          {["Frontend Programming Languages", "Backend Programming Languages", "Mobile", "Big Data"].map((item, idx) => (
            <div
              key={idx}
              className={`py-4 px-6 bg-gray-900 rounded-md font-semibold ${
                idx === 0 ? "border border-gray-700" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-md">
            <FaHtml5 className="text-orange-500 text-2xl" />
            <span>HTML5</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-md">
            <FaCss3Alt className="text-blue-500 text-2xl" />
            <span>CSS3</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-md">
            <FaVuejs className="text-green-500 text-2xl" />
            <span>Vue</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-md">
            <FaAngular className="text-red-500 text-2xl" />
            <span>Angular</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-md">
            <SiJavascript className="text-yellow-400 text-2xl" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900 p-4 rounded-md">
            <FaReact className="text-cyan-400 text-2xl" />
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
