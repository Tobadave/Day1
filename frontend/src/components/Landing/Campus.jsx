import React from 'react'
import { info } from '../constants';

const Info = () => {
    const data = info[0];
  return (
    <>
        {/* campus  */}
        <span className='flex flex-row gap-20 md:py-10'>

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
                <div className='flex flex-col py-2'>
                    {data.ft.map((list, idx)=>(
                        <div key={idx} className='flex flex-row gap-3 py-1 pb-2'>
                            <img src={list.icon} alt="icon"className='w-5 h-5'/>
                            <p className='text-sm font-extralight'>{list.p}</p>
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
            <div className='flex flex-1  b-300 flex-col'>
                <div className='flex '>
                    <img src={data.image}
                        className='rounded-3xl border-blue-400
                        object-fill w-full h-90 border-2 shadow-black/90 shadow-lg' alt="" />
                </div>
                {/* location selection */}
                <div className='justify-center flex gap-3 py-5'>
                    {data.button.map((li, idx)=>(
                        <button key={idx}
                        className='p-1 px-5 rounded-2xl bg-blue-600 hover:cursor-pointer'>
                            {li}
                        </button>
                    ))}
                </div>
            </div>

        </span>
    </>
  )
}

export default Info