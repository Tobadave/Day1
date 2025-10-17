import React from 'react'
import { about } from '../constants'
// about

const Program = () => {
    const data = about[0];
  return (
    <div className='bg-white text-black'>
        <span className='text-center'>
            <h1 
            className='font-bold text-3xl py-2'>{data.h1}</h1>
            <h2 className='text-lg'
            >{data.h2}</h2>
        </span>

        <span 
        className='flex flex-row flex-wrap gap-2 justify-center pt-10'>
            {data.lists.map((item, idx)=>(

            <div 
                className='bg-gray-100 flex flex-col border-1 
                border-gray-400 rounded-lg p-4 max-w-90 text-gray-700'
                key={idx}>
                    <div>
                        <img src={item.icon} alt=""
                        className='w-10' />
                    </div>
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