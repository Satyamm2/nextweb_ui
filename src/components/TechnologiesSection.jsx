import React from "react";
import htmlLogo from "../utils/logos/htmlLogo.png";
import cssLogo from "../utils/logos/cssLogo.png";
import javascriptLogo from '../utils/logos/javascriptLogo.png'
import vueLogo from '../utils/logos/vueLogo.png'
import reactLogo from '../utils/logos/reactLogo.png';
import angularLogo from '../utils/logos/angularLogo.png';
import { motion } from "framer-motion";

const TechnologiesSection = () => {
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
        <p> We aim for
          excellence, choosing only the top-tier candidates when selecting our IT
          specialists.</p>

      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          {/* Left Side */}
          <div className="space-y-6">
            {["Frontend Programming Languages", "Backend Programming Languages", "Mobile", "Big Data"].map((item, idx) => (
              <div key={idx} className="relative max-w-lg">
                <div
                  className="px-12 py-8 hover:bg-[#1B1B1B] cursor-pointer font-bold rounded-xl text-[22px] relative"
                >
                  {item}

                  {/* Conditionally render the fading border line inside the box */}
                  {(item === "Frontend Programming Languages" ||
                    item === "Backend Programming Languages" ||
                    item === "Mobile") && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-white/20 pointer-events-none">
                        {/* Fading overlays */}
                        <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[#0F0F0F] to-transparent"></div>
                        <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[#0F0F0F] to-transparent"></div>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>

        </motion.div>




        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          {/* Right Side */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[ // simplified list for maintainability
                { src: htmlLogo, label: "HTML5" },
                { src: cssLogo, label: "CSS3" },
                { src: vueLogo, label: "Vue" },
                { src: angularLogo, label: "Angular" },
                { src: javascriptLogo, label: "JavaScript" },
                { src: reactLogo, label: "React" },
              ].map(({ src, label }, idx) => (
                <div key={idx} className="flex items-center justify-center gap-4 bg-[#1B1B1B] py-6 rounded-lg">
                  <img src={src} alt={`${label} logo`} />
                  <span className="text-[18px]">{label}</span>
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
