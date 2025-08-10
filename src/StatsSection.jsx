import React from "react";
// import mockImage from "./mock-image.jpg"; // replace with your image later
import mockImage from "./utils/images/headerImage.jpg";

const StatsSection = () => {
  return (
    <div className="bg-[#0B0D17] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-green-400 font-semibold text-lg">
            Trusted by Startups and Enterprises across 20+ Nations
          </h2>

          <p className="text-gray-300 mt-4">
            Nextwebi software development team understands your business needs
            and suggests the right technology to build scalable software solutions.
            We work as a long-term technology partner with our customers and our
            approach ensures that every project aligns with their strategic
            business goals, emphasizing scalability, security, and performance.
          </p>

          <p className="text-gray-300 mt-4">
            We are committed to delivering high-quality, cost-effective solutions
            on time, ensuring you achieve maximum value.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">9+</h3>
              <p className="text-gray-400 text-sm">Years in Business</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">1600+</h3>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">600+</h3>
              <p className="text-gray-400 text-sm">Client Relationships</p>
            </div>
          </div>

          {/* Certificates */}
          <div className="flex gap-6 mt-8 flex-wrap">
            <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-black text-xs font-bold">ISO</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-black text-xs font-bold">ISO</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-black text-xs font-bold">Clutch</span>
            </div>
            <div className="bg-white rounded-lg p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-black text-xs font-bold">Award</span>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={mockImage}
            alt="Team Working"
            className="rounded-xl object-cover w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
