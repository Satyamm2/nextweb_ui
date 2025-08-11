import React from "react";
import mockImage from "../utils/images/Capture.PNG";
import achi1 from '../utils/images/achive1.png';
import achi2 from '../utils/images/achive2.png';
import achi3 from '../utils/images/achive3.png';
import achi4 from '../utils/images/achive4.png';
import achi5 from '../utils/images/achive5.png';
import { motion } from "framer-motion";


const StatsSection = () => {
  return (
    <div className="bg-[#0B0D17] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-30">

        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="flex-[1.4] px-16"
        >
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-300 via-green-500 to-green-600 bg-clip-text text-transparent">
            Trusted by Startups and Enterprises across
          </h2>
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-300 via-green-500 to-green-600 bg-clip-text text-transparent">
            20+ Nations
          </h2>

          <p className="text-white font-semibold mt-4">
            Nextwebi software development team understands your business needs
            and suggests the right technology to build scalable software
            solutions. We work as a long-term technology partner with our
            customers and our approach ensures that every project aligns with
            their strategic business goals, we emphasizing scalability, security,
            and performance.
          </p>

          <p className="text-white font-semibold mt-4">
            We are committed to delivering high-quality, cost-effective
            solutions on time, ensuring you achieve maximum value.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <h3 className="text-[#CCFF00] text-4xl font-semibold">9+</h3>
              <div>
                <p className="text-gray-400 text-sm uppercase font-bold">
                  Years in
                </p>
                <p className="text-gray-400 text-sm uppercase font-bold">
                  Business
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-[#CCFF00] text-4xl font-semibold">1600+</h3>
              <div>
                <p className="text-gray-400 text-sm uppercase font-bold">
                  Projects
                </p>
                <p className="text-gray-400 text-sm uppercase font-bold">
                  Delivered
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-[#CCFF00] text-4xl font-semibold">600+</h3>
              <div>
                <p className="text-gray-400 text-sm uppercase font-bold">
                  Client
                </p>
                <p className="text-gray-400 text-sm uppercase font-bold">
                  Relationships
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="flex mt-8 flex-wrap border-t border-dashed pt-10 justify-between">
            <div className="bg-white rounded-lg items-center justify-center">
              <img src={achi1} alt="achivements " className="w-28 h-28" />
            </div>
            <div className="bg-white rounded-lg items-center justify-center">
              <img src={achi2} alt="achivements " className="w-28 h-28" />
            </div>
            <div className="bg-white rounded-lg items-center justify-center">
              <img src={achi3} alt="achivements " className="w-28 h-28" />
            </div>
            <div className="bg-white rounded-lg items-center justify-center">
              <img src={achi4} alt="achivements " className="w-28 h-28" />
            </div>
            <div className="bg-white rounded-lg items-center justify-center">
              <img src={achi5} alt="achivements " className="w-28 h-28" />
            </div>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="flex-[0.6] flex justify-center"
        >
          <img
            src={mockImage}
            alt="Team Working"
            className="rounded-4xl object-cover w-auto max-w-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
