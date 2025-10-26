import React, { useState } from 'react';
import { info } from '../constants';

const Info = () => {
    const data = info[0];
  const [active, setActive] = useState('Lagos');

  return (
    <div className='section-width'>
        {/* campus  */}
        <span className='flex flex-col md:flex-row gap-20 py-10 md:py-20'>

            {/*----------- Our Campus FEATURES */}
            <div className='flex flex-1'>
                <div className='flex flex-col p-1'>
                <div className='mb-3'>
                    <h1 className='text-3xl font-semibold mb-3'>
                        {data.head}</h1>
                    <h2 className='text-sm'>
                        {data.p}</h2>
                </div>
                {/* The 4 features */}
                <div className='flex flex-col py-2 gap-2'>
                    {data.ft.map((list, idx)=>(
                        <div key={idx} className='flex flex-row gap-3 py-1 pb-2'>
                            <img src={list.icon} alt="icon"className='w-6 h-6'/>
                            <p className='text-sm font-extralight items-center flex'>{list.p}</p>
                        </div>
                    ))}
                </div>
                {/* The 2 About SECTION */}
                <div className=''>
                    <h1 className='font-semibold py-2'>{data.head2}</h1>
                    <p className='font-light text-sm'>{data.info}</p>
                </div>
            </div>
            </div>

            {/* ---------Picture Right Section */}
             <div className="flex flex-1 flex-col">
                {/* Image */}
                <div className="flex">
                    <img
                    src={data.images[active]}
                    alt={active}
                    className="rounded-3xl border-2 border-blue-400 object-fill w-full h-50 md:h-90 shadow-black/90 shadow-lg"
                    />
                </div>

                {/* Location buttons */}
                <div className="justify-center flex gap-3 py-5">
                <div className="flex flex-row items-center justify-evenly gap-2 rounded-full bg-white p-2 shadow-inner border border-gray-200">
                    {data.button.map((city) => (
                    <button
                        key={city}
                        onClick={() => setActive(city)}
                        className={`relative px-8 py-2 rounded-full text-[12px] font-medium transition-all duration-300 ease-in-out 
                        shadow-xl hover:shadow-md  hover:cursor-pointer
                        ${
                            active === city
                            ? 'bg-blue-600 text-white scale-105'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {city}
                    </button>
                    ))}
                </div>
                </div>
            </div>

        </span>
    </div>
  )
}

export default Info