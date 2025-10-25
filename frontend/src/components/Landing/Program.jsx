import React from 'react'
import { about } from '../constants'
// about

const Program = () => {
    const data = about[0];
  return (
    <div className='section-width bg-white text-black py-5 pt-20'>

        {/* Our Program at a Glance TEXT*/}
        <div className='text-center'>
            <h1 
            className='font-bold text-3xl py-2'>{data.h1}</h1>
            <h2 className='text-lg'
            >{data.h2}</h2>
        </div>


        {/* Main features boxes */}
        <span 
        className='flex flex-row flex-wrap gap-2 justify-center pt-10'>
            {data.lists.map((item, idx)=>(
            <div 
                className='flex flex-col border-1
                border-gray-300 rounded-lg p-4 max-w-90 text-gray-700
                hover:bg-black/10 transition-normal| duration-10s'
                key={idx}>
                    {/* the icons */}
                    <div className='py-2'>
                        <img src={item.icon} alt=""
                        className='w-7' />
                    </div>
                    {/* the informations */}
                    <p className='font-bold my-2'>
                        {item.title}
                    </p>
                    <p className='text-sm'>
                        {item.details}
                    </p>
            </div>
            ))}
        </span>

            <div className='flex justify-center py-4
            pb-10'>
                <button
                    className='btn btn-primary m'
                >{data.btnText}</button>
            </div>

    </div>
  )
}

export default Program