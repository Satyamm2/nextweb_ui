import React from "react";
import rightImage from "../utils/images/offshore.png";
import { motion } from "framer-motion";

const OffshoreSection = () => {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center gap-8">

      {/* Left Content - Wider */}
      <div className="flex-[1.3] w-full md:w-auto">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Output-Driven Offshore Software Development Centre
          </h1>
          <p className="text-base sm:text-lg mb-6 max-w-xl">
            Offshore development services refers to the practice of hiring a remote
            team or a software development company
          </p>

          <div className="relative pr-6 sm:pr-8 max-w-xl">
            <div className="absolute top-0 right-0 h-full w-1 sm:w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <p className="text-white leading-relaxed mb-4">
              Offshore development services refers to the practice of hiring a
              remote team or a software development company in a different
              country to help reduce development costs. Offshore development
              services refers to the practice of hiring a remote team or a
              software development company. Offshore development services refers to the practice of hiring a
              remote team or a software development company in a different
              country to help reduce development costs. Offshore development
              services refers to the practice of hiring a remote team or a
              software development company.
            </p>
            <p className="text-white leading-relaxed">
              development costs. Offshore development services refers to the
              practice of hiring a remote team or a software development
              company.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Image - Narrower */}
      <div className="flex-[0.9] w-full md:w-auto flex justify-center">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <img
            src={rightImage}
            alt="Offshore Development"
            className="w-full max-w-md sm:max-w-lg md:max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OffshoreSection;
