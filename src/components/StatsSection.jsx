import React from "react";
import mockImage from "../utils/images/Capture.PNG";

const StatsSection = () => {
  return (
    <div className="bg-[#0B0D17] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-30">
        {/* Left Section */}
        <div className="flex-[1.4]">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-300 via-green-500 to-green-600 bg-clip-text text-transparent">
            Trusted by Startups and Enterprises across
          </h2>
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-300 via-green-500 to-green-600 bg-clip-text text-transparent">
            20+ Nations
          </h2>

          <p className="text-gray-300 font-semibold mt-4">
            Nextwebi software development team understands your business needs
            and suggests the right technology to build scalable software
            solutions. We work as a long-term technology partner with our
            customers and our approach ensures that every project aligns with
            their strategic business goals, emphasizing scalability, security,
            and performance.
          </p>

          <p className="text-gray-300 font-semibold mt-4">
            We are committed to delivering high-quality, cost-effective
            solutions on time, ensuring you achieve maximum value.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <h3 className="text-yellow-300 text-4xl font-semibold">9+</h3>
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
              <h3 className="text-yellow-300 text-4xl font-semibold">1600+</h3>
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
              <h3 className="text-yellow-300 text-4xl font-semibold">600+</h3>
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
          <div className="flex gap-12 mt-8 flex-wrap border-t border-dashed pt-10 justify-center">
            <div className="bg-white rounded-lg p-4 w-25 h-25 flex items-center justify-center">
              <span className="text-black text-xs font-bold">ISO</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-25 h-25 flex items-center justify-center">
              <span className="text-black text-xs font-bold">ISO</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-25 h-25 flex items-center justify-center">
              <span className="text-black text-xs font-bold">Clutch</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-25 h-25 flex items-center justify-center">
              <span className="text-black text-xs font-bold">Award</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-25 h-25 flex items-center justify-center">
              <span className="text-black text-xs font-bold">Award</span>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-[0.6] flex justify-center">
          <img
            src={mockImage}
            alt="Team Working"
            className="rounded-4xl object-cover w-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
