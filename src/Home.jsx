import React, { useState, useEffect, useRef } from "react";
import headerImage from "./utils/images/headerImage.jpg";
import logo from "./utils/images/logo.png";
import { DownArrow } from "./utils/icons/icons";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const dropdownRefs = useRef([]);

  // Close submenu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideAll = dropdownRefs.current.every(
        (ref) => ref && !ref.contains(event.target)
      );
      if (clickedOutsideAll) {
        setOpenSubmenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center px-5 sm:px-10 py-5">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-semibold space-x-6 text-sm text-white">
          {[
            {
              title: "Company",
              submenu: ["About Us", "Our Team", "Careers", "Press", "Contact"],
            },
            {
              title: "Services",
              submenu: [
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "SEO",
                "Cloud Services",
              ],
            },
            {
              title: "Hire Developers",
              submenu: [
                "Hire React Devs",
                "Hire Node Devs",
                "Hire PHP Devs",
                "Hire Python Devs",
                "Hire .NET Devs",
              ],
            },
            {
              title: "Solutions",
              submenu: [
                "E-commerce",
                "CRM Solutions",
                "ERP Systems",
                "Custom Software",
                "API Development",
              ],
            },
            {
              title: "Technologies",
              submenu: ["React", "Angular", "Vue", "Node.js", "Python"],
            },
            {
              title: "Our Work",
              submenu: [
                "Case Studies",
                "Portfolio",
                "Client Reviews",
                "Industries Served",
                "Awards",
              ],
            },
          ].map((menu, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleSubmenu(index)}
                className="flex items-center hover:text-blue-400 space-x-1 focus:outline-none cursor-pointer"
              >
                <span>{menu.title}</span>
                <span className="mt-1 flex items-center justify-center">
                  <DownArrow />
                </span>
              </button>

              {openSubmenuIndex === index && (
                <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48 z-20">
                  <ul className="py-2">
                    {menu.submenu.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-xl">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col px-6 py-4 z-20 md:hidden">
    {[
      {
        title: "Company",
        submenu: ["About Us", "Our Team", "Careers", "Press", "Contact"],
      },
      {
        title: "Services",
        submenu: [
          "Web Development",
          "Mobile Apps",
          "UI/UX Design",
          "SEO",
          "Cloud Services",
        ],
      },
      {
        title: "Hire Developers",
        submenu: [
          "Hire React Devs",
          "Hire Node Devs",
          "Hire PHP Devs",
          "Hire Python Devs",
          "Hire .NET Devs",
        ],
      },
      {
        title: "Solutions",
        submenu: [
          "E-commerce",
          "CRM Solutions",
          "ERP Systems",
          "Custom Software",
          "API Development",
        ],
      },
      {
        title: "Technologies",
        submenu: ["React", "Angular", "Vue", "Node.js", "Python"],
      },
      {
        title: "Our Work",
        submenu: [
          "Case Studies",
          "Portfolio",
          "Client Reviews",
          "Industries Served",
          "Awards",
        ],
      },
    ].map((menu, index) => (
      <div key={index} className="w-full">
        <button
          onClick={() =>
            setOpenSubmenuIndex((prevIndex) =>
              prevIndex === index ? null : index
            )
          }
          className="w-full text-left py-2 flex justify-between items-center"
        >
          <span>{menu.title}</span>
          <span className="transform transition-transform duration-200" style={{
            transform: openSubmenuIndex === index ? "rotate(180deg)" : "rotate(0deg)",
          }}>
            <DownArrow />
          </span>
        </button>
        {openSubmenuIndex === index && (
          <ul className="pl-4 pb-2 space-y-1 text-sm">
            {menu.submenu.map((item, subIndex) => (
              <li key={subIndex}>
                <a
                  href="#"
                  className="block py-1 hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}

    <div className="mt-4">
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 cursor-pointer rounded-xl w-full">
        Contact Us
      </button>
    </div>
  </div>
)}


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-full max-w-3xl mx-auto px-4">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
          Offshore Software <br /> Development Company in New York
        </h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6">
          At Nextwebi, we provide agile result-oriented offshore software
          development services for companies ranging from startups to
          enterprises to help you keep up with constant technological evolution.
          We deploy a team of expert developers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-xl">
            Get in Touch
          </button>
          <button className="bg-transparent hover:bg-gray-800 text-white px-6 py-2 border border-white rounded-xl">
            Our Works
          </button>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
        <button className="bg-blue-500 hover:bg-blue-600 p-2 w-10 rounded-full font-semibold text-white cursor-pointer">
          {"<"}
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
        <button className="bg-blue-500 hover:bg-blue-600 p-2 w-10 rounded-full font-semibold text-white cursor-pointer">
          {">"}
        </button>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-10">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
