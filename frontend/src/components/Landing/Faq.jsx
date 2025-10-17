import React, { useState } from 'react';
import { faq, arrowicon } from '../constants';

const Faq = () => {
  const data = faq[0];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="py-10 bg-white text-black">
        <span>
          {/* Title */}
          <div className="text-center pt-10">
            <h1 className="font-bold md:text-3xl">{data.h1}</h1>
            <p className="p-1 text-neutral-700">{data.abt}</p>
          </div>

          {/* Question section */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center w-2/4 py-10">
              {data.questions.map((item, idx) => (
                <div key={idx}>
                  <div>
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-1 py-5 px-3 flex flex-row justify-between items-center hover:cursor-pointer"
                    >
                      <h1 className="font-[100px] text-left ">{item.title}</h1>
                      <img
                        src={arrowicon}
                        alt="arrow"
                        className={`transition-transform duration-300 w-3 ${
                          openIndex === idx ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>

                    
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openIndex === idx
                          ? 'max-h-96 opacity-100 mt-2'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      
                    <div className='text-sm font-extralight px-4 pb-5'>
                      <p className="p-1 text-neutral-700">{item.p1}</p>
                      <p className="p-1 text-neutral-700">{item.p2}</p>
                    </div>
                    </div>
                    <hr className='text-neutral-300 mx-0' />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center gap-2 py-10 my-5'>
            {/* <div className='justify-center'> */}
            <h1 className='font-bold text-2xl'>{data.h2}</h1>
            <p className='text-neutral-700'>{data.p2}</p>
            <button 
            className='bg-blue-500 rounded-md md:px-6 p-2 mt-3 hover:cursor-pointer hover:bg-blue-600
            text-white text-sm'>{data.btnText}</button>
            {/* </div> */}
          </div>

        </span>
      </div>
    </>
  );
};

export default Faq;
