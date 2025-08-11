import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question:
      "Is it possible to enable incoming email in a SharePoint Online document library?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus ac lorem ultrices convallis.",
  },
  {
    question:
      "Where can I get more details about your offshore development services?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros non velit malesuada tincidunt.",
  },
  {
    question: "Can I change the developer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, orci eu pulvinar aliquet.",
  },
  {
    question: "Will I get access directly to my resources?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat sed metus vulputate tempus.",
  },
  {
    question: "Where is your offshore development center located?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a nisl non justo suscipit egestas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#121212] text-white flex flex-col px-4 sm:px-8 md:px-16 lg:px-30 xl:px-40 py-8 sm:py-12 md:py-20 lg:py-25">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        {/* Header Section - slightly shifted to the left */}
        <div className="mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
            We offer a range of pricing plans to fit every budget and level of
            need. Whether you're a solo professional
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mx-0 sm:mx-5 md:mx-10 lg:mx-23 xl:mx-32">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl overflow-hidden hover:scale-105"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-[16px] sm:text-[17px] md:text-[18px] text-left pl-4 sm:pl-6 md:pl-8 pr-6 sm:pr-8 md:pr-12 py-4 sm:py-5 md:py-7 flex cursor-pointer justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 md:pb-6 text-gray-400 text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
