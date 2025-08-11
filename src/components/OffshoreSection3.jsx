import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import paperplane from '../utils/images/paperplane.png';
import downarrow from '../utils/images/downarrow.png';
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

const OffshoreSection3 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Offshore software development team deployment",
      content: (
        <>
          <p className="text-[16px] leading-relaxed">
            At Nextwebi, offshore software development firm we entail deploying
            a team at a different location to help you meet your technological
            requirements. The software industry is ramping up at a faster pace
            across the globe creating fierce competition and increasing the cost
            of running the business. Inevitably, Onsite-Offshore Software
            Development emerged as a solution for many businesses looking to
            build custom services to tackle the problems arising timely.
          </p>
          <ul className="mt-4 space-y-2 text-[16px] ">
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-blue-500" size={25} /> Enhanced business process
              quality
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-blue-500" size={25} /> Flexible and scalable
              technological solutions
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-blue-500" size={25} /> Technically proficient team
              of offshore developers
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-blue-500" size={25} /> On-time project delivery
              with high-security standards
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Workflow post offshore software development team establishment",
      content: (
        <p className=" text-[16px] leading-relaxed">
          Hire a dedicated offshore software development team with Nextwebi and
          expand your business outreach while cutting recruitment and
          infrastructure costs.
        </p>
      ),
    },
    {
      title: "Cost of offshore development services",
      content: (
        <p className=" text-[16px] leading-relaxed">
          Estimating the cost of offshore development services can be a tricky
          process as it depends on various factors in domain knowledge, industry
          expertise, and project knowledge.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-30 grid grid-cols-1 md:grid-cols-2 gap-">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        <div className="text-[42px] font-semibold leading-snug">
          <h2 >
            Offshore Dedicated
          </h2>
          <h2 >
            Development Team For Your
          </h2>
          <h2 >
            Project Requirements
          </h2>
        </div>
        <p className="mt-8 text-[20px] max-w-lg">
          Nextwebi is a leading offshore software development company we save
          you from hiring hassle and deploy a team of dedicated
        </p>
        <div className="bg-[#1b1b1b] relative rounded-xl px-8 pt-8 pb-5 space-y-4 mt-12 flex flex-col gap-4 max-w-[420px]">
          <img src={paperplane} alt="paperplane logo" className="h-12 w-12" />
          <p className="text-[25px] font-semibold">
            Let's begin with a no-obligation conversation.
          </p>
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-[18px] px-5 py-3 rounded-xl font-semibold flex items-center gap-2 w-fit">
            Request a Quote
          </button>

          {/* Position this icon absolutely at the bottom right */}
          <FiArrowDownRight className="text-[#313131] absolute bottom-1 right-1" size={80} />
        </div>

      </motion.div>

      {/* Right Section - Accordions */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        className="space-y-4"
      >
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-[#1b1b1b] rounded-xl p-6 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[20px]">{item.title}</h3>
              <span>
                {openIndex === index ? <SlArrowDown /> : <SlArrowRight />}
              </span>
            </div>
            {openIndex === index && <div className="mt-4">{item.content}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OffshoreSection3;
