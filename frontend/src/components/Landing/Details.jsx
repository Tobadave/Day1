import React from 'react';
import { partners } from '../constants';

const Details = () => {
  return (
    <div className="text-white">
      {partners.map((item, index) => (
        <div key={index} className="flex flex-col items-center my-8">

          {/* Partners Section */}
          <span className='flex flex-col items-center w-full max-h-60'>
            <h1 className="text-3xl my-5 pb-0 font-semibold">{item.title}</h1>

            {/* Logos Section */}
            <div className="overflow-hidden w-full py-6 pb-10">
              <div className="flex gap-15 animate-[scroll_25s_linear_infinite]">
                {[...item.partners, ...item.partners].map((logo, i) => (
                  <img key={i} src={logo} alt="" className="w-[120px] object-contain flex-shrink-0" />
                ))}

                {/* {[...x, ...x].map(i, u)=>(
                  img
                )} */}
              </div>
              <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
            </div>
          </span>

          <hr className="w-full my-6 border-gray-500" />

          {/* About Section */}
          <div className="flex flex-col md:flex-row justify-between gap-6 
            text-center md:text-left my-10">
              {/* left side */}
            <div className="flex-1 text-2xl font-semibold">
              {item.aboutText}</div>
              {/* right side */}
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
