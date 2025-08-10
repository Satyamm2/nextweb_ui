import React from "react";
import Logo1 from '../utils/logos/Logomark.png'
import Logo2 from '../utils/logos/Logomark2.png'
import Logo3 from '../utils/logos/Logomark3.png'
import Logo4 from '../utils/logos/Logomark4.png'
import Logo5 from '../utils/logos/Logomark5.png'

const ClientsSection = () => {
  const clients = [
    { icon: <img src={Logo1} alt="Layers" className=""/>, name: "Layers" },
    { icon: <img src={Logo5} alt="Layers" className=""/>, name: "Sisyphus" },
    { icon: <img src={Logo4} alt="Layers" className=""/>, name: "Circooles" },
    { icon: <img src={Logo3} alt="Layers" className=""/>, name: "Catalog" },
    { icon: <img src={Logo2} alt="Layers" className=""/>, name: "Quotient" },
  ];

  return (
    <div className="bg-[#121212] text-white py-8">
      <div className="text-center mb-6">
        <p className="text-gray-300 font-semibold">Trusted by 100+ Clients Globally</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center gap-2">
            {client.icon}
            <span className="text-2xl font-semibold">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
