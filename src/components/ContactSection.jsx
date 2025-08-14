import React from "react";
import bgimg from "../utils/images/bg.jpg";
import indFlag from '../utils/images/indFlag.png';
import usaFlag from '../utils/images/usaFlag.png'
import uaeFlag from '../utils/images/uaeFlag.png'

const ContactSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-30"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="text-white">
          <p className="text-[18px] mb-6">Get in Touch</p>
          <h2 className="text-[32px] md:text-3xl font-semibold leading-snug mb-12">
            Connect for Excellence Your Gateway to Exceptional Solutions.
          </h2>
          <div className="flex gap-6">
            {/* India */}
            <div className="mb-6 space-y-10">
              <img src={indFlag} alt="India Flag" className="h-14 w-auto" />
              <p className="font-bold text-[18px]">India</p>
              <p className="text-lg leading-relaxed">
                4th Floor, 32/1, Mpark, NCPR Industrial Layout, Doddanekundi Industrial Area 2, <br />
                Seetharampalya, Mahadevapura, Bengaluru, Karnataka 560048.
              </p>
            </div>

            {/* USA */}
            <div className="mb-6 space-y-10">
              <img src={usaFlag} alt="USA Flag" className="h-14 w-auto" />
              <p className="font-bold text-[18px]">USA</p>
              <p className="text-lg leading-relaxed">
                188 Spear st #350, San Francisco, CA 94105, United States
              </p>
            </div>
          </div>

          {/* UAE */}
          <div className="mb-6 space-y-10">
            <img src={uaeFlag} alt="UAE Flag" className="h-14 w-auto" />
            <p className="font-bold text-[18px]">UAE</p>
            <p className="text-lg leading-relaxed">
              Office No.2042, ABN Group, 20th Floor,<br /> Burjuman Business Tower, <br />
              Al Mankhool, Burdubai Dubai.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-[#131313] bg-opacity-60 p-6 rounded-xl border border-white text-white">
          <h3 className="text-[24px] px-6 font-semibold mb-10">
            Your Vision, Our Mission: Let's Shape Success Together.
          </h3>
          <form className="space-y-4 px-6">
            <input type="text" placeholder="Name" className="w-full p-3 rounded  placeholder-white text-xl bg-[#2A2A2A] focus:outline-none italic" />
            <input type="text" placeholder="Company Name" className="w-full p-3 rounded  placeholder-white text-lg bg-[#2A2A2A] focus:outline-none italic" />
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded placeholder-white text-lg bg-[#2A2A2A] focus:outline-none italic" />
            <input type="tel" placeholder="Contact Number" className="w-full p-3 rounded placeholder-white text-lg bg-[#2A2A2A] focus:outline-none italic" />
            <textarea placeholder="Describe Your Requirement" rows="4" className="w-full p-2 rounded placeholder-white text-lg bg-[#2A2A2A] focus:outline-none italic" ></textarea>

            <div className="flex items-center gap-2 text-sm justify-between">
              <div className="flex gap-2 items-center">
                <label htmlFor="portfolio" className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="portfolio"
                    className="sr-only"  // hides native checkbox but keeps it accessible
                  />
                  {/* Custom checkbox */}
                  <span className="h-[20px] w-[20px] inline-block bg-black border-2 border-white rounded-sm
                                    checked:bg-black checked:border-white
                                      peer-checked:bg-black peer-checked:border-white
                                  relative">
                    {/* Checkmark */}
                    <svg
                      className="hidden peer-checked:block absolute top-1.5 left-1.5 w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="italic ml-2">Click here to quickly get portfolio in your inbox</span>
                </label>
              </div>


              <div className="md:flex xs:flex-col items-center gap-2">
                <span className="font-bold">5 + 3</span>
                <input type="number" className="w-16 p-1 border-white rounded-md bg-[#2A2A2A] border focus:outline-none" />
              </div>
            </div>

            <button type="submit" className="w-full mt-4 py-3 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-xl text-white font-semibold">
              Request Proposal
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
