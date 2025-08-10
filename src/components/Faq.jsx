import React, { useState } from "react";

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
    <div className="bg-[#121212] text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        {/* Header Section - slightly shifted to the left */}
        <div className="mb-6 md:-ml-16">
          <h2 className="text-3xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-sm">
            We offer a range of pricing plans to fit every budget and level of
            need. Whether you're a solo professional
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-sm text-left px-4 py-4 flex cursor-pointer justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
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
                <div className="px-4 pb-4 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
