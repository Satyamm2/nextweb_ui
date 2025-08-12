import React from "react";
import bgpng1 from '../utils/images/bgpng1.png';
import bgpng2 from '../utils/images/bgpng2.png';
import "./box.css";

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
    <div className="box group px-4 sm:px-6 py-8 text-white rounded-xl  cursor-pointer">

      {/* Content */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 z-10">{title}</h3>
      <p className="leading-relaxed z-10 text-sm sm:text-base">{desc}</p>

    </div>
  );
};

const OffshoreSection2 = () => {
  return (
    <div className="bg-black min-h-screen text-white py-10 sm:py-14 md:py-16 px-6 sm:px-12 md:px-24 lg:px-36 relative overflow-hidden">
      {/* Top right background image */}
      <img
        src={bgpng1}
        alt="Background top right"
        className="absolute top-0 right-0 object-contain pointer-events-none select-none"
        style={{
          opacity: 0.5,
          width: 'auto',
          height: '500px',
          // Responsive heights for bigger screens:
          // Tailwind can’t directly style inline style media queries, so we do here for example:
        }}
      />
      {/* Bottom left background image */}
      <img
        src={bgpng2}
        alt="Background bottom left"
        className="absolute bottom-0 left-0 object-contain pointer-events-none select-none"
        style={{
          opacity: 0.5,
          width: 'auto',
          height: '700px',
        }}
      />

      <div className="mx-auto relative z-10 max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 leading-tight sm:leading-snug">
          Output-Driven Offshore Software
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight sm:leading-snug">
          Development Centre
        </h1>

        <div className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-14 max-w-3xl leading-relaxed">
          <p>Offshore development services refers to the practice of hiring a remote team or a software development</p>
          <p> company in a different company to help reduce development costs</p>
        </div>

        {/* 2 Rows of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffshoreSection2;
