import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import sub1 from '../utils/images/SubContainer.png'
import sub2 from '../utils/images/SubContainer2.png'
import sub3 from '../utils/images/SubContainer3.png'
import { motion } from "framer-motion";

const blogs = [
  {
    title: "AI in Healthcare",
    description:
      "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    image: sub1,
  },
  {
    title: "AI Ethics",
    description:
      "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    image: sub2,
  },
  {
    title: "Machine Learning Explained",
    description:
      "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    image: sub3,
  },
];

const RelatedBlogs = () => {
  return (
    <div className="bg-[#1A1A1A] text-white pt-15 ">
<motion.div
  initial={{ y: 100, opacity: 0 }}   // Start above (y: -100)
  whileInView={{ y: 0, opacity: 1 }}  // Animate down to original position
  transition={{ duration: 0.8 }}
  viewport={{ amount: 0.2 }}
>
      <h2 className="text-[42px] font-semibold px-5 md:px-25">Related Blogs</h2>
      <div className="grid grid-cols-1 px-18 pt-18 mt-5 pb-14 sm:grid-cols-2 lg:grid-cols-3 bg-[#171717]">
        {blogs.map((blog, index) => (
          <div key={index} className="p-7 border-r border-gray-800">
          <div className="bg-transparent rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-58 object-cover"
            />
            <div className="pt-7">
              <h3 className="text-[22px] font-semibold mb-2">{blog.title}</h3>
              <p className=" text-lg mb-4">{blog.description}</p>
              <a
                href="#"
                className="text-[16px] hover:underline inline-flex items-center gap-1"
              >
                Read more <GoArrowUpRight className="text-blue-600" size={26} />
              </a>
            </div>
          </div>
          </div>
        ))}
      </div>
</motion.div>
    </div>
  );
};

export default RelatedBlogs;
