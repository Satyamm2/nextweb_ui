import React from "react";
import bgimg from "../utils/images/bg.jpg";

const ContactSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">
        
        {/* Left Section */}
        <div className="text-white">
          <p className="text-sm mb-2">Get in Touch</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
            Connect for Excellence Your Gateway to Exceptional Solutions.
          </h2>

          {/* India */}
          <div className="mb-6">
            <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="mb-2" />
            <p className="font-semibold">India</p>
            <p className="text-sm leading-relaxed">
              4th Floor, 32/1, Mpark, NCPR Industrial Layout, Doddanekundi Industrial Area 2, <br />
              Seetharampalya, Mahadevapura, Bengaluru, Karnataka 560048.
            </p>
          </div>

          {/* USA */}
          <div className="mb-6">
            <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="mb-2" />
            <p className="font-semibold">USA</p>
            <p className="text-sm leading-relaxed">
              188 Spear st #350, San Francisco, CA 94105, United States
            </p>
          </div>

          {/* UAE */}
          <div>
            <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className="mb-2" />
            <p className="font-semibold">UAE</p>
            <p className="text-sm leading-relaxed">
              Office No.2042, ABN Group, 20th Floor, Burjuman Business Tower, <br />
              Al Mankhool, Burdubai Dubai.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-black bg-opacity-60 p-6 rounded-md border border-gray-700 text-white">
          <h3 className="text-lg font-medium mb-4">
            Your Vision, Our Mission: Let's Shape Success Together.
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none" />
            <input type="text" placeholder="Company Name" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none" />
            <input type="tel" placeholder="Contact Number" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none" />
            <textarea placeholder="Describe Your Requirement" rows="4" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"></textarea>
            
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="portfolio" />
              <label htmlFor="portfolio">Click here to quickly get portfolio in your inbox</label>
            </div>

            <div className="flex items-center gap-2">
              <span>5 + 3</span>
              <input type="text" className="w-16 p-1 rounded bg-gray-800 border border-gray-600 focus:outline-none" />
            </div>

            <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold">
              Request Proposal
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
