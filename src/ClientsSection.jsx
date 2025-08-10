import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { GiLightningBranches } from "react-icons/gi";
import { BsCircleFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { TbCircleLetterQ } from "react-icons/tb";

const ClientsSection = () => {
  const clients = [
    { icon: <FaLayerGroup className="text-purple-500 text-3xl" />, name: "Layers" },
    { icon: <GiLightningBranches className="text-green-400 text-3xl" />, name: "Sisyphus" },
    { icon: <BsCircleFill className="text-blue-400 text-3xl" />, name: "Circooles" },
    { icon: <FaRegCircle className="text-blue-500 text-3xl" />, name: "Catalog" },
    { icon: <TbCircleLetterQ className="text-purple-500 text-3xl" />, name: "Quotient" },
  ];

  return (
    <div className="bg-black text-white py-8">
      <div className="text-center mb-6">
        <p className="text-gray-300">Trusted by 100+ Clients Globally</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center gap-2">
            {client.icon}
            <span className="text-lg">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
