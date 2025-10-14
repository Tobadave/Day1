import React from 'react';
import { partners } from './constants';

const Details = () => {
  return (
    <div className="text-white">
      {partners.map((item, index) => (
        <div key={index} className="flex flex-col items-center my-8">
          {/* Partners Section */}
          <h1 className="text-2xl my-2 font-semibold">{item.title}</h1>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-4 my-4">
            {item.partners.map((logo, idx) => (
              <div key={idx} className="flex items-center">
                <img src={logo} alt="partner logo" className="w-24 h-auto object-contain" />
              </div>
            ))}
          </div>

          <hr className="w-9/10 my-6 border-gray-500" />

          {/* About Section */}
          <div className="flex flex-col md:flex-row justify-between gap-6 px-8 text-center md:text-left">
            <div className="flex-1 text-xl font-bold">{item.aboutText}</div>
            <div className="flex-1 text-justify">{item.abouth2}</div>
          </div>

          {/* Numbers / Stats */}
          <div className="flex flex-wrap lg:w-3/4 justify-evenly my-8 gap-10">
            {item.details.map((detail, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">{detail.num}</h1>
                <p className="text-sm font-light">{detail.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
