import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const OffshoreSection3 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Offshore software development team deployment",
      content: (
        <>
          <p className="text-gray-300 text-sm leading-relaxed">
            At Nextwebi, offshore software development firm we entail deploying
            a team at a different location to help you meet your technological
            requirements. The software industry is ramping up at a faster pace
            across the globe creating fierce competition and increasing the cost
            of running the business. Inevitably, Onsite-Offshore Software
            Development emerged as a solution for many businesses looking to
            build custom services to tackle the problems arising timely.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Enhanced business process quality
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Flexible and scalable technological solutions
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Technically proficient team of offshore developers
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> On-time project delivery with high-security standards
            </li>
          </ul>
        </>
      ),
    },
    {
      title:
        "Workflow post offshore software development team establishment",
      content: (
        <p className="text-gray-300 text-sm leading-relaxed">
          Hire a dedicated offshore software development team with Nextwebi and
          expand your business outreach while cutting recruitment and
          infrastructure costs.
        </p>
      ),
    },
    {
      title: "Cost of offshore development services",
      content: (
        <p className="text-gray-300 text-sm leading-relaxed">
          Estimating the cost of offshore development services can be a tricky
          process as it depends on various factors in domain knowledge, industry
          expertise, and project knowledge.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Section */}
      <div>
        <h2 className="text-3xl font-bold leading-snug">
          Offshore Dedicated Development Team For Your Project Requirements
        </h2>
        <p className="mt-4 text-gray-400">
          Nextwebi is a leading offshore software development company we save
          you from hiring hassle and deploy a team of dedicated
        </p>
        <div className="bg-gray-900 rounded-xl p-6 mt-8 flex flex-col gap-4 max-w-xs">
          <p className="text-white font-medium">
            Let's begin with a no-obligation conversations.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 w-fit">
            Request a Quote <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Right Section - Accordions */}
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.title}</h3>
              <span>{openIndex === index ? "▼" : "▶"}</span>
            </div>
            {openIndex === index && (
              <div className="mt-4">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffshoreSection3;
