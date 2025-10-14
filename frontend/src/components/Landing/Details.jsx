import React from 'react';
import { partners } from '../constants';

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

          <hr className="w-full my-6 border-gray-500" />

          {/* About Section */}
          
          <div className="flex flex-col md:flex-row justify-between gap-6 
            text-center md:text-left my-10">

            <div className="flex-1 text-2xl font-semibold">{item.aboutText}</div>

            <div className="flex-1 text-justify leading-5
            text-sm text-gray-200">{item.abouth2}</div>
          </div>

          {/* Numbers / Stats */}
          <div className="flex flex-wrap lg:w-full justify-between my-8 gap-10 py-15">
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
