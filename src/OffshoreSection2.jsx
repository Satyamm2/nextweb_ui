import React from "react";

const services = [
  {
    title: "Offshore software development consulting",
    desc: "Customized offshore software development consulting service to help you enhance your digital landscape with the latest technology. Our team of expert offshore software developers will help you integrate the latest technologies with a strategized roadmap and plan."
  },
  {
    title: "Digital Transformation",
    desc: "Transform your digital landscape with our professional digital transformation services which strategically uses digital technologies to radically improve or reinvent a company's business processes, customer experiences, and culture."
  },
  {
    title: "Web Development",
    desc: "Enhance your business agility with web application development solutions delivering an intuitive digital experience. Our team has significant experience in handling multiple types of offshore custom software development projects that will help you transform your digital landscape and augment sales."
  }
];

const Card = ({ title, desc }) => {
  return (
    <div className="relative p-6 bg-[#1c1c1c] text-white rounded-lg overflow-hidden group">
      {/* Border Animation */}
      <span className="absolute inset-0 border-2 border-transparent rounded-lg before:absolute before:inset-0 before:border-2 before:border-white before:rounded-lg before:animate-none before:content-[''] before:opacity-0 group-hover:opacity-100 group-hover:animate-border-spin"></span>
      
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const OffshoreSection2 = () => {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Output-Driven Offshore Software Development Centre</h1>
        <p className="text-gray-300 mb-10 max-w-3xl">
          Offshore development services refers to the practice of hiring a remote team or a software development company in a different company to help reduce development costs
        </p>

        {/* 2 Rows of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffshoreSection2;
