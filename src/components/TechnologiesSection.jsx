import React, { useState } from "react";
import htmlLogo from "../utils/logos/htmlLogo.png";
import cssLogo from "../utils/logos/cssLogo.png";
import javascriptLogo from "../utils/logos/javascriptLogo.png";
import vueLogo from "../utils/logos/vueLogo.png";
import reactLogo from "../utils/logos/reactLogo.png";
import angularLogo from "../utils/logos/angularLogo.png";
import { motion } from "framer-motion";

// Define your technologies per category
const technologies = {
  "Frontend Programming Languages": [
    { src: htmlLogo, label: "HTML5" },
    { src: cssLogo, label: "CSS3" },
    { src: javascriptLogo, label: "JavaScript" },
    { src: reactLogo, label: "React" },
    { src: vueLogo, label: "Vue" },
    { src: angularLogo, label: "Angular" },
  ],
  "Backend Programming Languages": [
    { src: javascriptLogo, label: "Node.js" },
    { src: reactLogo, label: "Express" },
    { src: htmlLogo, label: "Python" },
    { src: cssLogo, label: "Django" }, 
  ],
  "Mobile": [
    { src: reactLogo, label: "React Native" },
    { src: javascriptLogo, label: "Flutter" },
    { src: cssLogo, label: "Swift" }, 
  ],
  "Big Data": [
    { src: javascriptLogo, label: "Hadoop" },
    { src: htmlLogo, label: "Spark" },
    { src: reactLogo, label: "Kafka" }, 
  ],
};

const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend Programming Languages");

  const categories = Object.keys(technologies);

  return (
    <div className="bg-[#121212] text-white py-16 px-6 md:px-30">

      {/* Heading */}
      <div className="text-[42px] font-semiold mb-2">
        <h2>
          Absolutely, We Have Thoroughly Mastered The Technologies
        </h2>
        <h2>
          You Prefer.
        </h2>
      </div>

      <div className="text-[20px] mb-10">
        <p>Our exceptionally skilled IT specialists are proficient in both classic
          and modern programming languages, as well as frameworks.</p>
        <p>We aim for
          excellence, choosing only the top-tier candidates when selecting our IT
          specialists.</p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side: Categories */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <div className="space-y-0">
            {categories.map((item, idx) => (
              <div key={idx} className="relative max-w-lg">
                <div
                  onClick={() => setSelectedCategory(item)}
                  className={`px-12 py-8 mb-6 cursor-pointer rounded-xl text-[22px] relative font-bold transition duration-300 ${
                    selectedCategory === item
                      ? "bg-[#1B1B1B] text-white"
                      : "hover:bg-[#1B1B1B] text-gray-300"
                  }`}
                >
                  {item}
                </div>

                {/* Divider */}
                {idx !== categories.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] h-px bg-white">
                    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent"></div>
                    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Tech Items */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <div>
            <div className="grid grid-cols-2 gap-5">
              {technologies[selectedCategory].map(({ src, label }, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-4 bg-[#1B1B1B] py-6 rounded-xl"
                >
                  <img src={src} alt={`${label} logo`} className="w-8 h-8" />
                  <span className="text-[20px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
