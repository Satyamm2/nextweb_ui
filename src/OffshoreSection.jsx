import React from "react";
import { motion } from "framer-motion";
import awsLogo from "./utils/images/offshore.png";
import girlLaptop from "./utils/images/offshore.png";

const OffshoreSection = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side - Text + Gradient Border */}
      <div className="md:w-1/2 relative pr-6">
        {/* Animated Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Output-Driven Offshore Software Development Centre
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Offshore development services refers to the practice of hiring a
            remote team or a software development company
          </p>

          {/* pdiv */}
          <div className="relative pr-4">
            <div className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Offshore development services refers to the practice of hiring a
              remote team or a software development company in a different
              country to help reduce development costs. Offshore development
              services refers to the practice of hiring a remote team or a
              software development company.
            </p>
            <p className="text-sm mt-6 text-gray-400 leading-relaxed">
              development costs. Offshore development services refers to the
              practice of hiring a remote team or a software development
              company.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image/Graphics */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex flex-col items-center"
      >
        <img
          src={girlLaptop}
          alt="Developer"
          className="rounded-xl shadow-lg max-w-sm"
        />
      </motion.div>
    </div>
  );
};

export default OffshoreSection;
