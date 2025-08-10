import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const blogs = [
  {
    title: "AI in Healthcare",
    description:
      "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    image: "/images/ai-healthcare.jpg",
  },
  {
    title: "AI Ethics",
    description:
      "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    image: "/images/ai-ethics.jpg",
  },
  {
    title: "Machine Learning Explained",
    description:
      "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    image: "/images/machine-learning.jpg",
  },
];

const RelatedBlogs = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <h2 className="text-2xl font-semibold mb-8">Related Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{blog.description}</p>
              <a
                href="#"
                className="text-sm text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                Read more <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
