import React, { useState, useEffect, useRef } from "react";
import headerImage1 from "../utils/images/headerImage.jpg";
import headerImage2 from "../utils/images/headerImage2.jpg";
import headerImage3 from "../utils/images/headerImage3.jpeg";
import logo from "../utils/images/logo.png";
import { DownArrow } from "../utils/icons/icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: headerImage1,
    title: "Offshore Software Development Company in New York",
    description:
      "At Nextwebi, we provide agile result-oriented offshore software development services for companies ranging from startups to enterprises to help you keep up with constant technological evolution. We deploy a team of expert developers.",
  },
  {
    image: headerImage2,
    title: "Build Robust Mobile Applications with Us",
    description:
      "We create scalable, performance-driven mobile apps tailored to your business goals. Collaborate with our top-tier app developers today.",
  },
  {
    image: headerImage3,
    title: "Custom Web Development Services",
    description:
      "From eCommerce to enterprise solutions, our web development services help you scale quickly and efficiently.",
  },
];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const dropdownRefs = useRef([]);
  const slidesContainerRef = useRef(null);

  // Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

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

  const nextSlide = () => {
    if (isTransitioning) return;
    setTransitionDirection("next");
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setTransitionDirection("prev");
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setTransitionDirection(index > currentSlide ? "next" : "prev");
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Reset transitioning state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match this with your CSS transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides container */}
      <div 
        ref={slidesContainerRef}
        className="relative w-full h-full flex"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-transparent bg-opacity-40"></div>

            {/* Content for each slide */}
            <div className="relative z-10 flex flex-col items-center text-center justify-center h-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
              <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg mb-6 max-w-3xl">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <button className="bg-[#1468FB] hover:bg-blue-400 text-white px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base">
                  Get in Touch
                </button>
                <button className="bg-transparent hover:bg-gray-800 text-white px-4 sm:px-6 py-2 border border-white rounded-xl text-sm sm:text-base">
                  Our Works
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navbar - Fixed position */}
      <div className="absolute top-0 left-0 w-full z-20 px-4 sm:px-8 md:px-14 py-4 sm:py-6 md:py-8">
        <div className="relative z-10 flex justify-between items-center px-2 sm:px-5 md:px-10 py-3 sm:py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6 sm:h-8 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-semibold space-x-4 md:space-x-6 text-xs sm:text-sm md:text-base text-white">
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
              <div
                key={index}
                className="relative"
                ref={(el) => (dropdownRefs.current[index] = el)}
              >
                <button
                  onClick={() => toggleSubmenu(index)}
                  className="flex items-center hover:text-blue-400 space-x-1 focus:outline-none cursor-pointer text-sm sm:text-base"
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
            <button className="bg-[#E6392A] hover:bg-red-600 cursor-pointer text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-sm sm:text-base">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none text-2xl sm:text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
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
                  className="w-full text-left py-2 flex justify-between items-center text-base"
                >
                  <span>{menu.title}</span>
                  <span
                    className="transform transition-transform duration-200"
                    style={{
                      transform:
                        openSubmenuIndex === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
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
              <button className="bg-[#E6392A] hover:bg-red-600 text-white px-4 py-2 cursor-pointer rounded-xl w-full text-base">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Arrows */}
      <div className="absolute left-4 sm:left-8 md:left-14 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <button
          onClick={prevSlide}
          className="bg-[#1468FB] cursor-pointer hover:bg-white hover:text-black text-white p-2 sm:p-3 rounded-full shadow-md z-20"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute right-4 sm:right-8 md:right-14 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <button
          onClick={nextSlide}
          className="bg-[#1468FB] cursor-pointer hover:bg-white hover:text-black text-white p-2 sm:p-3 rounded-full shadow-md z-20"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-6 sm:bottom-12 w-full flex justify-center space-x-3 sm:space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning || index === currentSlide}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-blue-500" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
